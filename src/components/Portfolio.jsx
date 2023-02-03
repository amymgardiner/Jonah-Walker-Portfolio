import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Portfolio  = () => {
    return (
        <div>
            <Navbar/>
                <div className="flex flex-col items-center portfolio--main">
                    <div className="py-24 my-8 portfolio--main_slider">
                        <div className="flex flex-row justify-between">
                            <h2 className="mb-4 text-2xl">Z-CAM Anamorphic Footage</h2>
                            <div className="flex flex-col">
                                <p className="">Camera - Z CAM E2-M4</p>
                                <p className="">Lens(es) - Vazen 28mm 1.8x Anamorphic</p>
                            </div>
                        </div>
                        <Carousel infiniteLoop={true} showStatus={false} className="max-w-[1200px] max-h-[675px] bg-[#4F5D75]">
                            <iframe
                            width="950"
                            height="534"
                            src="https://www.youtube.com/embed/Zv89Gnqy-Io"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>

                            <iframe
                            width="950"
                            height="534"
                            src="https://www.youtube.com/embed/p0znG6E5ZYY"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>

                            <iframe
                            width="950"
                            height="534"
                            src="https://www.youtube.com/embed/ovIIbmeXsxw"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        </Carousel>
                    </div>
                    <div className="bg-[#EF8354] w-9/12 h-px"></div>

                    <div className="py-24 my-8 portfolio--main_slider">
                        <div className="flex flex-row justify-between">
                            <h2 className="mb-4 text-2xl">Z-CAM Footage</h2>
                            <div className="flex flex-col">
                                <p className="">Camera - Z CAM E2-M4</p>
                                <p className="">Lens(es) - DZOFILM Vespid Prime 40mm</p>
                                <p className="">Lens(es) -  Rokinon 20mm & 35mm Cine DS</p>
                            </div>
                        </div>
                        <Carousel infiniteLoop={true} showStatus={false} className="max-w-[1200px] max-h-[675px] bg-[#4F5D75]">
                            <iframe
                            width="950"
                            height="534"
                            src="https://www.youtube.com/embed/l7I59jAKask"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>

                            <iframe
                            width="950"
                            height="534"
                            src="https://www.youtube.com/embed/QmYJndRew6E"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>

                            <iframe
                            width="950"
                            height="534"
                            src="https://www.youtube.com/embed/vGBZTUbv9_o"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        </Carousel>
                    </div>
                    <div className="bg-[#EF8354] w-9/12 h-px"></div>

                    <div className="py-24 my-8 portfolio--main_slider">
                        <div className="flex flex-row justify-between">
                            <h2 className="mb-4 text-2xl">Fujifilm Footage</h2>
                            <div className="flex flex-col">
                                <p className="">Camera - Fuji XT-30</p>
                                <p className="">Lens(es) -  Rokinon 20mm & 35mm Cine DS</p>
                            </div>
                        </div>
                        <Carousel infiniteLoop={true} showStatus={false} className="max-w-[1200px] max-h-[675px] bg-[#4F5D75]">
                            <iframe
                            width="950"
                            height="534"
                            src="https://www.youtube.com/embed/5Zed_gZwQEM"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        </Carousel>
                    </div>
                    <div className="bg-[#EF8354] w-9/12 h-px"></div>
                </div>
            <Footer/>
        </div>
    )
}

export default Portfolio