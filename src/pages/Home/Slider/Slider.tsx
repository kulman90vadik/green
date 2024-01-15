// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';

// import required modules
import { Pagination } from 'swiper/modules';
import GreenButton from '../../../components/Btn/GreenButton';
import sliderData from './sliderData';

const Slider = () => {

  return (
    <section className="slider">
      <div className="slider__container">
        <Swiper pagination={{ clickable: true}} modules={[Pagination]}>

          {sliderData.map(slide => {
            return (
              <SwiperSlide className="slider__slide" key={slide.id}>
              <div className="slider__info">
                <span className="slider__subtitle">{slide.subtitle}</span>
                <span className="slider__title"> {slide.title}<mark>{slide.greentext}</mark></span>
                <div className="slider__text">
                  <p>
                  We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                  </p>
                </div>
                <GreenButton>
                  SHOP NOW
                </GreenButton>
              </div>
              <div className="slider__photo">
                <img src={slide.bigimages} alt='Photo green ' className="slider__img-big" />
                <img src={slide.smallimages} alt="Photo imgages" className="slider__img-small" />
              </div>
            </SwiperSlide>
            )
          })}

        </Swiper>
      </div>
    </section>
  );
}
 
export default Slider;