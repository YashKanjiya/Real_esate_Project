import React from 'react'
import {useDarkMode} from '../components/DarkModeContext';

import {FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaBuilding,FaMobile,FaFax,FaTwitch
,FaArrowUp,FaMoon,FaSun} from 'react-icons/fa';
import { Link } from 'react-scroll';
import {IoMdMail} from 'react-icons/io';
import prop7 from '../assets/images/prop7.jpg';
import prop8 from '../assets/images/prop8.jpg';


export const Footer = () => {

  const {darkMode,toggleDarkMode}=useDarkMode();

  return (
    <>
     <footer className={`${darkMode ? 'dark bg-black':'light bg-gray-800'} w-full
     m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center
     items-start lg:gap-20 gap-10`}>

      <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>About US</h1>
          <p className='text-slate-200 text-justify'>
            we take pride in our uncompromising integrity in customer engagement and quality assurance, and throughout our 75-year legacy, we have made it our core mission to provide real-estate development, management, and investment services of the highest calibre.
          </p>
          <div id='social-icons' className='flex justify-start items-center gap-4 mt-4'>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
            cursor-pinter transform hover:scale-110 transitiontransform duration-300'>
              <FaFacebook className='size-5'/>
            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
            cursor-pinter transform hover:scale-110 transitiontransform duration-300'>
              <FaInstagram className='size-5'/>
            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
            cursor-pinter transform hover:scale-110 transitiontransform duration-300'>
              <FaTwitter className='size-5'/>
            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
            cursor-pinter transform hover:scale-110 transitiontransform duration-300'>
              <FaYoutube className='size-5'/>
            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
            cursor-pinter transform hover:scale-110 transitiontransform duration-300'>
              <FaTwitch className='size-5'/>
            </div>
          </div>
          <h1 className='text-white mt-8'>CopyRight Real Estate ,All Right Reservered</h1>
      </div>

      <div className='flex flex-col justify-center items-start gap-5'>
        <h1 className='text-white text-2xl font-semibold'>Contact US</h1>

        <div className='flex justify-center items-center gap-3'>
          <FaBuilding className='text-white size-5'/>
          <p className='text-slate-200'>
            Jamnagar,Gujarat,India 
          </p>
        </div>

        <div className='flex justify-center items-center gap-3'>
          <FaMobile className='text-white size-5'/>
          <p className='text-slate-200'>
            123-456-789-0 
          </p>
        </div>

        <div className='flex justify-center items-center gap-3'>
          <FaFax className='text-white size-5'/>
          <p className='text-slate-200'>
            0028-1234-4568 
          </p>
        </div>

        <div className='flex justify-center items-center gap-3'>
          <IoMdMail className='text-white size-5'/>
          <p className='text-slate-200'>
            CustomDLF@DLF.in 
          </p>
        </div>
      </div>


      <div className='flex flex-col justify-center items-start gap-5'>
        <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
        <div className='flex justify-center item-center gap-4'>
          <img src={prop7} alt="" className='w-[120px] rounded-lg transform 
          hover:scale-110 cursor-pointer transition-transform duration-300'/>
          <div>
            <h1 className='text-lg text-white'>Villa with Amzing view</h1>
            <p className='text-slate-400'>$500.00</p>
          </div>
        </div>

        <div className='flex justify-center item-center gap-4'>
          <img src={prop8} alt="" className='w-[120px] rounded-lg transform 
          hover:scale-110 cursor-pointer transition-transform duration-300'/>
          <div>
            <h1 className='text-lg text-white'>Cool Beach View</h1>
            <p className='text-slate-400'>$2500.00</p>
          </div>
        </div>
      </div>
     </footer>


     {/* slide top to bottom scroll */}
     <div id='icon-box' className='bg-red-600 p-4 rounded-full hover:bg-black
     cursor-pointer fixed lg:bottom-12 bottom-6 right-6'>
      <Link to='hero' spy={true} offset={-100} smooth={true}>
        <FaArrowUp className='size-6 text-white'/>
      </Link>
     </div>

     {/* dark mode button for toggleDarkMode */}

      <div>
        <button onClick={toggleDarkMode} className='flex items-center p-4
        rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6'>
          {
            darkMode ? <FaMoon size={25} className='text-black'/>:<FaSun size={25}
            className='text-black'/>
          }

        </button>
      </div>


    </>
  )
}

export default Footer;
