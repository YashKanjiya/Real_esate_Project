import React, { useEffect } from "react";

import { useDarkMode } from "../components/DarkModeContext";
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

export const PopularArea = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <div className={`${darkMode} ? 'dark bg-color':'light bg-transparent'`}>
        <section
          className={`${darkMode ? "dark bg-gray-800" : "light bg-red-100"} 
        lg[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center
        flex-col items-ceneter lg:px-20 px-6 py-20 gap-20`}
        >
          <div
            id="top"
            className="w-full grid lg:grid-cols-3 grid-cols-1"
            justify-center
            items-cover
            gap-8
          >
            <div>
              <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
                POPULATE AREA
              </h1>
              <h1
                data-aos="zoom-in"
                className="text-block text-[40px] font-semibold
              leading-10 mt-4 dark:text-white"
              >
                Explore most
                <br />
                popular areas
              </h1>
            </div>

            <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
              <div
                data-aos="zoom-in"
                data-aos-delay="400"
                style={{ backgroundImage: `url(${area1})` }}
                className="h-[400px] bg-cover bg-ceneter rounded-xl"
              ></div>
              <div
                data-aos="zoom-in"
                data-aos-delay="400"
                style={{ backgroundImage: `url(${area2})` }}
                className="h-[400px] bg-cover bg-ceneter rounded-xl"
              ></div>
              <div
                data-aos="zoom-in"
                data-aos-delay="400"
                style={{ backgroundImage: `url(${area3})` }}
                className="h-[400px] bg-cover bg-ceneter rounded-xl"
              ></div>
            </div>
          </div>
          <div id="bottom" className="w-full grid lg:grid-cols-3 grid-cols-1"
            lg:justify-ceneter justify-start item-ceneter gap-6 >
            <div data-aos="slide-up" data-aos-delay="200" className="flex
            justify-center lg:items-center gap-8 w-full">
              <h1 className="text-black text-7xl font-semibold dark:text-white">
                10K
              </h1>
              <h1 className="dark:text-white">
                ACTIVE
                <br />
                Listing
              </h1>
            </div>

            <div data-aos="slide-up" data-aos-delay="200" className="flex
            justify-center lg:items-center gap-8 w-full">
              <h1 className="text-black text-7xl font-semibold dark:text-white">
                5K
              </h1>
              <h1 className="dark:text-white">
                ACTIVE
                <br />
                Client
              </h1>
            </div>

            <div data-aos="slide-up" data-aos-delay="200" className="flex
            justify-center lg:items-center gap-8 w-full">
              <h1 className="text-black text-7xl font-semibold dark:text-white">
                100K
              </h1>
              <h1 className="dark:text-white">
                Total
                <br />
                Sell
              </h1>
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
};

export default PopularArea;
