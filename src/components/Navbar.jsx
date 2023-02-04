import React from 'react'
import { Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between py-8 ml-12 mr-24">
            <Link to="/home"><h1 className="text-3xl text-[#4ecdc4]">Jonah Walker</h1></Link>
            <ul className="flex flex-row space-x-16">
                <Link to="/about" className="text-base font-semibold navbar--link">About</Link>
                <Link to="/portfolio" className="text-base font-semibold navbar--link">Portfolio</Link>
            </ul>
        </nav>
    )
}

export default Navbar