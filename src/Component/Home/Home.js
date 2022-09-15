import React from 'react';
import hero from './../../Photo/photo2.png';
import about from './../../Photo/Slider/about.png';
const Home = () => {
    return (
        <div>
            {/* hero */}
            <section>
                <div className="hero-section">
                    <img src={hero} alt="" />
                </div>
            </section>
            {/* slider */}
            <section>
                <div className="slider">
                    <div className="slider-img">
                        <img src={about} alt="" />
                    </div>
                    <div className="slider-text">
                        <h1>I'm Alina N. Jones, living in Monaco. <u>Love to travel</u> & also have a huge <u>interest in fashion</u>, photography and food!</h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;