import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'


const Portfolio  = () => {
    return (
        <div>
            <Navbar/>
                <div className="flex flex-row items-center main--body">
                    <div className="flex flex-row">
                        <div className="portfolio--image"></div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Portfolio