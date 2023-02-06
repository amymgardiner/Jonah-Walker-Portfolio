import React from 'react';
import { Link} from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import Gallery1 from '../assets/img/test screenshot 1.png'
import Gallery2 from '../assets/img/test screenshot 2.png'
import Gallery3 from '../assets/img/test screenshot 3.png'
import Gallery4 from '../assets/img/test screenshot 4.png'
import Gallery5 from '../assets/img/test screenshot 5.png'
import Gallery6 from '../assets/img/test screenshot 6.png'

const Portfolio  = () => {
    return (
        <div>
            <Navbar/>
                <section className="overflow-hidden">
                    <div className="container px-5 py-2 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="flex flex-wrap w-1/3">
                                <Link to="https://youtu.be/Zv89Gnqy-Io" target="_blank"><div className="relative w-full p-1 text-center portfolio--image">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg aspect-video"
                                    src={Gallery1}/>
                                    <h2 className="absolute text-xl top-1/2 left-1/2 portfolio--image_title">Seven Bridges Trail</h2>
                                </div></Link>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <Link to="https://youtu.be/p0znG6E5ZYY" target="_blank"><div className="relative w-full p-1 text-center portfolio--image">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg aspect-video"
                                    src={Gallery2}/>
                                    <h2 className="absolute text-xl top-1/2 left-1/2 portfolio--image_title">Great Sand Dunes National Park and Preserve</h2>
                                </div></Link>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <Link to="https://youtu.be/ovIIbmeXsxw" target="_blank"><div className="relative w-full p-1 text-center portfolio--image">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg aspect-video"
                                    src={Gallery3}/>
                                    <h2 className="absolute text-xl top-1/2 left-1/2 portfolio--image_title">Monument Rocks</h2>
                                </div></Link>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <Link to="https://youtu.be/l7I59jAKask" target="_blank"><div className="relative w-full p-1 text-center portfolio--image">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg aspect-video"
                                    src={Gallery4}/>
                                    <h2 className="absolute text-xl top-1/2 left-1/2 portfolio--image_title">Great Forest Park Balloon Race</h2>
                                </div></Link>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <Link to="https://youtu.be/QmYJndRew6E" target="_blank"><div className="relative w-full p-1 text-center portfolio--image">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg aspect-video"
                                    src={Gallery5}/>
                                    <h2 className="absolute text-xl top-1/2 left-1/2 portfolio--image_title">Saturday Barbeque</h2>
                                </div></Link>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <Link to="https://youtu.be/vGBZTUbv9_o" target="_blank"><div className="relative w-full p-1 text-center portfolio--image">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg aspect-video"
                                    src={Gallery6}/>
                                    <h2 className="absolute text-xl top-1/2 left-1/2 portfolio--image_title">Castlewood State Park</h2>
                                </div></Link>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </div>
    )
}

export default Portfolio