import NavBar from "@/components/navbar"

export function DressCodePage() {
    return (
        <>
            <NavBar />
            <div className="max-w-5xl mx-auto px-4 py-12 md:px-6 md:py-16">
                <div className="space-y-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Dress Code</h1>
                        <p className="mt-4 text-muted-foreground">Formal Attire Required</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div>
                            <h2 className="text-xl font-semibold">For Men</h2>
                            <p className="mt-4 text-muted-foreground">
                                Gentlemen, please wear a dark suit, white shirt, and a tie. Opt for classic styles and avoid anything too
                                casual or flashy.
                            </p>
                            <div className="mt-6 grid grid-cols-3 gap-4">
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src="https://m.media-amazon.com/images/I/611ubaaQpfL._AC_SL1500_.jpg"
                                        alt="Formal suit"
                                        width={300}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Dress shirt"
                                        width={300}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img src="/placeholder.svg" alt="Tie" width={300} height={400} className="object-cover w-full h-full" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">For Women</h2>
                            <p className="mt-4 text-muted-foreground">
                                Ladies, a cocktail dress or a formal gown is appropriate. Avoid anything too casual or revealing.
                            </p>
                            <div className="mt-6 grid grid-cols-3 gap-4">
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src="https://i.ebayimg.com/images/g/bkIAAOSwQ8Jj~qrX/s-l1200.jpg"
                                        alt="Cocktail dress"
                                        width={300}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Formal gown"
                                        width={300}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Accessories"
                                        width={300}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">For Dogs</h2>
                            <p className="mt-4 text-muted-foreground">
                                Dogs must wear a suit XD
                            </p>
                            <div className="mt-6 grid grid-cols-3 gap-4">
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src="https://media.istockphoto.com/id/518246356/photo/business-dog.jpg?s=612x612&w=0&k=20&c=fDwHoaNsABzVOf_Xi8uSJrgZXfEtpeCgnYmSXDEiSLM="
                                        alt="Cocktail dress"
                                        width={300}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Formal gown"
                                        width={300}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Accessories"
                                        width={300}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">For Children</h2>
                            <p className="mt-4 text-muted-foreground">
                                Children...
                            </p>
                            <div className="mt-6 grid grid-cols-3 gap-4">
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src="https://cdn0.hitched.co.uk/article/6711/original/1280/jpg/91176-next-waistcoat.jpeg"
                                        alt="Cocktail dress"
                                        width={300}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Formal gown"
                                        width={300}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Accessories"
                                        width={300}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}