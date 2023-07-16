import { faEnvelope, faHeart, faMobile, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className='text-center mb-4 '>

            <div className="md:flex justify-center">
                <div className="md:p-2 md:text-xl text-base font-semibold leading-loose text-gray-900 dark:text-white">
                    <FontAwesomeIcon icon={faPhone} className="text-sky-900 " /> : +91 8879944133
                </div>
                <div className="md:p-2 md:text-xl text-base font-semibold leading-loose text-gray-900 dark:text-white">
                    <FontAwesomeIcon icon={faEnvelope} className="text-sky-900" /> : rahuldalvi1999@gmail.com
                </div>
            </div>
            <p className='md:p-2 md:text-xl text-base font-semibold leading-loose text-gray-900 dark:text-white'>
                Made with <FontAwesomeIcon icon={faHeart} className='text-red-600' /> by Rahul Dalvi
            </p>
        </div>
    )
}
export default Footer;