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

export default function RSVPContent() {
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = formData.get("name")
        const email = formData.get("email")
        const attendees_str = formData.get("attendees")
        const attendees: number = Number(attendees_str)
        console.log({ name, email, attendees })

        await fetch("https://connie-api.nd6k.uk/rsvp", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ name, email, attendees }),
        });
    }


    return (
        <div className="mx-auto max-w-[600px] space-y-8 py-12 px-4 md:px-0">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">RSVP for the Wedding</h1>
                <p className="text-muted-foreground">
                    Let us know that you will be in attendance.
                </p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="attendees">Number of Attendees</Label>
                    <Input id="attendees" name="attendees" type="number" placeholder="2" min="1" max="10" required />
                </div>
                <Button type="submit" className="w-full">
                    RSVP
                </Button>
            </form>
        </div>
    )
}