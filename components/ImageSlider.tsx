'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Swiper as SwiperClass} from 'swiper/types'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

export default function ImageSlider() {

  function handleSlideChange() {
    console.log('slide change')
  }

  function handleSwiper(swiper: SwiperClass) {
    console.log(swiper)
  }

  return (
    <Swiper 
    modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{clickable:false}}
      onSlideChange={handleSlideChange}
      onSwiper={handleSwiper}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>

    </Swiper>
  )
}
