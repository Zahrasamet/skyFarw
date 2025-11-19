"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import toursData from "../../../../data/toursData.json"
import  Image from "next/image";

function Travel() {
  return (
    <>
        <div className="travel px-[2%] sm:px-[8%] lg:px-[12%] py-[80px] lg:py-[120px] flex flex-col gap-10 lg:gap-14">
        <div className="travel-content text-center">
          <h2 className="unbounded-font text-4xl font-semibold pb-3">
            Find Out The Best Travel Choice in Asia
          </h2>
          <p className="w-[60%] mx-auto text-[#193555]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repellendus fuga tempore molestiae alias.
          </p>
        </div>

        <div className="travel-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {toursData.map((tour) => (
            <div
              key={tour.id}
              onClick={() => router.push(`/tourDetails/${tour.id}`)}
              className="travel-item rounded-xl overflow-hidden relative group transition-all duration-300 cursor-pointer"
            >
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
          ))}
        </div>
      </div>
    </>
  )
}

export default Travel