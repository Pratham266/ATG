import Image from 'next/image'
import React from 'react'

const HeaderRightSidebar = () => {
  return (
    
    <div className="col-span-12   p-16 sm:col-span-4">
    {/* <!-- Sidebar --> */}
    <div className="relative">
      <div className="absolute right-3 mt-4 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-6 text-black"
          viewBox="0 0 24 24"
        >
          <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
        </svg>
      </div>
      <div className="absolute left-3 mt-4 mb-2">
        <svg
          fill="#000000"
          className="h-4 w-6 text-black"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
          strokeWidth="0.64"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>{" "}
          </g>
        </svg>
      </div>
      <input
        className=" w-full text-base px-4 py-2 border-b-2"
        type="text"
        placeholder="Location"
        value="      Noida, India"
      />
    </div>
    <div className="mt-4 flex">
      <svg
        className="h-6 w-8 text-gray-600"
        viewBox="0 0 24 24"
        id="meteor-icon-kit__regular-exclamation-circle"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15ZM11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V8Z"
            fill="#758CA3"
          ></path>
        </g>
      </svg>
      <span className="text-gray-400 ml-2 text-left text-xs">
        Your Location will help usserve better and extend a personalised
        experience.
      </span>
    </div>
    <div className="mt-8">
      <div className="flex">
      <svg
        className="h-6 w-8 text-gray-600"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M320 1344q0-26-19-45t-45-19q-27 0-45.5 19t-18.5 45q0 27 18.5 45.5t45.5 18.5q26 0 45-18.5t19-45.5zm160-512v640q0 26-19 45t-45 19h-288q-26 0-45-19t-19-45v-640q0-26 19-45t45-19h288q26 0 45 19t19 45zm1184 0q0 86-55 149 15 44 15 76 3 76-43 137 17 56 0 117-15 57-54 94 9 112-49 181-64 76-197 78h-129q-66 0-144-15.5t-121.5-29-120.5-39.5q-123-43-158-44-26-1-45-19.5t-19-44.5v-641q0-25 18-43.5t43-20.5q24-2 76-59t101-121q68-87 101-120 18-18 31-48t17.5-48.5 13.5-60.5q7-39 12.5-61t19.5-52 34-50q19-19 45-19 46 0 82.5 10.5t60 26 40 40.5 24 45 12 50 5 45 .5 39q0 38-9.5 76t-19 60-27.5 56q-3 6-10 18t-11 22-8 24h277q78 0 135 57t57 135z" />
      </svg>
      <span className="tracking-wide">RECOMMENDED GROUPS</span>
      </div>
     
      {/* table */}    

              <table className="table-auto w-full mt-4">
               
                  <tbody className="text-sm ">
                    
                      <tr className="mt-4">
                          <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><Image className="rounded-full" src="/p1.png" width={40} height={40} alt="Philip Harbach"/></div>
                                  <div className="font-medium text-gray-800">Leisure</div>
                              </div>
                          </td>
                          <td className="ml-2 p-2 whitespace-nowrap">
                              <div className="text-left">
                          <button className="rounded-full bg-gray-200 px-4 py-2 w-18 h-8 text-gray-800 font-medium">Follow</button></div>
                          </td>
                      </tr>
                      <tr className="mt-4">
                          <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><Image className="rounded-full" src="/p2.png" width={40} height={40} alt="Philip Harbach"/></div>
                                  <div className="font-medium text-gray-800">Activisim</div>
                              </div>
                          </td>
                          <td className="ml-2 p-2 whitespace-nowrap">
                              <div className="text-left">
                          <button className="rounded-full bg-gray-200 px-4 py-2 w-18 h-8 text-gray-800 font-medium">Follow</button></div>
                          </td>
                      </tr>
                      <tr className="mt-4">
                          <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><Image className="rounded-full" src="/p3.png" width={40} height={40} alt="Philip Harbach"/></div>
                                  <div className="font-medium text-gray-800">MBA</div>
                              </div>
                          </td>
                          <td className="ml-2 p-2 whitespace-nowrap">
                              <div className="text-left">
                          <button className="rounded-full bg-gray-200 px-4 py-2 w-18 h-8 text-gray-800 font-medium">Follow</button></div>
                          </td>
                      </tr>
                      <tr className="mt-4">
                          <td className="p-2">
                              <div className="flex items-center">
                                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><Image className="rounded-full" src="/p4.png" width={40} height={40} alt="Philip Harbach"/></div>
                                  <div className="font-medium text-gray-800">Philosopy</div>
                              </div>
                          </td>
                          <td className="ml-2 p-2">
                              <div className="text-left">
                          <button className="rounded-full bg-gray-200 px-4 py-2 w-18 h-8 text-gray-800 font-medium">Follow</button></div>
                          </td>
                      </tr>
                  </tbody>
              </table>

              <div className="grid justify-items-end text-blue-600 mt-16">See More...</div>

              



    </div>
  </div>

  )
}

export default HeaderRightSidebar
