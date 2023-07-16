import { useState } from 'react';
import ProfileImage from '../assets/dp.png'

import { Link } from 'react-router-dom';
function Navbar() {
    const [open,setOpen]=useState(false);
    let routes= [
        {name:'Home',to:'/' },
        {name:'Experience',to:'experience'},
        {name:'Project',to:'project'},
        {name:'Education',to:'education'},
        // {name:'Resume',to:'resume'},
    ]
    
    const renderList= routes.map((link)=>(
        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 font-serif '>
            <Link  onClick={()=>setOpen(!open)} className=' text-sky-800 hover:text-white font-semibold hover:bg-sky-700 p-3 uppercase   ' to={link.to}>{link.name}</Link>
            {/* <a key={link.name} className='hover:text-gray-800 hover:bg-white hover:p-2 rounded-lg' href="{link.to}">{link.name}</a> */}
        </li>
    ))

    return (
        <div className='headerAnimation'>
            <div className='w-full  fixed top-0 left-0 '>
                <div className='md:flex items-center justify-between headerAnimation bg-rahul-navbar py-4 px-4'>
                    <div className='font-bold text-2x1 cursor-pointer flex items-center'>
                            <span className='px-2'>
                                <img src={ProfileImage} className='h-10 w-10 rounded-full' alt="Rahul" />
                            </span>
                        <Link to={'home'}>       <span className='px-1 animate-pulse sm:text-2xl text-xl text-sky-800 font-serif'>{"Rahul Ramesh Dalvi"}</span></Link>
                 
                    </div>
                    <div onClick={()=>setOpen(!open)} className='text-3x1 absolute top-padding  right-8 top-6 cursor-pointer md:hidden'>  
                        <ion-icon name={open? 'close' : 'menu'}></ion-icon>
                    </div>
                    <ul className={`
                     md:flex md:items-center md:pb-0 rounded-xl absolute 
                     md:static bg-rahul-navbar md:z-auto z-[-1] 
                     left-0 w-full md:w-auto md:pl-0 pl-9 
                     transition-all duration-500 ease-in
                     ${open ? 'top-19 opacity-100 duration-500 ease-out': 'duration-500 top-[-480px]'} 
                     md:opacity-100 opacity-0
                    `}>
                        {renderList}
                        {/* <Button>Read More</Button> */}
                    </ul>
                  
                </div>
            </div>
        </div>
    );
}

export default Navbar;
