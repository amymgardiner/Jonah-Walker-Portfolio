import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Navbar from './Navbar'
import Footer from './Footer'

const Portfolio  = () => {
    return (
        <div>
            <Navbar/>
            <div className="main">
                <div className="">
                <h2 className="text-2xl">Z-CAM Anamorphic Footage</h2>
                    <Carousel className="max-w-[800px] max-h-[450px]">
                        <iframe
                        width="720"
                        height="405"
                        src="https://www.youtube.com/embed/Zv89Gnqy-Io"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>

                        <iframe
                        width="720"
                        height="405"
                        src="https://www.youtube.com/embed/p0znG6E5ZYY"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>

                        <iframe
                        width="720"
                        height="405"
                        src="https://www.youtube.com/embed/ovIIbmeXsxw"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    </Carousel>
                </div>

                <div className="">
                <h2 className="text-2xl">Z-CAM E2 M4 Footage</h2>
                    <Carousel className="max-w-[800px] max-h-[450px]">
                        <iframe
                        width="720"
                        height="405"
                        src="https://www.youtube.com/embed/l7I59jAKask"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>

                        <iframe
                        width="720"
                        height="405"
                        src="https://www.youtube.com/embed/QmYJndRew6E"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>

                        <iframe
                        width="720"
                        height="405"
                        src="https://www.youtube.com/embed/vGBZTUbv9_o"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    </Carousel>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Portfolio