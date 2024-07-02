import { Link } from "react-router-dom";

export function Footer() {
    return (
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
    )
}