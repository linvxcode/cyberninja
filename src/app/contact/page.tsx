'use client'
import clsx from "clsx";
import React, { useState } from "react";

const Contact = () => {
  const [loading , setLoading] = useState(false);

  const handleClick = async (e: any) => {
    e.preventDefault();
    setLoading(true)
     setTimeout(() => {
      setLoading(false)
    },3000)
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen light">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Subscribe to Our Newsletter
          </h2>

          <form className="flex flex-col">
            <input
              placeholder="Enter your email address"
              className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="email"
            />

            <button
              className={clsx(loading ? 'bg-neutral-700' : '', "bg-black text-white font-bold py-2 px-4 rounded-md mt-4 transition ease-in-out duration-150")}
             onClick={handleClick}
             disabled={loading ? true : false}
            >
              Subscribe
            </button>
          </form>

          <div className="flex justify-center mt-4">
            <a className="text-sm text-gray-600 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
