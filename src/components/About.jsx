import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import JonahImage from '../assets/img/A2EA84D5-D09E-4382-8C79-A073A43644E1.jpg';

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className="main--body">
            <img src={JonahImage} className="max-w-[615px] p-4"/>
            </div>
            <Footer/>
        </div>
    )
}

export default About

// About:
// Picture
// Text
// Email form