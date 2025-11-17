"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import toursList from "../../../../data/toursData.json"

function BookingSidebar({ tour }) {
    const [showForm, setShowForm] = useState(false)

    return (
      <>
      {/* Main Sidebar */}
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
             <span className="text-sm xl:text-md uppercase tracking-wider">
                 Book Now
             </span>
          </button>

          <h4 className="text-lg font-semibold mt-5 pb-2">Recommendation Tours</h4>

          <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              className="travel-wrapper"
          >
              {toursList?.map((tour) => (
                  <SwiperSlide key={tour.id}>
                      <Link href={`/tourDetails/${tour.id}`}>
                          <div className="travel-item rounded-xl overflow-hidden relative group transition-all duration-300 cursor-pointer">
                              <Image
                                  src={tour.Images}
                                  width={400}
                                  height={300}
                                  alt={tour.title}
                                  className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-500"
                              />
                              <div className="travel-content absolute bottom-0 left-0 flex justify-between items-center w-full p-3 z-10 text-white bg-gradient-to-t from-black/70 to-transparent">
                                  <div>
                                      <h2 className="text-xl font-semibold unbounded-font pb-1">{tour.title}</h2>
                                      <p className="text-[#ffffff91] text-xs flex items-center gap-1">
                                          <FontAwesomeIcon icon={faLocationDot} />
                                          {tour.location}
                                      </p>
                                  </div>
                                  <h4 className="text-xl font-semibold unbounded-font text-right">
                                      <span className="text-[#ffffff91] text-xs font-normal">Start From</span>
                                      <br />
                                      {tour.price}
                                  </h4>
                              </div>
                          </div>
                      </Link>
                  </SwiperSlide>
              ))}
          </Swiper>
      </div>

      {/* ======================= MODAL ======================= */}
      {showForm && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">

          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowForm(false)}
          ></div>

          {/* Modal Box */}
          <div className="
            bg-white 
            w-[95%] max-w-[900px] 
            max-h-[85vh] 
            overflow-y-auto 
            rounded-2xl 
            z-10 
            relative 
            shadow-xl 
            p-6 lg:p-10
          ">

            {/* Close Button */}
            <button 
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
            >
              <FontAwesomeIcon icon={faClose} />
            </button>

            {/* Title */}
            <h2 className="text-center unbounded-font mb-8 text-2xl lg:text-4xl">
              Tour Booking Form
            </h2>

            {/* FORM */}
            <form method="post">

              {/* Row 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

                <div className="flex flex-col w-full">
                  <label className="pb-1 text-md font-[500]">First Name:</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border-2 border-gray-100 p-3 outline-0 rounded-md"
                    required
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="pb-1 text-md font-[500]">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border-2 border-gray-100 p-3 outline-0 rounded-md"
                    required
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="pb-1 text-md font-[500]">Your Email:</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-2 border-gray-100 p-3 outline-0 rounded-md"
                    required
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="pb-1 text-md font-[500]">Phone:</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="border-2 border-gray-100 p-3 outline-0 rounded-md"
                    required
                  />
                </div>
              </div>

              {/* People Count */}
              <div className="flex flex-col w-full mb-5">
                <label className="pb-1 text-md font-[500]">How many people are in group?</label>
                <textarea
                  placeholder="Write your comment..."
                  className="border-2 border-gray-100 outline-0 h-[120px] p-3 rounded-md"
                  required
                ></textarea>
              </div>

              {/* Best way contact you */}
              <div className="flex flex-col gap-2 mt-2 mb-4">
                <label className="text-sm font-medium">Best way to contact you?</label>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2"><input type="radio" name="contactWay" value="phone" /> Phone</label>
                  <label className="flex items-center gap-2"><input type="radio" name="contactWay" value="email" /> Email</label>
                  <label className="flex items-center gap-2"><input type="radio" name="contactWay" value="center" /> Center</label>
                </div>
              </div>

              {/* Best time contact */}
              <div className="flex flex-col gap-2 mt-2 mb-4">
                <label className="text-sm font-medium">Best time to contact you?</label>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2"><input type="radio" name="contactTime" value="8-11" /> 8–11 AM</label>
                  <label className="flex items-center gap-2"><input type="radio" name="contactTime" value="12-6" /> 12–6 PM</label>
                  <label className="flex items-center gap-2"><input type="radio" name="contactTime" value="6-10" /> 6–10 PM</label>
                </div>
              </div>

              {/* Anything else */}
              <div className="flex flex-col w-full mb-5">
                <label className="pb-1 text-md font-[500]">Anything else we should know?</label>
                <textarea
                  placeholder="Write your comment..."
                  className="border-2 border-gray-100 outline-0 h-[120px] p-3 rounded-md"
                  required
                ></textarea>
              </div>

              {/* How did you hear */}
              <div className="flex flex-col w-full mb-5">
                <label className="pb-1 text-md font-[500]">How did you hear about us?</label>
                <textarea
                  placeholder="Write your comment..."
                  className="border-2 border-gray-100 outline-0 h-[120px] p-3 rounded-md"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn text-white bg-[#193555] font-bold px-6 w-full py-4 rounded-md 
                cursor-pointer transition-colors duration-300 mt-3 text-sm xl:text-md uppercase tracking-wider"
              >
                Send
              </button>

            </form>
          </div>

        </div>
      )}
      </>
    )
}

export default BookingSidebar;
