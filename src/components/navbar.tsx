import { Link, useNavigate } from "react-router-dom";
import { DarkmodeDropdown } from "./darkmode-button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export default function NavBar() {
    const navigate = useNavigate();
    const locations = [
        // { path: "/", text: "Home" },
        { path: "/timeline", text: "TimeLine" },
        { path: "/location", text: "Location" },
        { path: "/menu", text: "Menu" },
        { path: "/dresscode", text: "Dress Code" },
        { path: "/save_the_date", text: "Save The Date" },
        { path: "/RSVP", text: "RSVP" },
    ]

    return (
        <nav className="flex h-16 w-full items-center justify-between bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-navbar pr-4 pl-2 md:pr-6 bg-nav-bar drop-shadow-sm">
            <div className="flex items-center h-full">

                <Link to="/">
                    <h1 className="text-2xl font-bold tracking-tight font-lobster pl-2">Connie 2026</h1>
                </Link>
            </div>
            <nav className="hidden md:flex">
                <ul className="flex items-center space-x-12">
                    {locations.map((location, index) => (
                        <li key={index}>
                            <Link to={location.path} className="text-m font-semibold hover:underline hover:underline-offset-4">
                                {location.text}
                            </Link>
                        </li>
                    ))

                    }
                </ul>
            </nav>
            <nav className="sm:flex md:hidden lg:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            Pages
                            <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {locations.map((location, index) => (
                            <DropdownMenuItem key={index} onClick={() => navigate(location.path)}>
                                {location.text}
                            </DropdownMenuItem>
                        ))}

                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
            <div className="flex items-center space-x-4">
                <DarkmodeDropdown />
            </div >
        </nav >
    )
}