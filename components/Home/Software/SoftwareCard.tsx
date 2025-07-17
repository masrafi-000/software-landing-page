import Image from 'next/image';
import React from 'react'


type Props = {
    icon: string;
    title: string;
    desc: string;
}

const SoftwareCard = ({ icon, title, desc }: Props) => {
  return (
    <div className=' bg-green-100 dark:bg-gray-800 p-6 rounded-lg '>
        <Image src={icon} alt={title} width={50} height={50} />
        <h1 className='text-xl mt-6 font-bold'>{title}</h1>
        <p className='text-gray-800 dark:text-gray-300 mt-3 font-medium'>{desc}</p>
        <button className='px-6 py-1.5 rounded-full bg-blue-800 mt-4 font-bold hover:bg-blue-900 transition-all duration-200 cursor-pointer text-white'>Learn More</button>
    </div>
  )
}

export default SoftwareCard