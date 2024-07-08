import React from 'react'
import phone from "../images/phone.png"
import man from "../images/man.png"
import zigzag from "../images/zigzag.png"

const data = [
    {
        id: 1,
        title: "Explore Quality Internships",
        description: "Explore trending and high-quality opportunities by applying for and securing prestigious internships. Our team carefully analyzes your resumes and the companies you are applying to, ensuring that your efforts and work are duly recognized.",
        image: ""
    },
    {
        id: 2,
        title: "Find Passionate Students",
        description: "We're here to assist you in finding students who are eager to collaborate on your projects. Gain access to high-quality students who are ready to efficiently engage.",
        image: ""
    },
    {
        id: 3,
        title: "High Quality Candidates",
        description: "We provide you with access to the best candidates in the market. Let us help you find the perfect match for your needs.",
        image: "",
    }

]

export const Horizontal = () => {
    return (
        <>
       



                       
       <div className="flex gap-4 items-center mt-[5%] w-full p-8">
      <div className="text-center mb-8 ml-[10%]">
        <h1 className="text-5xl font-bold text-blue-500">One Platform</h1>
        <h2 className="text-5xl font-bold text-black">3 Roles</h2>
      </div>
      <div className="w-full overflow-x-scroll scrollbar-hide">
        <div className="flex space-x-4 p-4">
          <div className="min-w-[612px] min-h-[695px] flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-3xl text-center font-gilroy font-bold text-gray-800 mb-2"><span className='text-[#936A00]'>Explore </span>Quality <br/>  Internships</h2>
            <p className="text-gray-600  font-gilroyMed text-center mb-4">
            Explore trending and high-quality opportunities by applying for and securing prestigious internships. Our team carefully analyzes your resumes and the companies you are applying to, ensuring that your efforts and work are duly recognized.
            </p>
            <img src={phone} alt="Internships" className="w-[607PX] h-[373.3px]  object-contain rounded-md" />
          </div>

          <div className="min-w-[612px] min-h-[695px] flex flex-col items-center justify-center p-4 bg-blue-100 rounded-lg shadow-md">
            <h2 className="text-3xl text-center  font-gilroy text-gray-800 mb-2">Find Passionate <br />  <span className='text-[#004FC6]'>Students</span></h2>
            <p className="text-gray-600 text-center mb-4 font-gilroyMed">
            We're here to assist you in finding students and candidates eager to collaborate on your projects. Our service offers you access to high-quality students from leading colleges who can efficiently engage with your ideas.
            </p>
            <img src={zigzag} alt="Students" className="w-[607PX] h-[373.3px]  object-contain rounded-md" />
          </div>

          <div className="min-w-[612px] min-h-[695px] flex flex-col items-center justify-center p-4 bg-yellow-100 rounded-lg shadow-md">
            <h2 className="text-3xl text-center font-gilroy text-gray-800 mb-2">High Quality <span className='text-[#004FC6]'><br /> Candidates</span></h2>
            <p className="text-gray-600 text-center mb-4  font-gilroyMed">
            We facilitate connections between employers and high-quality students equipped with authentic resumes and proficiently mentioned skills. We meticulously verify resumes and skills to maintain authenticity and ensure superior quality. 
            </p>
            <img src={man} alt="Candidates" className="w-[607PX] h-[373.3px] object-contain rounded-md" />
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
