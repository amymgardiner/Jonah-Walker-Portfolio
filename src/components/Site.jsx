import React from 'react'
import { Link} from "react-router-dom";
import HomeImage from '../assets/img/kirk-thornton-x9btTuM_F04-unsplash.jpg';

const Site = () => {
    return (
        <div className= "w-screen h-screen bg-center bg-cover site--main" style={{ backgroundImage:`url(${HomeImage})` }}>
            <div className="flex flex-col ml-[15%] site--main_title">
                <h1 className="text-9xl mt-[20%] site--main_title-name">Jonah Walker</h1>
                <ul className="flex flex-col mt-2">
                    <li className="text-4xl site--main_title-description">Cinematographer</li>
                    <li className="text-4xl site--main_title-description">Video Editor</li>
                    <li className="text-4xl site--main_title-description">Colorist</li>
                </ul>
            </div>
            <div className="mt-20 ml-[15%]">
                <button className="px-8 py-3 text-3xl rounded-lg site--main_button"><Link to="/home">Explore</Link></button>
            </div>
        </div>
    )
}

export default Site