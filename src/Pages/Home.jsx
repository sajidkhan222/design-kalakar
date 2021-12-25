import React from 'react'
import mainImage from '../assets/main_img.jpg';
import '../Styles/Home.css'
function Home() {
    return (
        <div className='container home' id='home'>
            <div className="row d-flex align-items-center">
                <div className="home_text_container order-md-1 order-2 col-md-5 col-12">
                    <h1 className='main_title'>
                        Hello
                        I’m Jenn
                        Walkers
                    </h1>
                    <p className='main__text'>
                        UI designer, photographer and travel enthusiast
                    </p>
                </div>
                <div className="order-md-2 order-1 col-md-7 col-12">
                    <img src={mainImage} alt="main_image" className='img-fluid main_img' />
                </div>
            </div>
        </div>
    )
}

export default Home
