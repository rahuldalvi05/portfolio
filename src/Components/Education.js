import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HSCImage from '../assets/hsc.gif'
import SPITLogo from '../assets/SPIT_Mumbai_Logo.jpg'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer'
function Education() {
    const WorkExperienceList = [
        {
            name: 'Sardar Patel Institute of Technology, Mumbai, India',
            duration: 'July 2017 - May 2021',
            role: 'B.Tech in Information Technology',
            companyLogo: SPITLogo,
            percentage: '8.64 CGPA',
            describe: [
                "I have studied basic software engineering subjects like Data Structures, Algorithms, DBMS, OS, etc.",
                "Apart from this, I have done courses on  Cloud Computing and Full Stack Development."
            ]

        },
        // {
        //     name: 'B. K. Birla College, Kalyan, India',
        //     duration: 'July 2015 - May 2017',
        //     role: 'HSC (PCM with Computer Science)',
        //     companyLogo: SPITLogo,
        //     percentage: '80.80%',
        //     describe: [
        //         "I have studied Physics, Chemistry and Maths with Computer Science.",

        //     ]

        // }
    ]

    const renderListExperience = WorkExperienceList.map((item, index) => (
        <div key={`${item.percentage}+${index}`} className="max-w-full mx-auto  rounded-xl shadow-md border-2 border-sky-900 mt-4 p-4">
            <div className="md:flex">
                <div className="md:shrink-0 flex justify-center">
                    <img className="sm:h-48 w-2/4 sm:w-full object-cover md:h-full p-2" src={item.companyLogo} alt="Modern building architecture" />
                </div>
                <div className="p-8 w-full">
                    <div className='md:flex'>
                        <div className='sm:shrink-0 md:text-left text-center'>
                            <div className="uppercase tracking-wide md:text-xl text-sm text-sky-800 font-semibold">{item.role}</div>
                            <div className="block mt-2 leading-tight font-medium text-black hover:underline">{item.name}</div>
                        </div>
                        <div className='w-full md:text-right text-center'>
                            <div className="block mt-1 text leading-tight font-medium text-sky-600 ">{item.duration}</div>
                            <div className="block mt-2 text leading-tight font-bold  text-sky-900 ">{item.percentage}</div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <ul className='w-full space-y-1 text-sky-900 list-disc list-inside dark:text-sky-900'>
                            {item.describe.map((describeItem) => (

                                <li key={describeItem}>{describeItem}</li>

                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>


    ))

    return (
        <>
            <div className="sm:p-6 pt-0 p-6 ">

                <div className="w-full sm:mt-20 mt-2">
                    <div>
                        <p className='text-center text-sky-900 text-6xl font-serif md:pt-4 uppercase  pt-10'>Education</p>
                        <p className='text-sky-800 text-xl sm:text-3xl md:text-xl text-center  font-serif  pt-10'>
                            I graduated from Sardar Patel Institute of Technology Mumbai,India in 2021 with a Bachelor of Technology degree.
                        </p>

                    </div>

                </div>
            </div>
            <div className='p-6 w-full'>
                {renderListExperience}
            </div>
            <Footer/>
        </>
    )
}

export default Education;