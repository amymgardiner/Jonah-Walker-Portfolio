import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <section className="flex flex-col items-center justify-center overflow-hidden main--body">
                <div className="container flex flex-col items-center justify-center main--body">

                    <div className="flex flex-col justify-center py-24 my-8 main--body_videos">
                        <div className="flex flex-row justify-center mb-4 space-x-36 home--videos_title">
                            <h2 className="font-serif text-2xl font-semibold">The Story of 'Tis the Season</h2>
                            <p className="text-[#BFC0C0] max-w-[40%] home--videos_title-description font-sans">In this short film, for Kaldi's Coffee, I take a behind-the-scenes look at the people and vintage machines that bring 'Tis the Season holiday blend to life each year.</p>
                        </div>
                        <div className="flex justify-center home--videos">
                        <iframe
                        width="1000"
                        height="563"
                        src="https://www.youtube.com/embed/mHN_Iaj9Ujs"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="bg-[#6c757d] w-9/12 h-0.5"></div>

                    <div className="flex flex-col justify-center py-24 my-8 main--body_videos">
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