import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
      <div className='footer bg-black px-[2%] sm:px-[8%] lg:px-[12%] pt-[50px] lg:py-[90px]'>
        <div className='footer-content'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>

            <div className='lg:col-span-3'>
              <div className='text-white logo text-2xl uppercase font-semibold'>
                <Link href="/" className='unbounded-font'>
                  Sky<span className='unbounded-font'>Fare</span>
                </Link>
              </div>

              <p className='mt-4 text-[#ffffffb3]'>
                Badung, Bali -JI. Desa Sawangan, No, 11 Nusa Dua, 81566
              </p>

              <div className='footer-icons flex gap-3 mt-5'>
                <FontAwesomeIcon 
                  icon={faInstagram} 
                  className='text-[#ffffffb3] text-[20px] hover:text-white cursor-pointer'
                />
                <FontAwesomeIcon 
                  icon={faXTwitter} 
                  className='text-[#ffffffb3] text-[20px] hover:text-white cursor-pointer'
                />
                <FontAwesomeIcon 
                  icon={faFacebook} 
                  className='text-[#ffffffb3] text-[20px] hover:text-white cursor-pointer'
                />
                <FontAwesomeIcon 
                  icon={faYoutube} 
                  className='text-[#ffffffb3] text-[20px] hover:text-white cursor-pointer'
                />
              </div>
            </div>

            <div className='lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-10'>
              <div className='md:col-span-3 space-y-3'>
                <h2 className='text-white text-2xl unbounded-font mb-6'>Page</h2>
                <ul className='space-y-2 list-none'>
                  <li><Link href="/" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

               <div className='md:col-span-3 space-y-3'>
                <h2 className='text-white text-2xl unbounded-font mb-6'>Link</h2>
                <ul className='space-y-2 list-none'>
                  <li><Link href="/" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                     Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      term & Condition
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
