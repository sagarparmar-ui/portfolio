import React from 'react'
import {projects} from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
const RecentProjects = () => {
  return (
    <div className='translate-y-[10%] sm:pt-5 pt-0 py-20' id='projects'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>
                recent projects
            </span>
        </h1>
        <div className='flex flex-wrap items-center 
        justify-center pt-28 p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({
                id, title, des, img, iconLists, link, custom}) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]
                felx items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px]
                        w-[80vw] sm:h-[40vh] overflow-hidden h-[30vh] mb-10'>
                            
                            <img 
                                src={img}
                                alt={title}
                                className={custom}
                            />
                            
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>
                        <div className='flex items-center justify-between
                        mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full 
                                    bg-black lg:w-10 lg:h-8 w-8 h-8 flex justify-center items-center'
                                    style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <a>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                                <FaLocationArrow className='ms-3'  color='#CBACF9'/>
                                </a>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>  
   </div>
  )
}

export default RecentProjects