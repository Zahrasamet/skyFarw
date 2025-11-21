import index from '@/pages'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

function Experience() {
    const [selectedTour, setSelectedTour] = useState(null)

    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
      setOpenIndex(openIndex === index ? null : index)
    }

  const faqData = [
  {
    question: "1. What makes the combined Asia–Europe tours a unique travel experience?",
    answer: "They offer a mix of traditional Eastern culture and modern Western lifestyle, giving travelers a diverse and enriching experience in a single trip."
  },
  {
    question: "2. Why are Asian tours popular among travelers?",
    answer: "Affordable prices, vibrant street food, rich cultural heritage, and warm hospitality make Asian tours especially appealing."
  },
  {
    question: "3. What is the main advantage of European tours?",
    answer: "High service standards, excellent safety, historical architecture, and world-class museums create a more luxurious and organized travel experience."
  },
  {
    question: "4. How does the food experience differ between Asia and Europe?",
    answer: "Asia offers flavorful street food and bold spices, while Europe focuses on classic dishes made with fresh and high-quality ingredients."
  },
  {
    question: "5. Are combined Asia–Europe tours suitable for families?",
    answer: "Yes, most tours provide structured itineraries, professional guides, and safe routes that make them suitable for families with children."
  },
  {
    question: "6. What is the best time to travel to Asia and Europe?",
    answer: "Spring and autumn are ideal for Asia, while late spring and summer are best for Europe due to pleasant weather and seasonal events."
  }
];
    
  return (
    <>
        <div className='experience px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] bg-[#0e0700]'>
            <div className='experience-content flex justify-between lg:flex-row flex-col gap-3 lg:gap-0 items-start w-full'>
              <h2 className='xl:w-[50%] w-full text-white text-2xl md:text-5xl leading-tight unbounded-font'>
                Enjoy Our Best Quality Tour & Experience
              </h2>
              <div className='xl:w-[40%] w-full'>
                <p className='text-[#ffffff91] pb-5 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
                </p>
                <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 py-4 rounded-full cursor-pointer transition-colors duration-500">
        <a href='/' className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-500 tracking-wider">
          lorem more
        </a>
      </button>
              </div>  
            </div>

            <fiv className="grid grid-cols-1 gap-8 mt-10 mx-auto w-[100%] lg:mx-auto lg:w-[80%]">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index
                const contentRef = useRef(null)
                const [height, setHeight] = useState(0)

                useEffect(() => {
                  if(isOpen && contentRef.current){
                    setHeight(contentRef.current.scrollHeight)
                  }
                  else{
                    setHeight(0)
                  }
                }, [isOpen])
                return (
                  <div key={index} className='border-b border-gray-700'>
                    <button onClick={() => toggle(index)}
                      className='w-full cursor-pointer text-left flex justify-between items-center py-4 font-semibold text-white'>
                        <span>{item.question}</span>
                        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className='ml-2'/>
                      </button>
                  </div>
                )
              })}
            </fiv>
        </div>
    </>
  )
}

export default Experience