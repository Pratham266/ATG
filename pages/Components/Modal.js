import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Modal = ({toggleModal}) => {
  return (
<div data-modal-show="true" aria-hidden="true" className="overflow-x-hidden  bg-[#9ca3af] bg-opacity-75 overflow-y-auto fixed h-modal md:h-full top-4 md:inset-0 z-50 flex justify-center items-center ">      
  <div className="relative w-full max-w-4xl px-4 h-full md:h-auto">
            {/* <!-- Modal content --> */}
            <div className='hidden md:flex mb-1.5'>
            <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white"></h3>
            <button type="button" onClick={toggleModal} className="absoluet text-black bg-black rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
                    <svg className="m-[1px]"fill="#ffffff" width="15px" height="15px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fillRule="evenodd"></path> </g></svg>
                </button>
            </div>
            
            <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
                {/* <!-- Modal header --> */}
               
                <div className=" hidden md:flex bg-[#cdffcd] text-green-900 font-semibold items-start justify-between p-5  rounded-t">
                    Let's Learn, Share & inspire each other with our passion for computer engineering. sign up now 🤟.  
                </div>

                <div className="flex items-start justify-between px-5 pt-2 rounded-t dark:border-gray-600">
                    <h3 className="text-gray-900 text-xl    lg:text-2xl font-semibold dark:text-white">
                        Create Account
                    </h3>

                    <div >
                        <span className="hidden md:block text-gray-800 mr-4">Already have an account?<span className="text-blue-600 font-semibold"> Sign In</span></span>
                    <button type="button" onClick={toggleModal} className="md:hidden block text-gray-400 bg-gray-600 rounded-full hover:bg-black hover:text-gray-900 text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
                    <svg className="m-[1px]"fill="#ffffff" width="15px" height="15px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fillRule="evenodd"></path> </g></svg>
                </button> 
                    </div>
                      
                </div>
                {/* <!-- Modal body --> */}
                <div className="space-y-6">
                    {/* <p className="text-gray-500 text-base leading-relaxed dark:text-gray-400">
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed dark:text-gray-400">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                    </p> */}
<div className="mx-auto grid max-w-4xl grid-cols-12 gap-4  p-1">
<div className="col-span-12 rounded-lg   p-6 sm:col-span-8">
<form className="border rounded  border-gray-400">
    <div className="flex ">
    <input aria-labelledby="email" type="email" placeholder="First Name" className="bg-gray-100 text-base rounded leading-none text-gray-900 py-3 w-full pl-3"/>
    <input aria-labelledby="email" type="email" placeholder="Last Name" className="bg-gray-100 rounded-r border-l border-gray-400   text-base leading-none text-gray-900 py-3 w-full pl-3"/>
    </div>
    <divc className="flex  border-t border-gray-500">
    <input aria-labelledby="email" type="email" placeholder="Email" className="bg-gray-100 text-base rounded leading-none text-gray-800 py-3 w-full pl-3"/>
    <svg width="24px" height="24px" className=" mt-2 mr-1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z" stroke="#757575" strokeWidth="1.584" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#757575" strokeWidth="1.584" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>        
    </divc>
<input aria-labelledby="email" type="email" placeholder="Password" className="bg-gray-100 border-t border-gray-500  text-base  leading-none text-gray-800 py-3 w-full pl-3 "/>
<input aria-labelledby="email" type="email"  placeholder="Confirm Password" className="bg-gray-100 rounded-b border-t border-gray-500   text-base  leading-none text-gray-800 py-3 w-full pl-3 "/>
    </form>

    <div class="w-full flex flex-col mt-6"> 
    <button class="rounded-full bg-blue-600 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-blue-700 active:bg-blue-700">
                    Create Account
                </button> 
                
</div>
        <div className="text-sm mt-4">
                        <Link href="#" className="flex border mb-1.5 border-gray-300 items-center justify-center text-black  py-2 hover:bg-gray-200 ">
                            <Image src="/google.png" width={18} height={18} alt="google"/>
                            <span className="ml-2">Sign up with Google</span>
                        </Link>
                        <Link href="#" className="flex border border-gray-300 items-center justify-center text-black  py-2 hover:bg-gray-200 ">
                        <Image src="/facebook.png" width={18} height={18} alt="facebook"/>
                            <span className="ml-2">Sign up with Facebook</span>
                        </Link>
                        
                    </div>
  </div>
  <div className="col-span-12 rounded-lg   sm:col-span-4">
                <Image className="ms:hidden"src="/login.jpg" height={900} width={900} alt="login" />
                <div className="text-gray-500 text-xs mt-16 ml-2">
                    By signing up, you agree to our Terms & conditions, Privacy policy
                </div>
  </div>
  
  </div>

                </div>
              
            </div>
        </div>
    </div>

  )
}

export default Modal
