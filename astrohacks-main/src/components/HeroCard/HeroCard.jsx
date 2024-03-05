import React from "react";
import wave from "../../assets/wave Gif.gif";

import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";




const ServiceData = [
 
  
  
];







const HeroCard = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
              {ServiceData.map((data, index) => {
  return (
    <div
      key={index}  // Add a unique key prop
      data-aos="fade-up"
      data-aos-delay={data.aosDelay}
      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
    >
      {data.icon}
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <p className="text-sm">{data.description}</p>
    </div>
  );
})}
              </div>


             
              
             
              

       
              
              
            
            </div>

           
          </div>
          
        </div>



        
      </section>
    </>

    
  );

  
};

export default HeroCard;
