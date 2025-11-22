"use client"
import { useRouter } from 'next/router';


import Hero from './Hero';
import Travel from './Travel';
import About from './About';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Experience from './Experience';
import ContactBanner from './Contact';

function HomePage() {
  const router = useRouter();

  return (
    <>
     
    <Hero/>
      <Travel/>
      <About/>
      <Testimonials/>
      <Blog/>
      <Experience/>
      <ContactBanner/>
    </>
  );
}

export default HomePage;
