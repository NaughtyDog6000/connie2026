import { Footer } from "@/components/footer";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BeefIcon, Bold, CarrotIcon, ChevronDownIcon, FishIcon, Italic, TurtleIcon, Underline, WheatIcon } from "lucide-react";

export function MenuPage() {
    return (
        <>
            <NavBar />
            <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
                <div className="space-y-4 text-center">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Wedding Food Options</h1>
                    <p className="max-w-3xl mx-auto text-muted-foreground">
                        Explore our delectable selection of gourmet dishes to delight your wedding guests. From classic entrees to
                        innovative vegetarian options, we have something to satisfy every palate.
                    </p>
                </div>
            </div>
            <div>
                <TooltipProvider>
                    <ToggleGroup type="multiple">
                        <Tooltip>
                            <TooltipTrigger>
                                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                                    <Bold className="h-4 w-4" />
                                </ToggleGroupItem>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Toggle if Dishes containing BOLD are shown</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                                    <Italic className="h-4 w-4" />
                                </ToggleGroupItem>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Toggle if Dishes containing ITALIC are shown</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                                    <Underline className="h-4 w-4" />
                                </ToggleGroupItem>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Toggle if Dishes containing Underline are shown</p>
                            </TooltipContent>
                        </Tooltip>
                    </ToggleGroup>
                </TooltipProvider>
            </div>
            <main className="flex-1">
                <section className="container px-4 md:px-6 py-12 md:py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <MenuItemCard item={menuItem} />
                        <MenuItemCard item={menuItem} />
                        <MenuItemCard item={menuItem} />
                        <MenuItemCard item={menuItem} />
                        <div className="bg-background rounded-lg overflow-hidden shadow-lg group">
                            <img
                                src="/placeholder.svg"
                                alt="Roasted Vegetable Lasagna"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Roasted Vegetable Lasagna</h3>
                                <p className="text-muted-foreground text-sm">
                                    Layers of fresh pasta, roasted vegetables, and a creamy béchamel sauce.
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <CarrotIcon className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">Vegetarian</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-background rounded-lg overflow-hidden shadow-lg group">
                            <img
                                src="/placeholder.svg"
                                alt="Beef Tenderloin with Mushroom Sauce"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Beef Tenderloin with Mushroom Sauce</h3>
                                <p className="text-muted-foreground text-sm">
                                    Tender beef tenderloin served with a rich, creamy mushroom sauce.
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <BeefIcon className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">Contains beef</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-background rounded-lg overflow-hidden shadow-lg group">
                            <img
                                src="/placeholder.svg"
                                alt="Vegetable Stir-Fry with Tofu"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Vegetable Stir-Fry with Tofu</h3>
                                <p className="text-muted-foreground text-sm">
                                    A colorful medley of fresh vegetables and tofu, stir-fried in a savory sauce.
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <CarrotIcon className="w-4 h-4 text-muted-foreground" />
                                    <TurtleIcon className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">Vegan</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-background rounded-lg overflow-hidden shadow-lg group">
                            <img
                                src="/placeholder.svg"
                                alt="Chicken Marsala"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Chicken Marsala</h3>
                                <p className="text-muted-foreground text-sm">
                                    Tender chicken breast simmered in a rich Marsala wine sauce with mushrooms.
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <BeefIcon className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">Contains chicken</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-background rounded-lg overflow-hidden shadow-lg group">
                            <img
                                src="/placeholder.svg"
                                alt="Gluten-Free Quinoa Salad"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Gluten-Free Quinoa Salad</h3>
                                <p className="text-muted-foreground text-sm">
                                    A refreshing salad of quinoa, fresh vegetables, and a tangy vinaigrette.
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <CarrotIcon className="w-4 h-4 text-muted-foreground" />
                                    <WheatIcon className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">Gluten-free, Vegan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="bg-muted py-12 md:py-20">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl space-y-6">
                            <h2 className="text-3xl font-bold tracking-tighter">Filter by</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="w-full">
                                            Dietary Needs
                                            <ChevronDownIcon className="ml-auto h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuCheckboxItem>Vegetarian</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Vegan</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Gluten-free</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Nut-free</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Dairy-free</DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="w-full">
                                            Meal Type
                                            <ChevronDownIcon className="ml-auto h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuCheckboxItem>Appetizer</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Entree</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Dessert</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Beverage</DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
            <Footer />
        </>
    )
}

enum Alergin {
    Nuts,
    Diary,
    Gluten,
    Eggs,
    Fish,
    Shellfish,
    Garlic
}

enum DietaryChoices {
    Vegan,
    Vegetarian,
    None
}

type MenuItem = {
    Name: string,
    Description: string,
    Alergins: Alergin[],
    DietaryChoices: DietaryChoices[]
    PhotoURL: string
}

const menuItem: MenuItem = {
    Name: "Grilled Salmon",
    Description: "Fresh Atlantic salmon, grilled to perfection and served with a lemon dill sauce.",
    Alergins: [Alergin.Fish],
    DietaryChoices: [DietaryChoices.None],
    PhotoURL: "https://www.thespruceeats.com/thmb/HgM2h42z1HGEcSWkWk5CgAjDDpQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grill-salmon-2216658-hero-01-a9c948f8a238400ebaafc0caf509c7fa.jpg"
}

function MenuItemCard({ item }: { item: MenuItem }) {
    return (
        <div className="bg-background rounded-lg overflow-hidden shadow-lg group">
            <img
                src={item.PhotoURL}
                alt="Grilled Salmon"
                width={300}
                height={200}
                className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{item.Name}</h3>
                <p className="text-muted-foreground text-sm">
                    {item.Description}
                </p>
                <div className="flex items-center gap-2 mt-2">
                    <FishIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Contains fish</span>
                </div>
            </div>
        </div>
    )
}