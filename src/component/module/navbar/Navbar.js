"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFlickr, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScroll(window.scrollY > 80);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-500
      ease-in-out ${isScroll ? "shadow-md bg-white py-3" : "py-0"}`}
    >
      {/* Top bar */}
      <div
        className={`nav-top w-full flex justify-between items-center gap-3
        px-[2%] sm:px-[8%] lg:px-[12%] transition-all duration-500 ease-in-out
        ${isScroll ? "max-h-0 opacity-0 py-0" : "max-h-[200px] opacity-100 py-3"}`}
      >
        <ul className="hidden lg:flex items-center gap-3 text-[#727272]">
          <li className="text-sm">
            <FontAwesomeIcon icon={faPhone} className="text-[#727272]" />
            <span>+91 54 0352 3524</span>
          </li>
          <li className="text-sm">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#727272]" />
            <span>Booking@skyFare.com</span>
          </li>
        </ul>

        <div className="flex items-center justify-between lg:justify-center gap-3 text-[#727272] w-full lg:w-auto">
          <ul className="flex items-center gap-3">
            <li><FontAwesomeIcon icon={faFacebook} className="text-[#8192a0]" /></li>
            <li><FontAwesomeIcon icon={faFlickr} className="text-[#8192a0]" /></li>
            <li><FontAwesomeIcon icon={faXTwitter} className="text-[#8192a0]" /></li>
          </ul>

          <ul className="flex items-center gap-4 ps-3">
            <li className="lg:text-md text-sm cursor-pointer">
              <i className="rl-lock pr-1 text-[#8192a0]"></i>
              <span>Login</span>
            </li>
            <li className="lg:text-md text-sm cursor-pointer">
              <FontAwesomeIcon icon={faUser} className="text-[#8192a0]" />
              <span>Sign Up</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`w-full px-[2%] sm:px-[8%] lg:px-[12%] text-start lg:text-center
       relative flex justify-between lg:justify-center nav-menu-container
       transition-all duration-500 ease-in-out ${isScroll ? "bg-white" : "bg-transparent"}`}
      >
        <div className="lg:hidden flex logo text-2xl uppercase font-semibold">
          <Link href="/" className="unbounded-font">Sky<span>Fare</span></Link>
        </div>

        <ul className="nav-menu hidden lg:flex w-full justify-center items-center gap-14 py-5 relative">
          <li><Link href="/" className="font-[500] hover:text-black transition-colors duration-500">Home</Link></li>
          <li><Link href="/About" className="font-[500] hover:text-black text-[#697e8a] transition-colors duration-500">About</Link></li>
          <li><Link href="/Tour" className="font-[500] hover:text-black transition-colors duration-500">Tour</Link></li>
          <div className="logo text-3xl uppercase font-semibold">
            <Link href="/" className="unbounded-font">Sky<span>Fare</span></Link>
          </div>
          <li><Link href="/Faq" className="font-[500] hover:text-black transition-colors duration-500">Faq</Link></li>
          <li><Link href="/Blog" className="font-[500] hover:text-black transition-colors duration-500">Blog</Link></li>
          <li><Link href="/Contact" className="font-[500] hover:text-black transition-colors duration-500">Contact</Link></li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex justify-center items-center">
          <div className="toggle-btn lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-[#193555]" />
          </div>
        </div>

        {/* Mobile menu */}
        <ul className={`lg:hidden flex flex-col items-start ps-10 gap-6 bg-[#f7f7f7] shadow-md absolute
          left-0 overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-[500px] top-full mt-3 opacity-100 py-6" : "max-h-0 opacity-0 py-0 top-full"}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Tour">Tour</Link></li>
          <li><Link href="/Faq">Faq</Link></li>
          <li><Link href="/Blog">Blog</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar