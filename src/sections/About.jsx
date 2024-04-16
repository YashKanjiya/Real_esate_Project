import React,{useEffect} from 'react'

import aboting from '../assets/images/about.jpg';
import {useDarkMode} from '../components/DarkModeContext';
import Aos from 'aos';
import 'aos/dist/aos.css';


export const About = () => {

  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100, 
    });
  }, [])

  const {darkMode,toggleDarkMode}=useDarkMode();
  return (
    <section id='about' className={`${darkMode ? 'dark bg-black':'light bg-transparent'} w-full m-auto lg:px-40 
    px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-ceneter gap-10`}>
      <div>
        <img data-aos='zoom-in' src={aboting} alt='about image' className='rounded-2xl lg:w-[500] lg:h-[600]'/>
      </div>

      <div className='flex flex-col justify-center items-start gap-8'>
        <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>
            WHO WE ARE
        </h1>

        <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[40px]
        font-semibold leading-10 dark:text-white'>
            Loren ipsum dolor sit amet consectetur
        </h1>

        <p data-aos="zoom-in" data-aos-delay="400" className='text-xl text-gray-600
        font-semibold leading-10 dark:text-white'>
          The demand for luxury properties has gone up significantly in recent years. 
          According to a survey by CBRE, the sales of luxury homes in the country, priced at Rs 4 crore and above, surged by 75 per cent last year. 
          The growth of affluent millennial buyers for living spaces that blend perfectly aesthetics, functionality, and sustainability is changing the market dynamics. 
          This revolution, however, requires an innovative element for both construction and marketing.
        </p>

        <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white 
            dark:hover:text-black text-lg p-4 text-white font-semibold 
            rounded-xl cursor-pointer transform hover:scale-110 transition-transform 
            duration-300'>
              Read more
        </button>

      </div>

    </section>
  )
}
export default About;