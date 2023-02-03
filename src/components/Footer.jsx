import React from 'react'
import { TfiYoutube } from 'react-icons/tfi';
import { AiFillLinkedin } from 'react-icons/ai'
import { Link} from "react-router-dom";



const Footer = () => {

    return (
        <footer className="flex flex-row justify-center py-8 space-x-24 footer">
            <Link to="https://www.youtube.com/@jonahwalker4425" target="_blank" className="text-4xl hover:text-[#62929E]"><TfiYoutube/></Link>
            <Link to="https://www.linkedin.com/in/jonahkwalker" target="_blank" className="text-4xl hover:text-[#62929E]"><AiFillLinkedin/></Link>
        </footer>
    )
}

export default Footer