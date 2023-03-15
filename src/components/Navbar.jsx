import React from 'react'
import { Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between py-8 navbar">
            <Link to="/home"><h1 className="text-3xl text-[#90e0ef] font-serif navbar--title">Jonah Walker</h1></Link>
            <ul className="flex navbar--links">
                <Link to="/about" className="font-sans text-base font-semibold navbar--link">About</Link>
                <Link to="/portfolio" className="font-sans text-base font-semibold navbar--link portfolioNav">Portfolio</Link>
            </ul>
        </nav>
    )
}

export default Navbar