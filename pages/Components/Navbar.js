import React from 'react'
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({toggleModal}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
          <nav className="bg-white relative">
            <div className="max-w-7xl mb-4 mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-18  h-16">            
    
                <div className="md:hidden flex text-gray-600">
                <Link href="/" className="text-xl flex items-center">
                    <span className="text-green-600">ATG</span>
                    <span className="text-gray-600">.W</span>
                    <Image
                      src="/o.png"
                      alt="O"
                      height={18}
                      width={20}
                      style={{ display: "inline" }}
                    />
                    <span className="text-gray-600">RLD</span>
                  </Link>
                  <div className="absolute right-2 flex">

                  <svg viewBox="0 0 24 24" className="h-12 w-12 " fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path fillRule="evenodd" clipRule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782Z" fill="#323232"></path> </g></svg>
                  <svg viewBox="0 0 24 24" className="h-12 w-12 ml-2" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#323232"></path> </g></svg>
                </div>
                  </div>
    
                <div className="hidden ml-12 md:block md:ml-6 item-center justify-center relative">

                <div className="flex-shrink-0">
                  <Link href="/" className="text-2xl">
                    <span className="text-green-600">ATG</span>
                    <span className="text-gray-600">.W</span>
                    <Image
                      src="/o.png"
                      alt="O"
                      height={18}
                      width={20}
                      style={{ display: "inline" }}
                    />
                    <span className="text-gray-600">RLD</span>
                  </Link>
                </div>
                </div>

                <div className="hidden md:block md:ml-6 item-center justify-center">
                  
                  <div className="ml-12 flex items-center justify-center">
                    <div className="flex" >
                    <div className="pl-12 pr-12 md:block md:ml-6 item-center justify-center">
                <Link
                  href="/#"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 mr-3"
                >
                  <div className=" relative space-y-4 ml-22">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pt-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                    <input className="p-3 bg-[#e5e7eb] rounded-full text-[#6b7280] w-96 md:w-96 font-semibold custom-placeholder"   placeholder="       Search for your favourite groups in ATG" />
                  </div>
                </Link>
              </div>

              </div>
                  </div>  

                </div>
                <div className="hidden md:block md:ml-6 item-center justify-center">
                  
                  <div className="ml-12 flex items-center justify-center">
                    <div className="flex" >

                    <div className="mt-4 md:block md:ml-6 item-center justify-center">
               
               <Link
                 href="/#"
                 className="flex items-center px-3 py-2 rounded-md  font-medium text-black-600  mr-3"
                 onClick={toggleModal}
               >
                 Create Account.
                 <span className="text-[#2563eb]">&nbsp;It's free!</span>
                 <svg
                   width="34px"
                   height="34px"
                   viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="#000000"
                 >
                   <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                   <g
                     id="SVGRepo_tracerCarrier"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                   ></g>
                   <g id="SVGRepo_iconCarrier">
                     <rect x="0" fill="none" width="24" height="24"></rect>
                     <g>
                       <path d="M7 10l5 5 5-5"></path>
                     </g>
                   </g>
                 </svg>
               </Link>
             </div>
                      </div></div></div>
              </div>
            </div>
    
           
          </nav>
        </>
      );
}

export default Navbar
