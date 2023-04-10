import React from 'react';
import { SampleNextArrow, SamplePrevArrow } from './arrows';

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '70px',
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipeToSlide: true,
  lazyLoad: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        centerPadding: '70px',
        nextArrow: false,
        prevArrow: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        nextArrow: false,
        prevArrow: false,
        centerPadding: '70px',
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        centerPadding: '60px',
      },
    },
    {
      breakpoint: 369,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        centerPadding: '50px',
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        centerPadding: '30px',
      },
    },
  ],
};

export default settings;
