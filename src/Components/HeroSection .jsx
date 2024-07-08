import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white text-center pb-[16%]  pt-[10%] py-20">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl pb-3 font-gilroy text-blue-500  mb-4">
        <span className="text-blue-500 ">Proof Based Hiring: </span>
        <span className="text-black">Connecting  <br/> Quality with Quality</span>
      </h1>
      <p className="text-gray-700 text-lg md:text-xl font-gilroy mb-6">
        "The world's first platform offering verification of candidates' <br/> professionalism, journey, and experience through proofs."
      </p>
      <button className="bg-blue-500  font-gilroyMed text-white px-6 py-3 rounded-md hover:bg-blue-600">
        Explore Now
      </button>
    </div>
  </div>
  );
};

export default HeroSection;
