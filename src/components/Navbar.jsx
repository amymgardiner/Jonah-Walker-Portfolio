import React from 'react'
import { Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between mx-5 py-8">
            <h1>Jonah Walker</h1>
            <ul className="flex flex-row space-x-4">
                <Link to="/about" className="hover:bg-[#62929E]">About</Link>
                <Link to="/portfolio" className="hover:bg-[#62929E]">Portfolio</Link>
                <Link to="/contact" className="hover:bg-[#62929E]">Contact</Link>
            </ul>
        </nav>
    )
}

export default Navbar