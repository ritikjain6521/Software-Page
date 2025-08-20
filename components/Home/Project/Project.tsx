import React from 'react'
import Image from 'next/image'
const Project = () => {
  return <div className='pt-16 pb-16'>
  <div className='w-[80%] mx-auto'>
<div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
        <div>
          <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase'>
            LATEST WORKS
          </h1>
          <h1 className='text-xl sm:text-3xl md:text-4xl mt-1 font-bold'>
            Driving Change with innovative Succesful Project
          </h1>
        </div>
          <div className='lg:ml-auto'>
          <a href="#_" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Project</span>
</a>

          </div>
      </div>

       {/*project image */}
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" >
            <Image src="/images/p1.png" alt="image" width={600} height={600}/>
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="100">
            <Image src="/images/p2.png" alt="image" width={600} height={600}/>
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <Image src="/images/p3.png" alt="image" width={600} height={600}/>
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <Image src="/images/p4.png" alt="image" width={600} height={600}/>
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="400">
            <Image src="/images/p5.png" alt="image" width={600} height={600}/>
        </div>
         <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="500">
            <Image src="/images/p6.png" alt="image" width={600} height={600}/>
        </div>
 </div>
  </div>
  </div>
  
}

export default Project