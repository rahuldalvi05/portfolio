import ProgrammerImage from '../assets/programmer.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin, faInstagram, } from '@fortawesome/free-brands-svg-icons'
import Spinner from './Spinner'
import { useEffect, useState } from 'react'
import WhatIDo from './WhatIDo'
import {  faHeart } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer'

const Home = () => {
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setSpinner(false)
        }, 1000);
    }, [])

    return (

        <div>
            {spinner ?
                <Spinner /> :
                (
                    <div>
                        <div className='sm:p-6 pt-0 p-6 grid grid-cols-1 sm:grid-cols-2 gap-1'>
                            <div className='w-full sm:pt-20 '>
                                <div>
                                    <p className='text-center sm:text-left text-sky-900 text-6xl font-bold font-serif uppercase  pt-10'>Rahul Dalvi</p>
                                    <p className='text-sky-800 text-3xl sm:text-4xl text-center sm:text-left font-serif  pt-10'>
                                        A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
                                    </p>
                                </div>
                                <div className='socialMedia pt-8  text-center sm:text-left' >
                                    <span className='cursor-pointer'>
                                        <a href='https://github.com/rahuldalvi05' target="_blank"><FontAwesomeIcon className='text-sky-900 pr-4' icon={faGithub} beatFade size='2xl' /></a>
                                    </span>
                                    <span className='cursor-pointer'>
                                        <a href='https://www.linkedin.com/in/rahuldalvi99/' target="_blank"><FontAwesomeIcon className='text-sky-900 pr-4' icon={faLinkedin} beatFade size='2xl' /></a>

                                    </span>
                                    <span className='cursor-pointer'>
                                        <a href='https://twitter.com/rahul_dalvi99' target="_blank" >    <FontAwesomeIcon className='text-sky-900 pr-4' icon={faTwitter} beatFade size='2xl' /></a>

                                    </span>
                                    <span className='cursor-pointer'>
                                        <a href='https://www.instagram.com/rahuldalvi99/' target="_blank" >  <FontAwesomeIcon className='text-sky-900 pr-4' icon={faInstagram} beatFade size='2xl' /></a>

                                    </span>

                                </div>

                            </div>
                            <div className='w-full flex justify-center'>
                                <img className='w-3/4' src={ProgrammerImage} />
                            </div>

                        </div>
                        <WhatIDo/>
                        <Footer/>
                    </div>
                )


            }

        </div>
    )

}

export default Home;