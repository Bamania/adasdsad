import React from 'react';
import qualityIntern from "../images/quality.png"



const EazeplaceFeatures = () => {

  
const Card = (props) => {

  return (<>


    <div

      className="bg-[#E6F8FE] p-6 rounded-lg flex  w-[70%] items-start space-x-4"
    >
      <div className="text-4xl  font-gilroy text-blue-600"><img src={props.img} alt="" /></div>
      <div>
        <h2 className="text-xl  font-gilroy text-black">{props.title}</h2>
        <p className="mt-2  font-gilroy text-blue-700">{props.description}</p>
      </div>
    </div>


  </>
  )
}
  return (
    <div className="bg-white p-10 mt-[5%] ml-[5%]">
      <h1 className="text-5xl font-gilroy text-blue-600 mb-10">Eazeplace  <span className='text-black'>provides </span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-[8%]">

      <Card img={qualityIntern} title="Quality Internships" description="Vacancy posted of reputed companies" />
      <Card img={qualityIntern} title="Quality Internships" description="Vacancy posted of reputed companies" />
      <Card img={qualityIntern} title="Quality Internships" description="Vacancy posted of reputed companies" />
      <Card img={qualityIntern} title="Quality Internships" description="Verification of skills and candidates through personalized calls to enhance the quality of the resume pool" />
      <Card img={qualityIntern} title="Quality Internships" description="Vacancy posted of reputed companies" />
      <Card img={qualityIntern} title="Quality Internships" description="Vacancy posted of reputed companies" />
      </div>
    </div>
  );
};

export default EazeplaceFeatures;
