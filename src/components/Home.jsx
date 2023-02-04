import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col items-center main--body">

                <div className="bg-[#EF8354] w-9/12 h-0.5"></div>
                <div className="py-24 my-8 main--body_videos">
                    <div className="flex flex-row justify-between mb-4">
                        <h2 className="text-2xl">The Great Sand Dunes</h2>
                        <p className="text-[#BFC0C0] max-w-[40%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis sem sed fringilla finibus.</p>
                    </div>
                    <iframe
                        width="1000"
                        height="563"
                        src="https://www.youtube.com/embed/p0znG6E5ZYY"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>

                <div className="bg-[#EF8354] w-9/12 h-0.5"></div>
                <div className="py-24 my-8 main--body_videos">
                    <div className="flex flex-row justify-center mb-4">
                        <h2 className="text-4xl">Cinematography Reel</h2>
                    </div>
                    <iframe
                    width="1000"
                    height="563"
                    src="https://www.youtube.com/embed/l7I59jAKask"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                </div>
                <div className="bg-[#EF8354] w-9/12 h-0.5"></div>

            </div>
            <Footer/>
        </div>
    )
}

export default Home