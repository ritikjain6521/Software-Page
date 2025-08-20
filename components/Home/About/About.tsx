import Image from 'next/image'
import React from 'react'


const About = () => {
  return <div className='pt-16 pd-16 '>

    <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* image contant   */}
      <div data-aos="zoom-in" data-aos-anchor-placement="top-center" >
       <Image src="/images/about.png" alt="image" width={700} height={700} />
           </div>
    {/* image contant   */}
    <div>
      <p className='text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500 uppercase'>
        
        About Us
        </p>
         <h1 className='text-2xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem]'>
         Innovations Excellence Building Digital Future Together
    </h1>
    <p className='mt-3 text-gray-700  md:text-gray-300'>
       At [RjTeach], we believe that technology is more than just code — it’s a powerful tool to shape a smarter, faster, and more connected world. Guided by our vision of “Innovations, Excellence, Building Digital Future Together”.


    </p>
    <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
      <div className='flex items-center gap-4'>
     <Image src="/images/a1.png" alt='icon' width={50} height={50} />
     <h1 className='text-lg sm:text-xl font-bold leading-5'>It Infrastucture <br />  Management
     </h1>
      </div>
     <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
      <div className='flex items-center gap-4'>
     <Image src="/images/a2.png" alt='icon' width={50} height={50} />
     <h1 className='text-lg sm:text-xl font-bold leading-5'>Cloud Integration <br /> Service Provide
     </h1>
      </div>
    </div>
    </div>

     <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
      <div className='flex items-center gap-4'>
     <Image src="/images/a3.png" alt='icon' width={50} height={50} />
     <h1 className='text-lg sm:text-xl font-bold leading-5'> Custom Software <br />  Development
     </h1>
      </div>
     <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
      <div className='flex items-center gap-4'>
     <Image src="/images/a4.png" alt='icon' width={50} height={50} />
     <h1 className='text-lg sm:text-xl font-bold leading-5'> Instant Supports <br /> any Queries
     </h1>
      </div>
    </div>
    </div>
    <div  className='mt-12'>

          <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span className="relative">About Us</span>
</a>
    </div>
 

    </div>
    </div>
</div>
  
}

export default About