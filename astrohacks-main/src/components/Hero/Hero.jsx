import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";




      
   



const Hero = () => {
  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
          <h1 data-aos="fade-up" className="text-4xl font-bold">
          
            </h1>

           

            
            <p data-aos="fade-up" data-aos-delay="300">
              Explore the mysteries of space and experience the thrill of orbiting the Earth. Our cutting-edge satellite technology provides a unique perspective on our planet, allowing you to witness its beauty and complexity like never before.
            </p>
            
            
            
            <Link to="">
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-red-700 text-white hover:bg-blue-600 px-4 py-2 rounded-lg duration-200 focus:outline-none my-8"
            >
              Experience with AR
            </button >
            </Link>
            


            
            
          
          
          
          
          
          </div>
          <div></div>
        </div>
      </div>
      
      <h1 data-aos="fade-up" className="text-5xl font-bold">
              ORBIT THE EARTH
            </h1>

      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
