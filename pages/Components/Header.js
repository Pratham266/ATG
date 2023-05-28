import React from 'react'

const Header = ({toggleModal}) => {
  return (
		<>
		<div className="bg-[#068d57] relative">
		<div className="top-0 left-0 w-full  bg-blue-900 opacity-75 flex items-center">
	<section className="bg-cover bg-center h-96  w-full" style={{backgroundImage: `url('/home.jpg')`}}>
		<div className="md:hidden flex mt-4">
		<svg  className="ml-4" width="32px" height="34px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#fef6f6" stroke="#fef6f6" strokeWidth="8.192"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#ffffff" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>	
		<button className="absolute mr-4 right-2 text-white text-sm border-2 font-medium border-white rounded-md px-4 py-2 hover:bg-white hover:text-blue-900 transition-colors" onClick={toggleModal}>Join Group</button>
	</div>
		<div className="container mx-auto text-left text-white space-y-12">
			<div className="flex items-center h-1/2">
			<div className="ml-4 md:ml-[120px] mt-20 py-32">
              <h1 className="text-3xl md:text-5xl font-medium mb-6">Computer Engineering</h1>
              <p className="text-sm md:text-xl mb-12">142,765 Computer Engineers follow this</p>
          </div>
				</div>
			</div>
	</section>
</div>
</div>

		</>
  )
}

export default Header
