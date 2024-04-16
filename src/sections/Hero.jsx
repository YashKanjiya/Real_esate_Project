import Aos from 'aos';
import React, { useEffect, useState } from 'react'

import {useDarkMode} from '../components/DarkModeContext';
import heroimg from '../assets/images/hero1.webp';

export const Hero = () => {

  const {darkMode,toggleDarkMode}=useDarkMode();

  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100, 
    });
  }, [])
  
  return (
    <>
      <div className={`${darkMode} ? 'dark bg-black':'light bg-white'}`}>
        <section id='hero' className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-x1 flex justify-center flex-col item-start lg:px-28 px-10 gap-7 z-20' 
        style={{backgroundImage:`url(${heroimg})`}}>
        
        <h1 data-aos="zoom-in" className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px] " >
          Find YOur Next home in Delhi
        </h1>

        <p data-aos="zoom-in" className="text-white text-xl lg:pr-[500px] pr-0">
          Lorem,ispum dolor sit amet consectetur adipisicing elit. Voluptatibus vites Voluptatibus consectetur ex ipsum maxime quo minima blanditiis odis evenint.
        </p>
        </section>
      </div>

      <div className={`${darkMode ? 'dark bg-black':'light bg-transparent'} z-10`}>
        <div data-aos="zoom-in" id='form' className={`${darkMode ? 'dark bg-gray-800':'light bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-x1 -mt-14`}>
          <div className='w-full'>
            <h1 className='text-black font-semiboald dark:text-white'>LOCATIONS</h1>
            <input type="text" placeholder='Enter an address,state,city or pincode' 
            className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]'/>
          </div>

          <div className='w-full'>
            <h1 className='text-black font-semiboald dark:text-white'>TYPE</h1>
            <select name="selectOption" id="selectOption" className='bg-white p-2
            border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'>
            <option value="" disabled selected>Select Property</option>
            <option value="Option1">Rentals</option>
            <option value="Option2">Sales</option>
            <option value="Option3">Commercial</option>
            </select>
          </div>

          <div className='w-full'>
            <h1 className='text-black font-semiboald dark:text-white'>CATEGORY</h1>
            <select name="selectOption" id="selectOption" className='bg-white p-2
            border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'>
            <option value="" disabled selected>Property Category</option>
            <option value="Option1">Apartment</option>
            <option value="Option2">Duples</option>
            <option value="Option3">Condos</option>
            <option value="Option4">Park</option>
            <option value="Option5">Garden</option>
            </select>
          </div>

          <div className='w-full'>
            <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white 
            dark:hover:text-black text-lg p-4 w-full text-white font-semibold 
            rounded-xl cursor-pointer transform hover:scale-110 transition-transform 
            duration-300'>
              SUBMIT
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
export default Hero;