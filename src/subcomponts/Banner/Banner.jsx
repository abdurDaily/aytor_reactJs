import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Banner.css';
import 'swiper/css/pagination';
// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div id='test'>

            <Swiper modules={[Navigation, Pagination]} className="mySwiper" 
            
            loop={true}
            pagination={{ 
                el: '.swiper-pagination',
                clickable: true,
            }} 
            >

                <SwiperSlide id='parent'
                style={{ backgroundImage:`url('public/images/banner.jpg')` }}
                >
                    <div className="container">
                        <h4>Mega Sale</h4>
                        <h2>Up To 35% Off</h2>
                        <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                        <a href="#">Shop Now<span><FaLongArrowAltRight /></span> </a>
                    </div>


                </SwiperSlide>

                
                <SwiperSlide id='parent'
                style={{ backgroundImage:`url('public/images/banner.jpg')` }}
                >
                    <div className="container">
                        <h4>Mega Sale</h4>
                        <h2>Up To 35% Off</h2>
                        <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                        <a href="#">Shop Now<span><FaLongArrowAltRight /></span> </a>
                    </div>


                </SwiperSlide>

                <SwiperSlide id='parent'
                style={{ backgroundImage:`url('public/images/banner.jpg')` }}
                >
                    <div className="container">
                        <h4>Mega Sale</h4>
                        <h2>Up To 35% Off</h2>
                        <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                        <a href="#">Shop Now<span><FaLongArrowAltRight /></span> </a>
                    </div>


                </SwiperSlide>

                <div className="swiper-pagination container"></div>
      </Swiper>
        </div>
    );
};

export default Banner;