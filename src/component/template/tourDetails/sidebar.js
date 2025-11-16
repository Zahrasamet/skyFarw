"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function BookingSidebar({tour}) {
    const [showForm, setShowForm] = useState(false)
  return (
    <>
        <div className="xl:w-[30%] lg:w-[40%] w-full sticky top-0 right-0 border-2 border-gray-100 rounded-md py-5 px-3">
            <h4 className="text-lg font-semibold pb-1">Date:</h4>
            <form method="post">
            <div className="flex items-center gap-2 mt-5">
                <label className="text-md font-[500]">Adult</label>
                <div className="relative w-full">
                    <FontAwesomeIcon icon={faUser} className="absolute top-3.5"/>
                </div>
            </div>
            </form>git
        </div>
    </>
  )
}

export default BookingSidebar