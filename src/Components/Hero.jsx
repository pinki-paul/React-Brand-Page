import React from 'react';
import '../css/hero.css';
import ShoeImage from '../images/shoe_image.png';
import FlipkartImage from '../images/flipkart.png';
import AmazonImage from '../images/amazon.png';

export default function Hero() {
    return (
        <section className='hero container'>
            <div className='hero-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="hero-btn">
                    <button className='shop-btn'>Shop Now</button>
                    <button className='category-btn'>Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src={FlipkartImage} alt="flipkart image" className='flipkart'/>
                        <img src={AmazonImage} alt="amazon image" />
                    </div>

                </div>
            </div>

            <div className='hero-img'>
                <img src={ShoeImage} alt="shoe image" />
            </div>
        </section>
    )
}