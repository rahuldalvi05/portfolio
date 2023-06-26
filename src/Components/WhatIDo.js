import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloudImage from '../assets/cloud.jpg'
import FullStackImage from '../assets/Full Stack.jpg'
import { faAngular, faAws, faCss3, faHtml5, faJava, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
function WhatIDo() {
    return (
        <div>
            <div>
                <p className='text-center  text-sky-900 text-5xl font-serif font-bold  pt-10'>What I Do?</p>
            </div>
            <div>
                <div className='sm:p-6 pt-0 p-6 grid grid-cols-1 sm:grid-cols-2 gap-1 align-middle'>
                    <div className='w-full sm:pt-20 sm:flex sm:justify-center'>
                        <img className='sm:h-80' src={FullStackImage} />
                    </div>
                    <div className='w-full sm:pt-20 '>

                        <div>
                            <p className='md:text-left text-center text-sky-900 text-5xl font-serif md:pt-4   pt-10'>Full Stack Development</p>
                            <div className='mt-8 md:text-left text-center '>
                                <span className='p-3'>
                                    <FontAwesomeIcon className='text-orange-600 techFontSize' icon={faHtml5} />
                                </span>
                                <span className='p-3'>
                                    <FontAwesomeIcon className='text-pink-600 techFontSize' icon={faCss3} />
                                </span>
                                <span className='p-3'>
                                    <FontAwesomeIcon className='text-yellow-400 techFontSize' icon={faJs} />
                                </span>
                                <span className='p-3'>
                                    <FontAwesomeIcon className='text-red-700 techFontSize' icon={faAngular} />
                                </span>
                                <span className='p-3'>
                                    <FontAwesomeIcon className='text-sky-700 techFontSize' icon={faReact} />
                                </span>
                                <span className='p-3'>
                                    <FontAwesomeIcon className='text-red-700 techFontSize' icon={faJava} />
                                </span>
                                <span className='p-3'>
                                    <FontAwesomeIcon className='text-green-600 techFontSize' icon={faNodeJs} />
                                </span>
                            </div>
                            <div className='text-sky-800 text-xl sm:text-2xl md:text-xl md:text-left  font-serif  pt-10'>
                                <ul className="w-full space-y-1 text-gray-500 list-disc list-inside dark:text-gray-900">
                                    <li>
                                        Building responsive website front end using React-Redux and Angular
                                    </li>
                                    <li>
                                        Developing mobile applications using React Native
                                    </li>
                                    <li>
                                        Creating application backend in Node, Express & Java
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>

                </div>
                <div className='sm:p-6 pt-0 p-6 grid grid-cols-1 sm:grid-cols-2 gap-1'>
                    <div className='w-full sm:pt-20  sm:flex sm:justify-center'>
                        <img className='sm:h-80' src={CloudImage} />
                    </div>
                    <div className='w-full sm:pt-20 '>
                        <div>
                            <p className='md:text-left text-center text-sky-900 text-5xl font-serif md:pt-4   pt-10'>Cloud Infra Architecture</p>
                            <div className='mt-8 md:text-left text-center '>
                                <span className='p-3'>
                                    <FontAwesomeIcon className='text-orange-600 techFontSize' icon={faAws} />
                                </span>
                                <span className='p-3'>
                                    <FontAwesomeIcon className='text-sky-600 techFontSize' icon={faCloud} />
                                </span>
                            </div>
                            <div className='text-sky-800 text-xl sm:text-2xl md:text-xl md:text-left  font-serif  pt-10'>
                                <ul className="w-full space-y-1 text-gray-500 list-disc list-inside dark:text-gray-900">
                                    <li>
                                        Experience working on AWS Cloud
                                    </li>
                                    <li>
                                        Hosting and maintaining websites on virtual machine instances along with integration of databases
                                    </li>

                                </ul>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default WhatIDo;