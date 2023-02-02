import React from 'react'
import { Link} from "react-router-dom";
import HomeImage from '../assets/img/kirk-thornton-x9btTuM_F04-unsplash.jpg';

const Site = () => {
    return (
        <div className= "w-screen h-screen bg-center bg-cover site--main" style={{ backgroundImage:`url(${HomeImage})` }}>
            <div className="flex flex-col ml-40 site--main_title">
                <h1 className="text-8xl mt-44">Jonah Walker</h1>
                <ul className="flex flex-col mt-2">
                    <li className="text-3xl">Cinematographer</li>
                    <li className="text-3xl">Video Editor</li>
                    <li className="text-3xl">Colorist</li>
                </ul>
            </div>
            <div className="mt-20 ml-40">
                <button className="px-8 py-3 text-2xl rounded-lg site--main_button"><Link to="/home">Explore</Link></button>
            </div>
        </div>
    )
}

export default Site