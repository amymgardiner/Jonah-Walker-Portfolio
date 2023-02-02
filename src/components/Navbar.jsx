import React from 'react'
import { Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between py-8 mx-5">
            <h1 className="text-3xl">Jonah Walker</h1>
            <ul className="flex flex-row space-x-6">
                <Link to="/about" className="navbar--link">About</Link>
                <Link to="/portfolio" className="navbar--link">Portfolio</Link>
                <Link to="/contact" className="navbar--link">Contact</Link>
            </ul>
        </nav>
    )
}

export default Navbar