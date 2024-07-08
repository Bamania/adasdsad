import React from 'react';
import comma from "../images/comma.png";

export const Reviews = () => {
  const testimonials = [
    {
      text: "Easy to generate internships and jobs at Eazeplace with easy to understand process",
      author: "Mehul Singh",
    },
    {
      text: "Easy to generate internships and jobs at Eazeplace with easy to understand process",
      author: "Mehul Singh",
    },
    {
      text: "Easy to generate internships and jobs at Eazeplace with easy to understand process",
      author: "Mehul Singh",
    },
    {
      text: "Easy to generate internships and jobs at Eazeplace with easy to understand process",
      author: "Mehul Singh",
    },
    // Add more testimonials here if needed
  ];
  
  return (
    <div className="bg-white p-8 mt-[4%]">
      <div className="text-left ml-[5%] mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">WHAT PEOPLE SAY</h2>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          ABOUT <span className="text-blue-600">EAZEPLACE</span>
        </h2>
      </div>
      <div className="flex flex-col bg-white m-auto p-auto">
        <div className="flex overflow-x-scroll py-10 scrollbar-hide">
          <div className="flex gap-28 items-center justify-center">
            {testimonials.map((item, index) => (
              <div key={index} className="w-[458px] h-[240px]">
                <div className="w-full h-full border bg-[#EAFAFF] overflow-hidden rounded-lg  hover:scale-105  duration-300 ease-in-out">
                  <img className='py-5 px-5' src={comma} alt="comma" />
                  <div className='flex flex-col w-[420px] justify-center items-center px-4 py-4'>
                    <p className="text-xl text-center font-thin text-blue-500 font-gilroy">{item.text}</p>
                    <p className="text-center mt-4  font-gilroy">#{item.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
