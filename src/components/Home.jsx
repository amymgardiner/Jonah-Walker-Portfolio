import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <section className="flex flex-col items-center justify-center overflow-hidden main--body">
                <div className="container flex flex-col items-center justify-center main--body">

                    <div className="flex flex-col items-center justify-center py-16 my-8 main--body_videos">
                        <div className="flex flex-row justify-center mb-8">
                            <h2 className="font-serif text-3xl font-bold">Featured Project</h2>
                        </div>
                        <iframe
                        width="1000"
                        height="563"
                        src="https://www.youtube.com/embed/mHN_Iaj9Ujs"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                        <p className="text-[#BFC0C0] px-8 mt-8 font-sans home--videos_description">In this short film, for Kaldi's Coffee, I take a behind-the-scenes look at the people and vintage machines that bring the 'Tis the Season holiday blend to life each year.</p>
                    </div>
                    

                    <div className="bg-[#6c757d] w-9/12 h-0.5"></div>

                    <div className="flex flex-col items-center justify-center py-16 my-8 main--body_videos">
                        <div className="flex flex-row justify-center mb-8">
                            <h2 className="font-serif text-5xl font-bold">Reel</h2>
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

                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Home