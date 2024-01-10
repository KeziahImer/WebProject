import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ autoScrollInterval = 3000 }) => {
    const [curentSlide ,setCurrentSlide] = useState(0);

    const images = [
        '/carou1.jpg',
        '/carou2.jpg',
        '/carou3.jpg',
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, autoScrollInterval);

        return () => {
            clearInterval(intervalId);
        };
    }, [images, autoScrollInterval]);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: autoScrollInterval,
        afterChange: handleSlideChange,
    };

    return (
        <div style={{ borderRadius: '20px', overflow: 'hidden', height: '550px' }}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
