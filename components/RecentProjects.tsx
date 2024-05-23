/* eslint-disable @next/next/no-img-element */
import { projects } from '@/data'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { PinContainer } from './ui/3dPin'
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Image from 'next/image'
import Link from "next/link"


const RecentProjects = () => {
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading'>
                A small selection of {' '}
                <span className='text-blue-400'>
                    recent projects
                </span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[25rem] w-[80vw] -m-2">

                        <CardContainer className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[26rem] h-auto rounded-xl p-6 border">
                                <div className='relative flex items-center justify-center sm:w-80 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                        <img src="/bg.png" alt="bg-img" />
                                    </div>
                                    <img src={img} alt={title} className='z-10 absolute bottom-0' />
                                </div>
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {des}
                                </CardItem>
                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {iconLists.map((icon, index) => (
                                            <div
                                                key={icon}
                                                className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                                style={{
                                                    transform: `translateX(-${5 * index * 2}px)`
                                                }}
                                            >
                                                <img src={icon} alt={icon} className='p-2' />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex justify-center items-center text-blue-400'>
                                        <a href={link} className='flex lg:text-xl md:text-xs text-sm'>
                                            Ver
                                        </a>
                                        <FaLocationArrow className='ms-3' />
                                    </div>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects