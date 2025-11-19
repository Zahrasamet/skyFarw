"use client"

import Image from "next/image";

function About() {
  return (
   <div className='about py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%]'>
      <div className='flex flex-col lg:flex-row w-full gap-5 lg:gap-0'>
        <div className='lg:w-[50%]'>
          <div className='about-section flex flex-col'>
            <div className='about-heading lg:px-[12%]'>
              <h1 className='text-2xl xl:text-4xl font-bold mb-4'>
                Begin Your New Life Experience With Exploring New Destination
              </h1>
              <p className='mb-3 w-[90%] text-[#7a7a7a] text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
              </p>
              <p className='w-[90%] text-[#7a7a7a] text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
              </p>
            </div>
            <div className='about-image mt-8 hidden lg:flex'>
              <Image src="/Images/about-01.webp" alt='about01' className='rounded-r-2xl w-[45%] h-[600px] object-cover absolute left-0' width={600} height={600}/>
            </div>
          </div>
        </div> 

        <div className='lg:w-[50%]'>
          <div className='bg-[#000] text-white p-6 rounded-2xl flex md:flex-row justify-between md:gap-20'>
            <div className='autor-sec'>
              <div className='flex -space-x-3'>
                <Image src="/Images/author-01.webp" alt='Author01' width={48} height={48} className='rounded-full border-2 border-black'/>
                <Image src="/Images/author-02.webp" alt='Author02' width={48} height={48} className='rounded-full border-2 border-black'/>
                <Image src="/Images/author-03.webp" alt='Author03' width={48} height={48} className='rounded-full border-2 border-black'/>
                <Image src="/Images/author-04.webp" alt='Author04' width={48} height={48} className='rounded-full border-2 border-black'/>
              </div>
              <h2 className='text-white mt-5 text-3xl'>1234 &nbsp; +</h2>
            </div>
            <div className='customers'>
              <h1 className='text-white text-2xl mt-2 mb-3'>Customer Love the tour experience</h1>
              <p className='text-[#7a7a7a]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className='about-travel'>
             <Image src="/Images/about-02.webp" alt='About02' className='rounded-2xl mt-10 object-cover' width={600} height={400}/>
          </div>

          <div className='about-place flex sm:flex-row flex-col items-start gap-5 mt-10'>
            <Image src="/Images/about-03.webp" alt='About03' className='rounded-2xl h-[350px] sm:w-[50%] w-full object-cover' width={600} height={350}/>
            <div className='bg-[#000] text-white p-6 rounded-2xl flex justify-between gap-20 sm:w-[300px] w-full'>
              <div className='cur'>
                <h1 className="text-white text-2xl mt-2 mb-3">Join Our Asian Travel Trip</h1>
                <p className='text-[#7a7a7a]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
