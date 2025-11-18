"use client"
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import toursData from "../../../../data/toursData.json"

import About01 from "../../../../public/Images/about-01.webp"
import About02 from "../../../../public/Images/about-02.webp"
import About03 from "../../../../public/Images/about-03.webp"

import Author01 from "../../../../public/Images/author-01.webp"
import Author02 from "../../../../public/Images/author-02.webp"
import Author03 from "../../../../public/Images/author-03.webp"
import Author04 from "../../../../public/Images/author-04.webp"

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

      {/* About */}
      <div className='about py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%]'>
        <div className='flex flex-col lg:flex-row w-full gap-5 lg:gap-0'>
          <div className='lg:w-[50%]'>
            <div className='about-section flex flex-col'>
              <div className='about-heading lg:px-[12%]'>
                <h1 className='text-2xl xl:text-4xl font-bold mb-4'>Begin Your New Life 
                  Experience With Exploring New Destination
                </h1>
                <p className='mb-3 w-[90%] text-[#7a7a7a] text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                </p>
                <p className='w-[90%] text-[#7a7a7a] text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                </p>
              </div>
      <div className='about-image mt-8 hidden lg:flex'>
        <Image src={About01} alt='about01' className='rounded-r-2xl w-[45%] h-[600px] just-cover absolute left-0'/>
      </div>
            </div>
          </div> 
          <div className='lg:w-[50%]'>
            <div className='bg-[#000] text-white p-6 rounded-2xl flex md:flex-row justify-between md:gap-20'>
              <div className='autor-sec'>
                <div className='flex -space-x-3'>
                  <Image src={Author01} alt='Author01' className='w-12 h-12 rounded-full border-2 border-black'/>
                  <Image src={Author02} alt='Author02' className='w-12 h-12 rounded-full border-2 border-black'/>
                  <Image src={Author03} alt='Author03' className='w-12 h-12 rounded-full border-2 border-black'/>
                  <Image src={Author04} alt='Author04' className='w-12 h-12 rounded-full border-2 border-black'/>
                </div>
                <h2 className='text-white mt-5 text-3xl'>1234 &nbsp; +</h2>
              </div>
              <div className='customers'>
                <h1 className='text-white text-2xl mt-2 mb-3'>Customer Love the tour experince</h1>
                <p className='text-[#7a7a7a]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
            <div className='about-travel'>
               <Image src={About02} alt='About02' className='rounded-2xl mt-10 object-cover'/>
            </div>
              <div className='about-place'>
               <Image src={About03} alt='About03' className='rounded-2xl h-[350px] sm:w-[50%] w-full object-cover'/>
               <div className='bg-[#000] text-white p-6 rounded-2xl
                flex justify-between gap-20 sm:w-[300px] w-full'>
                  <div className='cur'>
                    <h1 className="text-white text-2xl mt-2 mb-3">Join Our Asian Travel Trip</h1>
                    <p className='text-[#7a7a7a]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default HomePage;
