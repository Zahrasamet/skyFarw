"use client"
import user from "../../../../public/assests/user.png"
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"


function Testimonials() {
  return (
    <>
        <div className='testimonials bg-[#0e0700] px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]'>

  <div className='pb-10 testimonials-content flex justify-between lg:flex-row gap-3 lg:gap-0 items-start w-full'>
    <h2 className='xl:w-[50%] w-full text-white text-4xl leading-tight unbounded-font'>
      Discover A Mesmerizing Nature Landscape & Stunning Culture
    </h2>

    <div className='xl:w-[50%] w-full'>
      <p className='text-[#ffffff91] pb-5 text-sm'>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.
      </p>
      <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 py-4 rounded-full cursor-pointer transition-colors duration-500">
        <a href='/' className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-500 tracking-wider">
          lorem more
        </a>
      </button>
    </div>
  </div>
  
 <Swiper
  spaceBetween={20}
  loop={true}
  breakpoints={{
    1199: { slidesPerView: 3 }, 
    767: { slidesPerView: 2 }, 
    0: { slidesPerView: 1 },   
  }}
>
  {[...Array(6)].map((_, index) => (
    <SwiperSlide key={index}>
      <div className='
        bg-[#191919] 
        p-6 
        rounded-2xl 
        shadow-md
        flex 
        flex-col 
        justify-between
        h-auto sm:h-[240px] md:h-[250px] lg:h-[260px]
      '>
        <p className='text-[#ffffff91] text-sm leading-relaxed mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus...
        </p>
        <div className='flex items-center gap-3'>
          <Image
            src={user}
            width={50}
            height={50}
            className='rounded-full'
            alt='User'
          />
          <div>
            <h4 className='unbounded-font text-white font-semibold text-sm'>
              User Name {index + 1}
            </h4>
            <p className='text-[#ffffff91] text-xs'>Designation</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
</div>
    </>
  )
}

export default Testimonials