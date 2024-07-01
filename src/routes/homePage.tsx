/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BpJQ646Msj2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import NavBar from "@/components/navbar";
import CountdownTimer from "@/components/timer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom";

export default function HomePage() {
    const weddingDate: Date = new Date('2024-08-31T00:00:00');

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <NavBar />
            <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
                <div className="container flex flex-col items-center gap-4 md:flex-row md:justify-between">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Connor & Ronnie</h1>
                        <p className="text-lg font-medium mt-2">Tying the Knot on June 10, 2023</p>
                    </div>
                    <img
                        src="/placeholder.svg"
                        alt="Sarah and John"
                        width={400}
                        height={400}
                        className="rounded-full w-40 h-40 object-cover"
                    />
                </div>
            </header>
            <main className="flex-1">
                <CountdownTimer targetDate={weddingDate} />

                <section className="py-12 md:py-16 lg:py-20 bg-background">
                    <div className="container">
                        <div className="grid gap-8 md:grid-cols-2 items-center">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Us</h2>
                                <p className="mt-4 text-muted-foreground">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur architecto optio temporibus cupiditate ad, distinctio reiciendis alias assumenda possimus, repellat numquam obcaecati commodi eos. Atque aut nostrum accusamus quia aliquam?
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="/placeholder.svg"
                                    alt="Wedding Photo 1"
                                    width={300}
                                    height={300}
                                    className="rounded-lg object-cover"
                                />
                                <img
                                    src="/placeholder.svg"
                                    alt="Wedding Photo 2"
                                    width={300}
                                    height={300}
                                    className="rounded-lg object-cover"
                                />
                                <img
                                    src="/placeholder.svg"
                                    alt="Wedding Photo 3"
                                    width={300}
                                    height={300}
                                    className="rounded-lg object-cover"
                                />
                                <img
                                    src="/placeholder.svg"
                                    alt="Wedding Photo 4"
                                    width={300}
                                    height={300}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <KeyGuestsSection />
                <WeddingGallary />
                <FindOutMoreSection />
            </main>
            <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6">
                <div className="container flex justify-between items-center">
                    <p>&copy; 2024 Connor &amp; Ronnie All rights reserved.</p>
                    <nav className="flex gap-4">
                        <Link to={"https://nd6k.uk"} className="hover:underline" >
                            Made By Rob
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    )
}


function WeddingGallary() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Wedding Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <img
                        src="/placeholder.svg"
                        alt="Wedding Photo 5"
                        width={300}
                        height={300}
                        className="rounded-lg object-cover"
                    />
                    <img
                        src="/placeholder.svg"
                        alt="Wedding Photo 6"
                        width={300}
                        height={300}
                        className="rounded-lg object-cover"
                    />
                    <img
                        src="/placeholder.svg"
                        alt="Wedding Photo 7"
                        width={300}
                        height={300}
                        className="rounded-lg object-cover"
                    />
                    <img
                        src="/placeholder.svg"
                        alt="Wedding Photo 8"
                        width={300}
                        height={300}
                        className="rounded-lg object-cover"
                    />
                    <img
                        src="/placeholder.svg"
                        alt="Wedding Photo 9"
                        width={300}
                        height={300}
                        className="rounded-lg object-cover"
                    />
                    <img
                        src="/placeholder.svg"
                        alt="Wedding Photo 10"
                        width={300}
                        height={300}
                        className="rounded-lg object-cover"
                    />
                    <img
                        src="/placeholder.svg"
                        alt="Wedding Photo 11"
                        width={300}
                        height={300}
                        className="rounded-lg object-cover"
                    />
                    <img
                        src="/placeholder.svg"
                        alt="Wedding Photo 12"
                        width={300}
                        height={300}
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
        </section>
    )
}


function FindOutMoreSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">More Info</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Venue info</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Address and location Details
                            </p>
                            <div className="mt-4">
                                <Link
                                    to={"/"}
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Amazon</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Sarah and John have also created a registry on Amazon. Find everything from kitchen appliances to
                                home decor.
                            </p>
                            <div className="mt-4">
                                <Link
                                    to={"/"}
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Zola</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Sarah and John have also created a registry on Zola. Find everything they need for their new home.
                            </p>
                            <div className="mt-4">
                                <Link
                                    to={"/"}
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}


function KeyGuestsSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Wedding Party</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
                        <Avatar className="w-20 h-20 mb-2">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>B1</AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-medium">Emily Smith</h3>
                        <p className="text-muted-foreground">Bridesmaid</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
                        <Avatar className="w-20 h-20 mb-2">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>B2</AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-medium">Jessica Lee</h3>
                        <p className="text-muted-foreground">Bridesmaid</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
                        <Avatar className="w-20 h-20 mb-2">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>G1</AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-medium">Michael Johnson</h3>
                        <p className="text-muted-foreground">Groomsman</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
                        <Avatar className="w-20 h-20 mb-2">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>G2</AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-medium">David Lee</h3>
                        <p className="text-muted-foreground">Groomsman</p>
                    </div>
                </div>
            </div>
        </section>
    )
}



// function CountdownSection({ targetDate }: { targetDate: Date }) {
//     const [currentTime, setTime] = useState(Date.now());

//     useEffect(() => {
//         const interval = setInterval(() => setTime(Date.now()), 1000);
//         return () => {
//             clearInterval(interval);
//         };
//     }, []);

//     const diff = +targetDate - currentTime;

//     const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
//     const minutes = Math.floor((diff / (1000 * 60)) % 60) + "";
//     const seconds = Math.floor((diff / 1000) % 60) + "";

//     return (
//         <section className="py-12 md:py-16 lg:py-20">
//             <div className="countdown">
//                 <div data-content="Days">{days.length === 1 ? `0${days}` : days}</div>
//                 <div data-content="Hours">{hours.length === 1 ? `0${hours}` : hours}</div>
//                 <div data-content="Minutes">{minutes.length === 1 ? `0${minutes}` : minutes
//                 }</div>
//                 <div data-content="Seconds">{seconds.length === 1 ? `0${seconds}` : seconds
//                 }</div>
//             </div>
//         </section >
//     )
// }