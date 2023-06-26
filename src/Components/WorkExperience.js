import { useEffect, useState } from 'react';
import ExperienceImage from '../assets/experience2.jpg'
import LTIMindtree from '../assets/ltimindtree.png';
import Spinner from './Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
function WorkExperience() {
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setSpinner(false)
        }, 1000);
    }, [])

    const WorkExperienceList = [
        {
            name: 'LTIMindtree',
            duration: 'July 2021 - Present',
            role: 'Senior Software Developer',
            companyLogo: LTIMindtree,
            location: 'Mumbai',
            description: "As a full stack developer, I have expertise in building web pages with Angular, React.js, and HTML, emphasizing reusable components and TypeScript for consuming REST APIs. I have experience in designing and developing Restful APIs using Spring Boot, incorporating Spring Security for security measures. I am skilled in deploying and maintaining applications on AWS and have utilized JIRA for efficient project management. Additionally, I conducted unit testing with Karma to ensure code quality and reliability."
        },
        {
            name: 'LTIMindtree',
            duration: 'Jan 2021 - June 2021',
            role: 'Software Developer Intern',
            companyLogo: LTIMindtree,
            location: 'Bangalore',
            description: "Using Angular 8, I created a user-friendly dashboard that displays weekly activities customized for different user roles. This dashboard allows users to easily manage activities by adding, editing, and deleting them as needed. Additionally, I built robust backend services that support a variety of features and ensure smooth application operation, facilitating seamless user interactions. Throughout the development process, I demonstrated proficiency in requirements gathering, design, and implementation, delivering effective solutions that meet business requirements and showcasing strong analytical and problem-solving skills."
        }
    ]

    const renderListExperience = WorkExperienceList.map(item => (
        <div key={item.description} className="max-w-full mx-auto  rounded-xl shadow-md border-2 border-sky-900 mt-4 p-4">
            <div className="md:flex">
                <div className="md:shrink-0 flex justify-center">
                    <img className="h-48 w-3/4 object-cover md:h-full md:w-48 sm:w-48" src={item.companyLogo} alt="Modern building architecture" />
                </div>
                <div className="p-8">
                    <div className='md:flex'>
                        <div className='sm:shrink-0 md:text-left text-center'>
                            <div className="uppercase tracking-wide md:text-xl text-sm text-sky-800 font-semibold">{item.role}</div>
                            <div className="block mt-2 leading-tight font-medium text-black hover:underline">{item.name}</div>
                        </div>
                        <div className='w-full md:text-right text-center'>
                            <div className="block mt-1 text leading-tight font-medium text-sky-600 ">{item.duration}</div>
                            <div className="block mt-2 text leading-tight font-medium text-sky-600 ">{item.location}</div>
                        </div>
                    </div>
                    <p className="mt-2 text-slate-500 md:text-left text-center ">{item.description}</p>
                </div>
            </div>
        </div>


    ))
    return (
        <div>
            {
                spinner ?
                    <Spinner /> :
                    <div>
                        <div>
                            <div className='sm:p-6 pt-0 p-6 grid grid-cols-1 sm:grid-cols-2 gap-1'>
                                <div className='w-full'>
                                    <img src={ExperienceImage} />
                                </div>
                                <div className='w-full sm:pt-20 '>
                                    <div>
                                        <p className='text-center text-sky-900 text-6xl font-serif md:pt-4 uppercase  pt-10'>Experience</p>
                                        <p className='text-sky-800 text-xl sm:text-2xl md:text-xl text-center  font-serif  pt-10'>
                                            I am a full stack developer at LTIMindtree with experience in various technologies such as Angular, React.js, .NET, and Java. I have successfully worked on multiple projects, showcasing my proficiency in both front-end and back-end development.
                                        </p>
                                    </div>


                                </div>

                            </div>
                            <div className='p-6 pt-0'>
                                {renderListExperience}
                            </div>

                        </div>
                        <div className='text-center mb-4'>
                                <p className='text-2xl font-semibold leading-loose text-gray-900 dark:text-white'>
                                    Made with <FontAwesomeIcon icon={faHeart}  className='text-red-600'/> by Rahul Dalvi
                                </p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default WorkExperience;