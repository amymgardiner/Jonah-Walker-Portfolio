import React from 'react'
import { TfiYoutube } from 'react-icons/tfi';
import { AiFillLinkedin } from 'react-icons/ai'
import { Link} from "react-router-dom";



const Footer = () => {

    return (
        <footer className="flex flex-row justify-between py-8 footer">
            <p className="m-auto ml-40 font-sans text-sm">©2023 Jonah Walker</p>
            <div className="flex flex-row mr-40 space-x-16">
                <Link to="https://www.youtube.com/@jonahwalker4425" target="_blank" className="text-4xl hover:text-[#90e0ef]"><TfiYoutube/></Link>
                <Link to="https://www.linkedin.com/in/jonahkwalker" target="_blank" className="text-4xl hover:text-[#90e0ef]"><AiFillLinkedin/></Link>
            </div>
        </footer>
    )
}

export default Footer