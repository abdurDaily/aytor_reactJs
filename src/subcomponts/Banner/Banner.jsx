// import React from 'react';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './Banner.css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
        <Swiper id='test'
        
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        pagination={{
            el: '.test_2',
            clickable: true,
         }} 
        modules={[Pagination, Autoplay]} 
        className="mySwiper">
                <SwiperSlide className='slider'
                style={{ backgroundImage:`url('public/images/banner.jpg')` }}
                >
                <div className="container">
                    <h4>Mega Sale</h4>
                    <h2>Up To 35% Off</h2>
                    <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                    <a href="#">Shop Now</a>
                </div>
                
              
                

                </SwiperSlide>
                <SwiperSlide className='slider'
                style={{ backgroundImage:`url('public/images/banner.jpg')` }}
                >
                <div className="container">
                    <h4>Mega Sale</h4>
                    <h2>Up To 35% Off</h2>
                    <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                    <a href="#">Shop Now</a>
                </div>
                
              
                

                </SwiperSlide>
                <SwiperSlide className='slider'
                style={{ backgroundImage:`url('public/images/banner.jpg')` }}
                >
                <div className="container">
                    <h4>Mega Sale</h4>
                    <h2>Up To 35% Off</h2>
                    <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                    <a href="#">Shop Now</a>
                </div>
                
              
                

                </SwiperSlide>
                <SwiperSlide className='slider'
                style={{ backgroundImage:`url('public/images/banner.jpg')` }}
                >
                <div className="container">
                    <h4>Mega Sale</h4>
                    <h2>Up To 35% Off</h2>
                    <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                    <a href="#">Shop Now</a>
                </div>
                
              
                

                </SwiperSlide>

                <div className="container test_2"></div>


                
        </Swiper>
                
        </div>
    );
};

export default Banner;