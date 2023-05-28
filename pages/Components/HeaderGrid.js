import React from 'react'
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { useState } from "react";

const HeaderGrid = () => {
    const [selectedTab, setSelectedTab] = useState("all");

    const handleTabClick = (tab) => {
      setSelectedTab(tab);
    };
  
  return (
    <>
    <div className="hidden md:block col-span-12 border-b-2 border-[#e5e7eb]">
          {/* <!-- Header content --> */}
          <div className="mt-2 md:flex md:items-center md:justify-between md:space-x-8  ">
            <div className="flex items-center space-x-4 overflow-y-auto md:max-w-lg xl:max-w-5xl 2xl:max-w-7xl lg:max-w-3xl whitespace-nowrap ">
              <Link
                href="/#"
                className={`px-3 py-1.5 ${
                  selectedTab === "all"
                    ? "text-black underline underline-offset-4 "
                    : "text-gray-500"
                } dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg capitalize`}
                onClick={() => handleTabClick("all")}
              >
                All Posts(32)
              </Link>

              <Link
                href="/#"
                className={`px-3 py-1.5 ${
                  selectedTab === "article"
                    ? "text-black underline underline-offset-4"
                    : "text-gray-500"
                } dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg capitalize`}
                onClick={() => handleTabClick("article")}
              >
                Article
              </Link>
              <Link
                href="/#"
                className={`px-3 py-1.5 ${
                  selectedTab === "event"
                    ? "text-black underline underline-offset-4"
                    : "text-gray-500"
                } dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg capitalize`}
                onClick={() => handleTabClick("event")}
              >
                Event
              </Link>
              <Link
                href="/#"
                className={`px-3 py-1.5 ${
                  selectedTab === "eduction"
                    ? "text-black underline underline-offset-4"
                    : "text-gray-500"
                } dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg capitalize`}
                onClick={() => handleTabClick("eduction")}
              >
                Eduction
              </Link>
              <Link
                href="/#"
                className={`px-3 py-1.5 ${
                  selectedTab === "job"
                    ? "text-black underline underline-offset-4"
                    : "text-gray-500"
                } dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg capitalize`}
                onClick={() => handleTabClick("job")}
              >
                Job
              </Link>
              <Link
                href="/#"
                className={`px-3 py-1.5 ${
                  selectedTab === "blog"
                    ? "text-black underline underline-offset-4"
                    : "text-gray-500"
                } dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg capitalize`}
                onClick={() => handleTabClick("blog")}
              >
                Blog
              </Link>
              <Link
                href="/#"
                className={`px-3 py-1.5 ${
                  selectedTab === "atg"
                    ? "text-black underline underline-offset-4"
                    : "text-gray-500"
                } dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg capitalize`}
                onClick={() => handleTabClick("atg")}
              >
                ATG
              </Link>
            </div>

            <div className="relative inline-block w-auto flex mb-2  rounded-lg items-center justify-center">
              <div className="mr-2">
                <button
                  type="button"
                  className="mx-auto  h-10 group p-4 inline-flex items-center rounded bg-[#e5e7eb] text-base font-medium "
                  aria-expanded="false"
                >
                  <span className="text-black  group-hover:text-gray-500">
                    Write a Post
                  </span>
                  <svg
                    width="34px"
                    height="35px"
                    viewBox="0 0 24 24"
                    className="text-black ml-2 h-5 w-5 group-hover:text-gray-500"
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
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </button>
              </div>
              <div className="ml-2">
                <button
                  type="button"
                  className="mx-auto h-10 group p-4 inline-flex items-center rounded bg-[#2563eb] text-base font-medium "
                  aria-expanded="false"
                >
                  <svg
                    width="34px"
                    height="35px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <circle
                        cx="8"
                        cy="8"
                        r="2.5"
                        stroke="#ffffff"
                        strokeLinecap="round"
                      ></circle>{" "}
                      <path
                        d="M11.7679 8.5C12.0332 8.04063 12.47 7.70543 12.9824 7.56815C13.4947 7.43086 14.0406 7.50273 14.5 7.76795C14.9594 8.03317 15.2946 8.47 15.4319 8.98236C15.5691 9.49472 15.4973 10.0406 15.2321 10.5C14.9668 10.9594 14.53 11.2946 14.0176 11.4319C13.5053 11.5691 12.9594 11.4973 12.5 11.2321C12.0406 10.9668 11.7054 10.53 11.5681 10.0176C11.4309 9.50528 11.5027 8.95937 11.7679 8.5L11.7679 8.5Z"
                        stroke="#ffffff"
                      ></path>{" "}
                      <path
                        d="M13.4054 17.507L13.8992 17.4282L13.4054 17.507ZM12.5 18H3.50002V19H12.5V18ZM3.08839 17.5857C3.21821 16.7717 3.53039 15.6148 4.26396 14.671C4.97934 13.7507 6.11871 13 8.00002 13V12C5.80109 12 4.37371 12.9004 3.47442 14.0573C2.59334 15.1909 2.24293 16.5374 2.10087 17.4282L3.08839 17.5857ZM8.00002 13C9.88133 13 11.0207 13.7507 11.7361 14.671C12.4697 15.6148 12.7818 16.7717 12.9117 17.5857L13.8992 17.4282C13.7571 16.5374 13.4067 15.1909 12.5256 14.0573C11.6263 12.9004 10.199 12 8.00002 12V13ZM3.50002 18C3.20827 18 3.05697 17.7827 3.08839 17.5857L2.10087 17.4282C1.95832 18.322 2.6872 19 3.50002 19V18ZM12.5 19C13.3128 19 14.0417 18.322 13.8992 17.4282L12.9117 17.5857C12.9431 17.7827 12.7918 18 12.5 18V19Z"
                        fill="#ffffff"
                      ></path>{" "}
                      <path
                        d="M17.2966 17.4162L16.8116 17.5377L17.2966 17.4162ZM11.8004 13.9808L11.5324 13.5586L11.0173 13.8855L11.4391 14.3264L11.8004 13.9808ZM13.4054 17.507L13.8992 17.4282L13.4054 17.507ZM16.3951 18H12.5V19H16.3951V18ZM16.8116 17.5377C16.8654 17.7526 16.7076 18 16.3951 18V19C17.2658 19 18.0152 18.2277 17.7816 17.2948L16.8116 17.5377ZM13.5001 14C14.5278 14 15.2496 14.5027 15.7784 15.2069C16.3178 15.9253 16.6345 16.8306 16.8116 17.5377L17.7816 17.2948C17.5905 16.5315 17.2329 15.4787 16.5781 14.6065C15.9126 13.7203 14.9202 13 13.5001 13V14ZM12.0683 14.4029C12.4581 14.1556 12.9262 14 13.5001 14V13C12.732 13 12.0787 13.2119 11.5324 13.5586L12.0683 14.4029ZM11.4391 14.3264C12.3863 15.3166 12.7647 16.6646 12.9116 17.5857L13.8992 17.4282C13.7397 16.4285 13.3158 14.8416 12.1617 13.6351L11.4391 14.3264ZM12.9116 17.5857C12.9431 17.7827 12.7918 18 12.5 18V19C13.3128 19 14.0417 18.322 13.8992 17.4282L12.9116 17.5857Z"
                        fill="#ffffff"
                      ></path>{" "}
                      <rect
                        x="16.25"
                        y="5.25"
                        width="4.5"
                        height="0.5"
                        rx="0.25"
                        stroke="#ffffff"
                        strokeWidth="0.24000000000000005"
                        strokeLinecap="round"
                      ></rect>{" "}
                      <rect
                        x="18.75"
                        y="3.25"
                        width="4.5"
                        height="0.5"
                        rx="0.25"
                        transform="rotate(90 18.75 3.25)"
                        stroke="#ffffff"
                        strokeWidth="0.24000000000000005"
                        strokeLinecap="round"
                      ></rect>{" "}
                    </g>
                  </svg>{" "}
                  <span className="text-white  group-hover:text-gray-100">
                    Join Group
                  </span>
                </button>
              </div>
            </div>
            
          </div>
          </div>
          <div className="md:hidden header col-span-12 border-[#e5e7eb]">
            <div className="mt-2  md:flex md:items-center md:justify-between md:space-x-8  ">               
            <div className="relative inline-block w-auto flex mb-2  rounded-lg">
            <div className="ml-2 pt-2 font-bold text-gray-900">
                Posts(368)
              </div>
              <div className="mr-2 absolute right-2">
                <button
                  type="button"
                  className="mx-auto  h-10 group p-4 inline-flex items-center rounded bg-[#e5e7eb] text-base font-medium "
                  aria-expanded="false"
                >
                  <span className="text-gray-700 group-hover:text-gray-500">
                   Filter: All
                  </span>
                  <svg
                    width="34px"
                    height="35px"
                    viewBox="0 0 24 24"
                    className="text-black ml-2 h-5 w-5 group-hover:text-gray-500"
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
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </button>
              </div>
           
            </div>


            </div>
        </div>
        </>

  )
}

export default HeaderGrid
