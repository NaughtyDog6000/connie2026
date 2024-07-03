import { Footer } from "@/components/footer";
import NavBar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BeefIcon, Bold, ChevronDownIcon, Egg, FishIcon, Italic, Milk, TurtleIcon, Underline, WheatIcon } from "lucide-react";
enum Allergin {
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

enum MealType {
    Appetizer,
    Entree,
    Dessert,
    Beverage
}

type MenuItem = {
    Name: string,
    Description: string,
    MealType: MealType
    Alergins: Allergin[],
    DietaryChoices: DietaryChoices
    PhotoURL?: string
}

const menuItems: MenuItem[] = [
    {
        Name: "Grilled Salmon",
        Description: "Fresh Atlantic salmon, grilled to perfection and served with a lemon dill sauce.",
        MealType: MealType.Entree,
        Alergins: [Allergin.Fish],
        DietaryChoices: DietaryChoices.None,
        PhotoURL: "https://www.thespruceeats.com/thmb/HgM2h42z1HGEcSWkWk5CgAjDDpQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grill-salmon-2216658-hero-01-a9c948f8a238400ebaafc0caf509c7fa.jpg"

    },
    {
        Name: "Arrabiata Penne",
        Description: "Penne pasta with a rich, creamy sauce.",
        MealType: MealType.Entree,
        Alergins: [Allergin.Diary, Allergin.Gluten],
        DietaryChoices: DietaryChoices.Vegetarian,
        PhotoURL: "https://skinnyspatula.com/wp-content/uploads/2022/04/Chicken_Penne_Arrabbiata_1.jpg"
    },
    {
        Name: "Cheesecake",
        Description: "A classic cheesecake with chocolate sauce and fresh whipped cream.",
        MealType: MealType.Dessert,
        Alergins: [Allergin.Diary, Allergin.Gluten],
        DietaryChoices: DietaryChoices.Vegetarian,
        PhotoURL: "https://www.onceuponachef.com/images/2017/12/cheesecake-1200x1393.jpg"
    },
    {
        Name: "Roasted Vegetable Lasagna",
        Description: "Layers of fresh pasta, roasted vegetables, and a creamy béchamel sauce.",
        Alergins: [Allergin.Gluten, Allergin.Eggs],
        MealType: MealType.Entree,
        DietaryChoices: DietaryChoices.Vegetarian,
        PhotoURL: "https://fortheloveofcooking-net.exactdn.com/wp-content/uploads/2013/01/IMG_0875-001.jpg?strip=all&lossy=1&quality=90&ssl=1"
    },
    {
        Name: "Beef Tenderloin with Mushroom Sauce",
        Description: "Tender beef tenderloin served with a rich, creamy mushroom sauce.",
        Alergins: [Allergin.Gluten, Allergin.Eggs],
        MealType: MealType.Entree,
        DietaryChoices: DietaryChoices.None,
        PhotoURL: "https://fortheloveofcooking-net.exactdn.com/wp-content/uploads/2013/01/IMG_0875-001.jpg?strip=all&lossy=1&quality=90&ssl=1"
    },
    {
        Name: "Vegetable Stir-Fry with Tofu",
        Description: "A colorful medley of fresh vegetables and tofu, stir-fried in a savory sauce.",
        Alergins: [Allergin.Gluten],
        MealType: MealType.Entree,
        DietaryChoices: DietaryChoices.Vegan,
        PhotoURL: "https://fortheloveofcooking-net.exactdn.com/wp-content/uploads/2013/01/IMG_0875-001.jpg?strip=all&lossy=1&quality=90&ssl=1"
    },
    {
        Name: "Chicken Marsala",
        Description: "Tender chicken breast simmered in a rich Marsala wine sauce with mushrooms.",
        Alergins: [Allergin.Gluten, Allergin.Eggs],
        MealType: MealType.Entree,
        DietaryChoices: DietaryChoices.None,
        PhotoURL: "https://fortheloveofcooking-net.exactdn.com/wp-content/uploads/2013/01/IMG_0875-001.jpg?strip=all&lossy=1&quality=90&ssl=1"
    },
    {
        Name: "Gluten-Free Quinoa Salad",
        Description: "A refreshing salad of quinoa, fresh vegetables, and a tangy vinaigrette.",
        Alergins: [],
        MealType: MealType.Entree,
        DietaryChoices: DietaryChoices.Vegan,
    }
]

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
                        {
                            menuItems.map((item, index) => <MenuItemCard item={item} key={index} />)
                        }
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

function MenuItemCard({ item }: { item: MenuItem }) {
    let cn: string = "bg-background rounded-lg overflow-hidden shadow-lg group";

    // Colour the outline based upon the level dietary choices it complies with
    switch (item.DietaryChoices) {
        case DietaryChoices.None:
            break;
        case DietaryChoices.Vegetarian:
            cn += " border-2 border-green-400";
            break;
        case DietaryChoices.Vegan:
            cn += " border-2 border-red-400";
            break;
        default:
            throw new Error("Should not be an unhandled dietary choice");

    }

    return (
        <div className={cn}>
            <div className="relative">
                <img
                    src={item.PhotoURL ? item.PhotoURL : "/placeholder.svg"}
                    alt={item.Name + " Photo"}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                {
                    item.MealType == MealType.Entree && (
                        <Badge className="absolute top-2 right-2 rounded-md px-2 py-1 text-sm font-medium text-primary-foreground">
                            Entree
                        </Badge>
                    )
                }{
                    item.MealType == MealType.Appetizer && (
                        <Badge className="absolute top-2 right-2 rounded-md px-2 py-1 text-sm font-medium text-primary-foreground">
                            Appetizer
                        </Badge>
                    )
                }{
                    item.MealType == MealType.Dessert && (
                        <Badge className="absolute top-2 right-2 rounded-md px-2 py-1 text-sm font-medium text-primary-foreground">
                            Dessert
                        </Badge>
                    )
                }{
                    item.MealType == MealType.Beverage && (
                        <Badge className="absolute top-2 right-2 rounded-md px-2 py-1 text-sm font-medium text-primary-foreground">
                            Beverage
                        </Badge>
                    )
                }

            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold">{item.Name}</h3>
                <p className="text-muted-foreground text-sm">
                    {item.Description}
                </p>
                <div className="flex items-center gap-2 mt-2">
                    <TooltipProvider>
                        {
                            item.Alergins.map((allergy, index) => {
                                return <AllergyIcon key={index} allergy={allergy} />
                            })
                        }
                    </TooltipProvider>
                </div>
            </div>
        </div >
    )
}

function AllergyIcon({ allergy }: { allergy: Allergin }) {
    const styling: string = "w-4 h-4 text-muted-foreground";

    switch (allergy) {
        case Allergin.Diary:
            return (
                <Tooltip>
                    <TooltipTrigger>
                        <Milk className={styling} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Item Contains Dairy</p>
                    </TooltipContent>
                </Tooltip>
            )
            break;
        case Allergin.Gluten:
            return (
                <Tooltip>
                    <TooltipTrigger>
                        <WheatIcon className={styling} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Item Contains Gluten</p>
                    </TooltipContent>
                </Tooltip>
            )
            break;
        case Allergin.Nuts:
            return (
                <Tooltip>
                    <TooltipTrigger>
                        <BeefIcon className={styling} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Item Contains Nuts</p>
                    </TooltipContent>
                </Tooltip>
            )
            break;
        case Allergin.Shellfish:
            return (
                <Tooltip>
                    <TooltipTrigger>
                        <TurtleIcon className={styling} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Item Contains Shellfish</p>
                    </TooltipContent>
                </Tooltip>
            )
            break;
        case Allergin.Eggs:
            return (
                <Tooltip>
                    <TooltipTrigger>
                        <Egg className={styling} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Item Contains Eggs</p>
                    </TooltipContent>
                </Tooltip>
            )
            break;
        case Allergin.Fish:
            return (
                <Tooltip>
                    <TooltipTrigger>
                        <FishIcon className={styling} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Item Contains Fish</p>
                    </TooltipContent>
                </Tooltip>
            )
            break;
        case Allergin.Garlic:
            return (
                <Tooltip>
                    <TooltipTrigger>
                        <img className={styling} src="/noun-garlic-41709.svg" />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Item Contains Garlic</p>
                    </TooltipContent>
                </Tooltip>
            )
            break;
        default:
            throw new Error("Should not be an unhandled allergin");
    }
}