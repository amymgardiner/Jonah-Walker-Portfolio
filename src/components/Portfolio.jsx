import React from 'react';
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
                <section class="overflow-hidden">
                    <div class="container px-5 py-2 mx-auto">
                        <div class="flex flex-wrap">
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg aspect-video"
                                    src={Gallery1}/>
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg aspect-video"
                                    src={Gallery2}/>
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg aspect-video"
                                    src={Gallery3}/>
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg aspect-video"
                                    src={Gallery4}/>
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg aspect-video"
                                    src={Gallery5}/>
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg aspect-video"
                                    src={Gallery6}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </div>
    )
}

export default Portfolio