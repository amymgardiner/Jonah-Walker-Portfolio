import React from 'react'
import { Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between py-8 ml-12 mr-24">
            <h1 className="text-3xl">Jonah Walker</h1>
            <ul className="flex flex-row space-x-16">
                <Link to="/about" className="font-semibold navbar--link">About</Link>
                <Link to="/portfolio" className="font-semibold navbar--link">Portfolio</Link>
                <Link to="/contact" className="font-semibold navbar--link">Contact</Link>
            </ul>
        </nav>
    )
}

export default Navbar