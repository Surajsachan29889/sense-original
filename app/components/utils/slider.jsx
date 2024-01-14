'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideimg1 from '@/public/slideimg1.png';
import slideimg2 from '@/public/slideimg2.png';
import slideimg3 from '@/public/slideimg3.png';
import slideimg4 from '@/public/slideimg4.png';
import slideimg5 from '@/public/slideimg5.png';
import rightarrow from '@/public/rightarrow.svg';
import leftarrow from '@/public/leftarrow.svg';
import { useState } from 'react';

const images = [slideimg1, slideimg2, slideimg3, slideimg4, slideimg5,slideimg5,slideimg5,slideimg5,slideimg5];

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <Image src={rightarrow} alt="Next Arrow" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <Image src={leftarrow} alt="Previous Arrow" />
  </div>
);

export default function Sliderr() {
  const [imageIndex, setImageIndex] = useState(0);

  var settings = {
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: 5,
    autoplay: true,
    draggable: true,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setImageIndex(next);
    },
  };

  return (
    <div className="">
      <Slider {...settings} style={{left:'5%',marginBottom:"0%"}} >
        {images.map((img, idx) => {
          let slide = 'slide';

          if (idx === imageIndex) {
            slide = 'activeSlide';
          } else if (
            idx === imageIndex - 1 ||
            idx === imageIndex + 1 ||
            idx === (imageIndex === 0 ? images.length - 1 : imageIndex + 1) ||
            idx === (imageIndex === images.length - 1 ? 0 : imageIndex - 1)
          ) {
            slide = 'adjacentSlide';
          }

          return (
            <div key={idx} className={`sliderimgbox ${slide} `}>
              <Image
                src={img}
                alt='..'
                className={idx === 9 ? 'h-[400px] w-[400px]' : ' h-[20%] w-[100%] rounded-3xl  '}
              />
            </div>
          );
        })}
      </Slider>
      <div className='h-[30%] w-[24%] bg-[#ffffff] opacity-75 blur-2xl absolute top-[623%] '></div>
      <div className='h-[30%] w-[24%] bg-[#ffffff] opacity-75 blur-2xl absolute top-[623%] right-0 '></div>

    </div>
  );
}

