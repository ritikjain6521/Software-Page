import React from 'react'
import ServiceCard from './ServiceCard'


const Services = () => {
  return <div className='pt-16 pb-16'>
    <div className='w-[80%] mx-auto'>
      {/* Section Heading */}
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
        <div>
          <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase'>
            What we provide
          </h1>
          <h1 className='text-xl sm:text-3xl md:text-4xl mt-1 font-bold'>
            Provide High Quality Software Service for All Industry
          </h1>
        </div>
          <div className='lg:ml-auto'>
           <a href="#_" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
    </span>
    <span className="relative text-white">
       All Services

    </span>
</a>

          </div>
      </div>
        {/* Service Card */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-16 '>
           <div data-aos="fade-right" data-aos-anchor-placement="top-center" >
              <ServiceCard  image= "/images/s1.png" 
              title="Custom Software Development" />

           </div>      
             <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
              <ServiceCard image= "/images/s2.png" 
              title="Website Design and Development" />s

           </div>
             <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
              <ServiceCard image= "/images/s3.png" 
              title="Hosting Service" />

           </div>
             <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
              <ServiceCard image= "/images/s4.png" 
              title="Ai & Machine Learning Integration" />

           </div>
             <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="400">
              <ServiceCard image= "/images/s5.png" 
              title="Android & ios App Development" />

           </div>
             <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="500">
              <ServiceCard image= "/images/s6.png" 
              title="3D Graphics & Vector Designing" />

           </div>

        </div>


    </div>
  </div>
 
}

export default Services