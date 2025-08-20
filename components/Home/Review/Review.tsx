
"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Reviewcard from './Reviewcard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Review = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[90%] md:w-[80%] mx-auto'>
        {/*Section Heading*/}
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
          <div>
            <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase'>
              Testimonials
            </h1>
            <h1 className='text-xl sm:text-3xl md:text-4xl mt-1 font-bold'>
              Trusted by Industry Leaders Clients Testimonial
            </h1>
          </div>
          <div className='lg:ml-auto'>
            <a href="#_" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">All Review</span>
            </a>


          </div>
        </div>
        {/* Sliders */}
        <div className='mt-16'>
          <Carousel
          
            showDots={false}
            responsive={responsive}
         
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
          
          >
           <Reviewcard reviewtitle="Great work"
           userName="Jassica Doe"
           userImage="/images/c1.png"
           role="UI UX Desinger" />
             <Reviewcard reviewtitle="Creative work"
           userName="Jany  Doe"
           userImage="/images/c2.png"
           role="Devloper" />
             <Reviewcard reviewtitle="Good work"
           userName="Jason Doe"
           userImage="/images/c3.png"
           role="App Devloper" />
          </Carousel>

        </div>
     

      </div>

    </div>
  )
}

export default Review