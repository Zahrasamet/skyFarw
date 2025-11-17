"use client"
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import toursData from "../../../../data/toursData.json"


function HomePage() {
 const router = useRouter();

  return (
    <>
      {/* Hero Section */}
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

      {/* Travel Section */}
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
  );
  
}

export default HomePage