import React from 'react';
import hat from "../images/student.png"
import speaker from "../images/speaker.png"

const JoinSec = () => {
  return (
    <div className="bg-white ml-[5%] py-16">
      <div className="container mx-auto px-4">
        <div className="text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
            Join <span className='text-black'>In As</span>
          </h2>
          <p className="text-gray-600 font-gilroyMed text-lg md:text-xl">
            Whether you are a student or employer, Eazeplace has got everything for you
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-blue-100 p-8 w-[80%] rounded-lg shadow-lg flex justify-between">
            <div>
              <h3 className="text-3xl font-gilroy text-blue-500 pb-3 mb-2">Student</h3>
              <p className="text-gray-600 font-gilroyMed text-lg mb-6">
                <h1 className='pb-3'>Build your resume, get hired as an intern for various roles. <br /></h1>
                Connect with bright-minded people and upskill yourself,<br />
                get paid for your skill.
              </p>
            </div>
            <div className="flex flex-col items-center justify-end">
              <img src={hat} alt="Student Icon" className="mb-4" />
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Join As Student
              </button>
            </div>
          </div>
          
          <div className="bg-pink-100 w-[80%]  p-8 rounded-lg shadow-lg flex justify-between">
            <div>
              <h3 className="text-3xl font-gilroyd text-black pb-3 mb-2">Employer</h3>
              <p className="text-gray-600  font-gilroyMed text-lg mb-6">
               <h1 className='pb-3'> Are you an employer seeking to hire quality candidates for <br />
                internships and projects? <br /></h1>
                Eazeplace has this for you. Now hire talented and skilled <br />
                candidates with easy verification and smooth hiring process.
              </p>
            </div>
            <div className="flex flex-col items-center justify-end">
              <img src={speaker} alt="Employer Icon" className="mb-4" />
              <button className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-800">
                Join As Employer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinSec;