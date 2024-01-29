import axios from 'axios';
import React, { useState, useEffect } from 'react';
import LearnCard from './LearnCard';

const LearnData = () => {
    const [course, setCourseData] = useState([]);
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(false)
    const learnData = async () => {
        try {
            setLoading(true)
            const user = JSON.parse(localStorage.getItem('auth'));
            const userId = user.id;
            const response = await axios.get(`https://lms-backend-production-fcd7.up.railway.app/api/enroll/get-enroll/${userId}`);
            setCourseData(response.data.enrolls);

            // Use Promise.all to wait for all axios requests to complete
            const responseData = await Promise.all(
                response.data.enrolls.map(async (m) => {
                    const courseResponse = await axios.get(`https://lms-backend-production-fcd7.up.railway.app/api/course/get-course/${m.courseId}`);
                    return courseResponse.data.course;
                })
            );

            setData(responseData);
            
        } catch (e) {
            console.log(e);
        }finally{
            setLoading(false)
        }
    };

    useEffect(() => {
        learnData();
    }, []);

    return (
        <>
            {/* parent div */}
            <div className='w-full'>
                {/* card container  */}
                <div className='flex p-3 justify-evenly flex-wrap '>
                    {loading ? <><div className='h-screen flex items-center w-full justify-center'><h1 className='  p-2 rounded bg-blue-500 text-white text-xl '>Loading...</h1></div></> : data.map((courseData) => (
                        <LearnCard key={courseData._id} name={courseData.title} image={courseData.logo} about={courseData.description} />
                    ))}
                </div>
                {/* card container end */}
            </div>
            {/* parent div end*/}
        </>
    );
};

export default LearnData;
