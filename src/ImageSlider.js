import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ImageSlider.css';

import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

const ImageSlider = ({ slides = [] }) => {
  return (
    <div className="card-slider-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}  // Enable autoplay with 5 seconds delay
        modules={[Navigation, Pagination, Autoplay]}  // Add Autoplay module here
      >
        {slides.length > 0 ? (
          slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slider-card">
                <img src={slide.image} alt={`Slide ${index}`} className="slider-image" />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="slider-card">No slides available</div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
