import React from 'react'

function ContactBanner() {
  return (
    <div className='contact-banner flex justify-center items-center'>
        <div className='contact-banner-contact relative text-center'>
            <h1 className='xl:text-5xl lg:text-7xl text-4xl unbounded-font font-bold text-white'>
                Get Closer With Us & <br/> Get Special Promo
            </h1>
            <p className='pt-6 text-[#ffffffb3] pb-10 text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do</p>
           <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 py-4 rounded-full cursor-pointer transition-colors duration-500">
        <a href='/' className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-500 tracking-wider">
          Contact Us
        </a>
      </button>
        </div>
    </div>
  )
}

export default ContactBanner