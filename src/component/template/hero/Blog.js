"use client"

import Image from "next/image";
import BlogPage1 from "../../../../public/assests/Blog-Page-01.webp";
import BlogPage2 from "../../../../public/assests/Blog-Page-02.webp";
import BlogPage3 from "../../../../public/assests/Blog-Page-03.webp";


function Blog() {
  return (
    <>
        <div className='blog px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]'>
          <div className='w-full pb-5'>
            <h1 className='unbounded-font text-4xl font-semibold pb-3'>Our Latest Blog</h1>
            <p className='text-[#193555]'>
               Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            </p>
          </div>
          <div className='blog-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        
            {/* Blog Card 1 */}
            <div className='blog-card'>
              <Image src={BlogPage1} alt='blogPage01' className='rounded-[20px]'/>
              <h2 className='font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2'>
                Tropical Bliss: Discover Asia's Hidden Beach Paradises
              </h2>
              <p className='text-[#7a7a7a] text-sm'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
        
            {/* Blog Card 2 */}
            <div className='blog-card'>
              <Image src={BlogPage2} alt='blogPage02' className='rounded-[20px]'/>
              <h2 className='font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2'>
                Tropical Bliss: Discover Asia's Hidden Beach Paradises
              </h2>
              <p className='text-[#7a7a7a] text-sm'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
        
            {/* Blog Card 3 */}
            <div className='blog-card'>
              <Image src={BlogPage3} alt='blogPage03' className='rounded-[20px]'/>
              <h2 className='font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2'>
                Tropical Bliss: Discover Asia's Hidden Beach Paradises
              </h2>
              <p className='text-[#7a7a7a] text-sm'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
        
          </div>
        </div>
        
    </>
  )
}

export default Blog