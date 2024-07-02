import { Footer } from "@/components/footer";
import NavBar from "@/components/navbar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function LocationPage() {
    const locationImages: CarouselImageItem[] = [
        {
            url: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
            title: "image"
        },
        {
            url: "https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1907862843.jpg",
            title: "image"
        },
        {
            url: "https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&o=5&pid=1.9",
            title: ""
        },
        {
            url: "https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp",
            title: ""
        },
        {
            url: "https://deepai.org/static/images/cyberpunkdolphin.png",
            title: ""
        },
    ]

    return (
        <>
            <NavBar />
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
                    <CarrouselThing images={locationImages} />
                </div>
            </section>
            <Footer />
        </>
    )
}

type CarouselImageItem = {
    url: string,
    title: string,
}


export default function CarrouselThing({ images }: { images: CarouselImageItem[] }) {
    return (
        <div className="w-full md:p-4 pt-2">
            <Carousel className="w-full max-w-6xl mx-auto">
                <CarouselContent>
                    {images.map((element, index) => (
                        <CarouselItem key={index}>
                            <img
                                src={element.url}
                                alt={element.title}
                                width={1600}
                                height={900}
                                className="w-full h-[600px] md:h-[800px] object-cover"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-primary focus:text-primary">
                    <ChevronLeftIcon className="w-8 h-8" />
                </CarouselPrevious>
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-primary focus:text-primary">
                    <ChevronRightIcon className="w-8 h-8" />
                </CarouselNext>
                {/* TODO! buttons that move to the correct image & generate from length of array */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white focus:bg-white" />
                    <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white focus:bg-white" />
                    <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white focus:bg-white" />
                </div>
            </Carousel>
        </div>
    )
}