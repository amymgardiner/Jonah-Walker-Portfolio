import React from 'react'
import { Link} from "react-router-dom";
import HomeImage from '../assets/img/kirk-thornton-x9btTuM_F04-unsplash.jpg';

const Site = () => {
    return (
        <div className= "site--main bg-cover bg-center h-screen w-screen" style={{ backgroundImage:`url(${HomeImage})` }}>
            <div className="site--main_title flex flex-col ml-40">
                <h1 className="text-8xl mt-44">Jonah Walker</h1>
                <ul className="flex flex-col mt-2">
                    <li className="text-3xl">Cinematographer</li>
                    <li className="text-3xl">Video Editor</li>
                    <li className="text-3xl">Colorist</li>
                </ul>
            </div>
            <div className="ml-40 mt-20">
                <button className="site--main_button text-2xl rounded py-3 px-8"><Link to="/home">Explore</Link></button>
            </div>
        </div>
    )
}

export default Site