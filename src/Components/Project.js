import { faGithub, faHtml5, faPython, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ProjectImage from '../assets/projects.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHeart } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
function Project() {

    const projectList = [
        {
            name: 'LifeSpire - Disease Predictor',
            url: 'https://github.com/LifeSpireBe/LifeSpire-DiseasePredictor',
            techstack: [
                {
                    name: faReact,
                    className: 'text-sky-600'
                },
                {
                    name: faPython,
                    className: 'text-yellow-600'
                },
                {
                    name: faTwitter,
                    className: 'text-sky-600'
                },
            ],
            created: '6 November 2020',
            description: "Designed and developed mobile application using React Native to detect diseases by analyzing user-provided symptoms."

        },
        {
            name: 'CyberBullying',
            url: 'https://github.com/rahuldalvi05/CyberBullying',
            techstack: [
                {
                    name: faPython,
                    className: 'text-yellow-600'
                },
                {
                    name: faTwitter,
                    className: 'text-sky-600'
                },

            ],
            created: '16 July 2020',
            description: "Machine Learning module was created using Python and the SKLearn library to detect bullying tweets. The dataset, obtained from Kaggle, underwent preprocessing and manipulation operations. Additionally, the Twitter API was utilized to retrieve real-time tweets, enabling the module to classify whether the tweets contained bullying content or not."

        },
        {
            name: 'Monument Recognition',
            url: 'https://github.com/rahuldalvi05/MonumentRecognition',
            techstack: [
                {
                    name: faPython,
                    className: 'text-yellow-600'
                },
                {
                    name: faTwitter,
                    className: 'text-sky-600'
                },

            ],
            created: '14 May 2020',
            description: "Machine Learning module was developed using Python and the TensorFlow library to identify monuments. The module was trained on a dataset collected from Kaggle, which likely contained images of various monuments. Through preprocessing, the module gained the ability to accurately recognize and classify different monuments based on the input images"

        },
        {
            name: 'Restaurant-Search-App',
            url: 'https://github.com/rahuldalvi05/Restaurant-Search-App',
            techstack: [
                {
                    name: faReact,
                    className: 'text-sky-600'
                },
            ],
            created: '23 May 2020',
            description: "Developed mobile application using React Native, enabling users to find restaurants based on pricing. The application utilized the YELP API to obtain authentic restaurant data, enhancing the user experience by providing real-time and reliable information."

        }

    ]

    const renderProject = projectList.map((item) => (
        <div key={item.name} className='w-full md:text-left text-center p-4 shadow-lg shadow-sky-500/50  bg-sky-100  rounded' >
            <div className='md:flex'>
                <div className='p-2'>
                    <a href={item.url} target='_blank' className='text-xl sm:text-2xl font-semibold text-sky-900 underline'>{item.name}</a>
                </div>
                <div className='ml-4 p-2'>
                  <a href={item.url} target='_blank'>  <FontAwesomeIcon icon={faGithub} size='2xl' className='text-black cursor-pointer' /></a>
                </div>

            </div>
            <div className=' mt-3'>
                <span >
                    <FontAwesomeIcon icon={faBolt} className='text-yellow-300 mr-4' />    {item.description}
                </span>
            </div>

            <div >

                <div className='w-full mt-3'>
                    {item.techstack.map((techItem, index) => (
                        <span key={`${techItem.name}+${index}`} className='pr-2'>
                            <FontAwesomeIcon className={techItem.className} icon={techItem.name} size='2xl' />
                        </span>
                    ))}

                </div>
            </div>
        </div>
    ))
    return (
        <>
            <div className="sm:p-6 pt-0 p-6 grid grid-cols-1 sm:grid-cols-2 gap-1">
                <div className='w-full'>
                    <img src={ProjectImage} />
                </div>
                <div className='w-full sm:mt-20'>
                    <div className='w-full sm:pt-20 '>
                        <div>
                            <p className='text-center text-sky-900 text-6xl font-serif md:pt-4   pt-10'>PROJECTS</p>
                            <p className='text-sky-800 text-xl sm:text-2xl md:text-xl text-center  font-serif  pt-10'>
                                My projects makes use of vast variety of latest technology tools. My best experience is to create Web Apps projects</p>
                        </div>


                    </div>
                </div>
            </div>
            <div className='projects'>
                <div className='pt-2 p-6 grid grid-cols-1 sm:grid-cols-3 gap-6'>
                    {renderProject}

                </div>
            </div>
            <Footer/>


        </>
    )
}

export default Project;