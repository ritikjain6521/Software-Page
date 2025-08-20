import React from 'react'
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';


type Props = {

    reviewtitle: string;
    userName: string;
    userImage: string;
    role: string;

};

const Reviewcard = ({ reviewtitle, role, userName, userImage }: Props) => {
    return (
        <div className='bg-gray-100 p-6 rounded:lg mr-4 shadow-md'>
            <h1 className='text-2xl text-black font-bold'> {reviewtitle}</h1>
            <div className='items-center flex mt-2'>
                <FaStar className='text-yellow-500 w-5 h-6' />
                <FaStar className='text-yellow-500 w-5 h-6' />
                <FaStar className='text-yellow-500 w-5 h-6' />
                <FaStar className='text-yellow-500 w-5 h-6' />
                <FaStar className='text-yellow-500 w-5 h-6' />

            </div>
            <p className='mt-4 text-base md:text-lg font-medium text-gray-800'>

                The developer delivered beyond our expectations. The application is fast, modern, and the AI integration added huge value. Communication and delivery were excellent.
            </p>
            <span className='block w-full h-[1px] bg-gray-300 mt-6 mb-6'></span>

            <div className='flex items-center justify-between'>
             <div className='flex items-center space-x-4'>
                <Image
                    src={userImage}
                    alt="image"
                    width={60}
                    height={60}
                    className="rounded-full"
                />
                <div>
                  <div>
                    <h1 className='text-base sm:text-lg text-black md:text-xl font-bold'>
                        {userName}</h1>
                    <p className='text-sm text-black sm:text-base md:text-lg'>
                        {role}
                    </p>
                </div>
            </div>
               
                </div>
                <div>
                    <Image src="/images/c4.png" alt='google' width={80} height={80} />
                </div>
            
            </div>
            
        </div>
    )
}

export default Reviewcard