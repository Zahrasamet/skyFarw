"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function BookingSidebar({ tour, toursData }) {
    const [showForm, setShowForm] = useState(false)

    return (
      <div className="xl:w-[30%] lg:w-[40%] w-full h-full sticky top-0 right-0 border-gray-100 rounded-md py-5 px-3">
          <h4 className="text-lg font-semibold pb-1">Date:</h4>
          <form method="post">
              <div className="flex items-center gap-2 mt-5 relative">
                  <label className="pb-1 text-md font-[500]">Adult:</label>
                  <div className="flex flex-col w-full relative">
                      <FontAwesomeIcon icon={faUser} className="absolute top-3.5 left-2 text-gray-400"/>
                      <input
                          type="text"
                          placeholder="5"
                          className="border-2 border-gray-100 p-3 pl-10 outline-0 rounded-md"
                          required
                      />
                  </div>
              </div>
          </form>
          <button 
              type="button" 
              className="btn text-white bg-[#193555] py-4 rounded-md cursor-pointer transition-colors duration-300 mt-5 w-full"
              onClick={() => setShowForm(true)}
          >
             <a href="/" className="text-sm xl:text-md uppercase transition-colors duration-300 tracking-wider">
                 Book Now
             </a>
          </button>
          <h4 className="text-lg font-semibold mt5 pb-2">Recommendation Tours</h4>
      </div>
    )
}

export default BookingSidebar;
