import NavBar from "@/components/navbar";

export function RSVPage() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <NavBar />
            <RSVPContent />
        </div>
    )
}

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { APIURL } from "@/main";
import { useState } from "react";
import { redirect } from "react-router-dom";
import { toast } from "sonner";

export default function RSVPContent() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);


    async function submitRSVP(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = formData.get("name")
        const email = formData.get("email")
        const attendees_str = formData.get("attendees")
        const attendees: number = Number(attendees_str)
        setSubmitting(true);
        const response = await fetch(APIURL + "/rsvp", {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ name, email, attendees }),
        })

        console.log('Response Status Code:', response.status);

        if (response.status === 200 || response.status === 201) {
            const data = await response.json();
            const { token, rsvp } = data;
            localStorage.setItem("rsvp", JSON.stringify(rsvp));
            localStorage.setItem("rsvp_token", JSON.stringify(token));
            setSubmitted(true)
        }


        setSubmitting(false);
    }

    const rsvp_string = localStorage.getItem("rsvp");
    // @ts-expect-error only read in the case that we have rsvp data
    const rsvp = JSON.parse(rsvp_string);
    if (rsvp !== null && !submitted) {
        setSubmitted(true)
    }

    return (
        <div className="mx-auto max-w-[600px] space-y-8 py-12 px-4 md:px-0">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">RSVP for the Wedding</h1>
                <p className="text-muted-foreground">
                    Let us know that you will be in attendance.
                </p>
            </div>
            {
                !submitted ?

                    <form className="space-y-4" onSubmit={submitRSVP}>
                        <div className="md:grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" placeholder="John Doe" defaultValue={"John Doe"} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" placeholder="john@example.com" defaultValue="john@example.com" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="attendees">Number of Attendees</Label>
                            <Input id="attendees" name="attendees" type="number" placeholder="2" min="1" max="10" defaultValue={1} required />
                        </div>
                        <Button type="submit" className="w-full" disabled={submitting}>
                            RSVP
                        </Button>
                    </form>
                    : <PreviouslySubmitted />

            }
        </div>
    )
}


function PreviouslySubmitted() {
    const [submitting, setSubmitting] = useState(false);

    const updateRSVP = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = formData.get("name")
        const email = formData.get("email")
        const attendees = Number(formData.get("attendees"));

        let token = localStorage.getItem("rsvp_token");
        if (token === null) {
            console.error("no rsvp data when it is expected to be there")
            redirect("/error");
        }
        // @ts-expect-error checked above
        token = JSON.parse(token);

        setSubmitting(true);
        const response = await fetch(APIURL + "/rsvp", {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": `${token}`
            },

            body: JSON.stringify({ name, email, attendees }),
        })

        if (response.status === 200 || response.status === 201) {
            const rsvp = await response.json();
            localStorage.setItem("rsvp", JSON.stringify(rsvp));
            toast("RSVP Updated successfully")
        } else {
            toast("Failed to update RSVP, please try again or check your connection")
        }


        console.log('Response Status Code:', response.status);
        setSubmitting(false);
    }

    const cancelRSVP = async () => {

        let token = localStorage.getItem("rsvp_token");
        if (token === null) {
            console.error("no rsvp data when it is expected to be there")
            redirect("/error");
        }
        setSubmitting(true);

        // @ts-expect-error checked above
        token = JSON.parse(token);
        const response = await fetch(APIURL + "/rsvp", {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": `${token}`
            },
        });

        if (response.status === 200) {
            localStorage.removeItem("rsvp");
            localStorage.removeItem("rsvp_token");
            toast("RSVP Canceled successfully");
            setSubmitting(false)
        }
    }


    const rsvp_data_string = localStorage.getItem("rsvp");
    // @ts-expect-error only read in the case that we have rsvp data
    const rsvp_data = JSON.parse(rsvp_data_string);
    if (rsvp_data === null) {
        console.error("no rsvp data when it is expected to be there")
        redirect("/error");
    }
    const { name, email, attendees } = rsvp_data;

    return (
        <div className="text-center justify-center">
            <h1 className="text-3xl font-bold">You have previously submitted an RSVP, you may update it below</h1>
            <form className="space-y-4" onSubmit={updateRSVP}>
                <div className="md:grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="John Doe" defaultValue={name} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" defaultValue={email} required />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="attendees">Number of Attendees</Label>
                    <Input id="attendees" name="attendees" type="number" placeholder="2" min="1" max="20" defaultValue={attendees} required />
                </div>
                <Button type="submit" className="w-full" disabled={submitting}>
                    Update
                </Button>
            </form>
            <Button variant={"destructive"} onClick={cancelRSVP} className="w-full mt-4">Cancel RSVP</Button>
        </div>
    )
}