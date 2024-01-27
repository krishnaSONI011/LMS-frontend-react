import React from "react";
import image1 from '../../assests/app-mockup-2.svg'
import image2 from '../../assests/our-team.svg'
import image3 from '../../assests/ad.svg'
const FirstSection = () => {
    return <>
        <div className="pt-20  md:mx-32 mx-10 ">
            <div className="flex-col-reverse md:flex-row flex items-center justify-between">
            <div>
                    <div className="font-1 text-md text-gray-400 text-center md:text-start">LEARNERS AND STUDENTS</div>
                    <div className="font-3 text-xl md:text-3xl text-center md:text-start font-semibold mt-1">You can learn anything.</div>
                    <div>
                    <p className="md:w-4/6 mt-7 text-md font-1 text-center md:text-start">
                    Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.
                    </p>
                    <div className="mt-7 font-1 text-center md:text-start mb-3">
                        <button className="bg-[#e6f7ff] text-2xl px-5 py-2 rounded-xl ">Courses</button>
                    </div>
                    </div>
             </div>

            <div>
                <div className="flex gap-x-6">
                    <img src={image1} alt=""  className="w-2/4"/>
                    <img src={image2} alt=""  className="w-2/4"/>
                </div>
                <div className="flex justify-center ">
                    <img src={image3} alt=""  className="w-5/6"/>
                   
                </div>
            </div>
                

                
            </div>

        </div>
    </>
}

export default FirstSection;