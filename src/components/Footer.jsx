import React from 'react'
import { TfiYoutube } from 'react-icons/tfi';
import { AiFillLinkedin } from 'react-icons/ai'
import { Link} from "react-router-dom";



const Footer = () => {

    return (
        <footer className="flex flex-row justify-between py-8 footer">
            <p className="ml-40 text-sm">©2023 Jonah Walker</p>
            <div className="flex flex-row mr-40 space-x-16">
                <Link to="https://www.youtube.com/@jonahwalker4425" target="_blank" className="text-4xl hover:text-[#62929E]"><TfiYoutube/></Link>
                <Link to="https://www.linkedin.com/in/jonahkwalker" target="_blank" className="text-4xl hover:text-[#62929E]"><AiFillLinkedin/></Link>
            </div>
        </footer>
    )
}

export default Footer