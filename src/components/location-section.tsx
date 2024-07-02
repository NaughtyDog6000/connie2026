
export function LocationSection() {
    return (
        <section className="py-4 md:py-8 lg:py-12 bg-background h-128">
            <div className="container">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Location</h2>
                        <p className="mt-4 text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur architecto optio temporibus cupiditate ad, distinctio reiciendis alias assumenda possimus, repellat numquam obcaecati commodi eos. Atque aut nostrum accusamus quia aliquam?
                        </p>

                    </div>

                    <div className="h-96 px-6">
                        <iframe width="100%" height="100%" loading="lazy"
                            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ1cbMfWqacUgRAKCZ1COLDQM&key=AIzaSyAZsCwueWuWuuOdmeNhgFGG-L3tAYKbWLU&zoom=4"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    )
}