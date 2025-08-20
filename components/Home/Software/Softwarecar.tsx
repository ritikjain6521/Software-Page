import React from 'react'
import Image from 'next/image'
type Props = {

    icon: string;
    title: string;

};

const Softwarecar = ({ icon, title }: Props) => {
    return (
        <div className='bg-green-100 dark:bg-gray-800 p-6 rounded-lg'>

            <Image src={icon} alt="icon" width={50} height={50} />
            <h1 className='text-xl mt-6 font-bold'>
                {title}

            </h1>
            <p className='text-gray-800 dark:text-gray-300 mt-3 font-medium'>
                Free Integration means that when you choose our solutions, we ensure they work effortlessly with the tools you already use.

            </p>
        <button className='px-6 py-1.5 rounded-full bg-blue-800 mt-4 font-bold
         hover:bg-blue-950 transition-all duration-200 cursor-pointer text-white'>
            Learn More
        </button>
        </div>
    );

}

export default Softwarecar