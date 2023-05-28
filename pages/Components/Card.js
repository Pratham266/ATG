import React from "react";
import Image from "next/image";

const Card = ({message,imagePath,logo,title,people}) => {
  return (
    <div className="border-2 mt-2 border-[#e5e7eb] rounded-lg">
      <img className="w-full bg-cover rounded-t-lg" src={imagePath}/>
      <div className="px-3 pb-2">
        <div className="pt-2 flex">
          <Image height={20} width={20} src={logo} alt="logo" />

          <span className="text-lg ml-2 text-black font-medium">{title}</span>
        </div>
        <div className="flex">
          <div className="pt-1">
            <div className="mb-2 text-xl font-bold">
              {message}
            </div>
          </div>

          <div className="relative flex z-10  rounded  ml-16">
            <div className="dropdown  rounded">
              <span className="flex items-center">
                <button
                  className="px-2 text-4xl font-bold text-black transition duration-150 ease-in-out "
                  type="button"
                >
                  ...
                </button>
              </span>

              <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div
                  className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                  aria-labelledby="headlessui-menu-button-1"
                  id="headlessui-menu-items-117"
                  role="menu"
                >
                  <div className="py-1">
                    <a
                      href="javascript:void(0)"
                      tabIndex="0"
                      className="text-black flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                      role="menuitem"
                    >
                      Edit
                    </a>
                    <a
                      href="javascript:void(0)"
                      tabIndex="1"
                      className="text-black flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                      role="menuitem"
                    >
                      Report
                    </a>
                    <a
                      href="javascript:void(0)"
                      tabIndex="2"
                      className="text-black flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                      role="menuitem"
                    >
                      Option 3
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-lg mb-2 text-gray-700">
          I've Worked in UX for the better part if a decade. From now on, I plan
          to rei...
        </div>

        <div className="text-lg mb-2 text-black flex">
         <div className="flex">
         <svg fill="#000000" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.4800000000000001"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path></g></svg>
         <span className="ml-2 font-medium text-black text-base">
               Fri, 12 Oct, 2018  
            </span>
         </div>

         <div className="flex ml-12">
         <svg fill="#000000" width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.64"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path> </g></svg>
         <span  className=" ml-2 font-medium text-black text-base">Ahmedabad India</span>
         </div>
        </div>

        <div className="w-full flex justify-between p-3">
        <button type="text" className="bg-gray-50 border font-medium border-gray-400 text-red-600 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required>
        Visit Website
        </button>

        </div>

        <div className="w-full flex justify-between p-3">
          <div className="flex">
            <div className="rounded-full h-10 w-10 bg-gray-500 flex items-center justify-center overflow-hidden">
              <Image
                src={people}
                width={40} height={40}
                alt="profilepic"
              />
            </div>
            <span className="pt-1 ml-2 font-bold text-base">Sarthak Kamra</span>
          </div>

          <button className="relative flex z-10 bg-white" >
          <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z" stroke="#757575" strokeWidth="1.584" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#757575" strokeWidth="1.584" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>        
            <span className="pt-1 font-bold text-gray-600 text-base">
               1.4k views
            </span>
      </button>
      <button className="relative flex z-10 bg-gray-100 rounded p-2" >
         
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-7 my-1 text-black">
            <path fill="currentColor" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z">
            </path>
          </svg>
      </button>

        </div>

      </div>
    </div>
  );
};

export default Card;
