import React from 'react'
import Softwarecar from './Softwarecar'

const Software = () => {
    return <div className='pt-16 pb-16'>
        <div className='text-center'>
            {/*subheading */}

            <h1 className='uppercase text-lg md:text-2xl sm:text-xl font-bold text-blue-700 dark:text-pink-500'>
                Software
            </h1>
            {/*heading */}
            <h1 className='text-xl sm:text-3xl mt-1 font-bold md:text-4xl'>
                Driving Change with Innovative 
                <br />
                Successful Softwares
            </h1>

        </div>
                     {/*Card */}
          <div className='w-[80%] mx-auto mt-16 grid grid-cols-2 xl:grid-cols-3 gap-10'>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                  <Softwarecar icon="/images/i1.png" title="Best Marketing Software" />


            </div>
              <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
                  <Softwarecar icon="/images/i2.png" title="Product sales software" />


            </div>
              <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                  <Softwarecar icon="/images/i3.png" title="Best Marketing Software" />


            </div>
            
            
            
            
            
            </div>        



    </div>

}

export default Software