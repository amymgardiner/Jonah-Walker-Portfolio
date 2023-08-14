import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <section className="flex flex-col items-center justify-center px-4 overflow-hidden md:px-8 main--body">

                <div className="flex flex-col items-center justify-center main--body">

                    <div className="flex flex-col items-center justify-center py-16 my-8 main--body_videos">
                        <div className="flex flex-row justify-center mb-8">
                            <h2 className="font-serif text-3xl font-bold">Featured Project</h2>
                        </div>
                        <iframe
                        width="1024"
                        height="576"
                        src="https://www.youtube.com/embed/mHN_Iaj9Ujs"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                        <p className="text-[#BFC0C0] mt-8 font-sans home--videos_description">In this short film, for Kaldi's Coffee, I take a behind-the-scenes look at the people and vintage machines that bring the 'Tis the Season holiday blend to life each year.</p>
                    </div>
                    

                    <div className="bg-[#6c757d] w-9/12 h-0.5"></div>

                    <div className="flex flex-col items-center justify-center py-16 my-8 main--body_videos-reel">
                        <div className="mb-8">
                            <h2 className="flex flex-row justify-center font-serif text-5xl font-bold">Reel</h2>
                        </div>
                        <iframe
                        width="1024"
                        height="576"
                        src="https://www.youtube.com/embed/p0znG6E5ZYY"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    </div>

                </div>
                
            </section>
            <Footer/>
        </div>
    )
}

export default Home