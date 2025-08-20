import React from 'react'
import BlogCar from './BlogCar'

const Blog = () => {
  return (
    <div className='pt-16 pd-16'>
    <div className='text-center'>
       <h1 className='uppercase text-lg md:text-2xl sm:text-xl font-bold text-blue-700 dark:text-pink-500'>
                Latest Blog
            </h1>
            {/*heading */}
            <h1 className='text-xl sm:text-3xl mt-1 font-bold md:text-4xl'>
                Ready Our Latest Insights form 
                <br />
                 Our Blog Post  
            </h1>

    </div>
       <div className='w-[80%] mt-16 mx-auto grid grid-col-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 '>
       <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <BlogCar
           image='/images/b1.png'
           title="Expert Advice for Growing Your Digital Presence"

          
          /> 
       </div>
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <BlogCar
           image='/images/b2.png'
           title="Data-Driven Strategies and Case Studies Success"
          /> 
       </div>
       <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <BlogCar
           image='/images/b3.png'
           title="The Complete SEO Blog for Digital Success"
          /> 
       </div>
       </div>
    </div>
  )
}

export default Blog