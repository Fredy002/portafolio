/* eslint-disable @next/next/no-img-element */
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '../data/index'

const Footer = () => {
    return (
        <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready to take
                    <span className='text-blue-400'>your</span>
                    digital presence to the next level?
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>
                    Reach out to me and lets discuss how we can work together to create something amazing.
                </p>
                <a href="mailto:almeydaalania@gmail.com">
                    <MagicButton
                        title='Get in Touch'
                        icon={<FaLocationArrow/>}
                        position='right'
                    />
                </a>
            </div>

            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>
                    2024 - Almeyda Alania, Fredy Antonio
                </p>

                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((item)=>(
                        <div
                            key={item.id}
                            className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border border-black-300 rounded-xl'
                        >
                            <img src={item.img} alt={item.id} width={20} height={20}/>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer