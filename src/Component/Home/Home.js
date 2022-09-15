import React from 'react';
import hero from './../../Photo/photo2.png';
import about from './../../Photo/Slider/about.png';
import home1 from './../../Photo/Home/1.jpg';
import home2 from './../../Photo/Home/2.jpg';
import home3 from './../../Photo/Home/3.jpg';
import home4 from './../../Photo/Home/4.jpg';
import home5 from './../../Photo/Home/6.jpg';
import home6 from './../../Photo/Home/8.jpg';
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
            {/* home-content */}
            <section>
                <div className="home-content">
                    <div className="items">
                        <div className="items-img">
                            <img src={home1} alt="" />
                        </div>
                        <div className="items-text">
                            <h1>Chocolate Bark Tied With Bakers Twine </h1>
                            <p>To make the red cakes, measure half the batter into a separate bowl and whisk in red food coloring. Evenly transfer the red batter </p>
                        </div>
                    </div>
                    <div className="items">
                        <div className="items-img">
                            <img src={home2} alt="" />
                        </div>
                        <div className="items-text">
                            <h1>Chocolate Bark Tied With Bakers Twine </h1>
                            <p>To make the red cakes, measure half the batter into a separate bowl and whisk in red food coloring. Evenly transfer the red batter </p>
                        </div>
                    </div>
                    <div className="items">
                        <div className="items-img">
                            <img src={home3} alt="" />
                        </div>
                        <div className="items-text">
                            <h1>Chocolate Bark Tied With Bakers Twine </h1>
                            <p>To make the red cakes, measure half the batter into a separate bowl and whisk in red food coloring. Evenly transfer the red batter </p>
                        </div>
                    </div>
                    <div className="items">
                        <div className="items-img">
                            <img src={home4} alt="" />
                        </div>
                        <div className="items-text">
                            <h1>Chocolate Bark Tied With Bakers Twine </h1>
                            <p>To make the red cakes, measure half the batter into a separate bowl and whisk in red food coloring. Evenly transfer the red batter </p>
                        </div>
                    </div>
                    <div className="items">
                        <div className="items-img">
                            <img src={home5} alt="" />
                        </div>
                        <div className="items-text">
                            <h1>Chocolate Bark Tied With Bakers Twine </h1>
                            <p>To make the red cakes, measure half the batter into a separate bowl and whisk in red food coloring. Evenly transfer the red batter </p>
                        </div>
                    </div>
                    <div className="items">
                        <div className="items-img">
                            <img src={home6} alt="" />
                        </div>
                        <div className="items-text">
                            <h1>Chocolate Bark Tied With Bakers Twine </h1>
                            <p>To make the red cakes, measure half the batter into a separate bowl and whisk in red food coloring. Evenly transfer the red batter </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;