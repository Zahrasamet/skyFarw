import React from 'react'

function Hero() {
  return (
      <div className="hero h-screen flex justify-center items-center z-10">
        <div className="hero-content relative text-center">
          <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl unbounded-font font-bold text-white">
            Find Your Best <br /> Travel Packages
          </h1>
          <p className="pt-3 text-white md:pb-10 pb-5">
            Discover the world with our unforgettable travel tours — your journey to adventure starts here.
          </p>
          <button
            onClick={() => router.push("/")}
            className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 py-4 rounded-full cursor-pointer transition-colors duration-500"
          >
            <span className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-500 tracking-wider">
              View All Tours
            </span>
          </button>
        </div>
      </div>
  )
}

export default Hero