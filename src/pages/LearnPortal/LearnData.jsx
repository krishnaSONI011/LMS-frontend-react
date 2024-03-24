import axios from 'axios';
import React, { useState, useEffect } from 'react';
import LearnCard from './LearnCard';
import NotHave from './NotHave';

const LearnData = () => {
    const [course, setCourseData] = useState([]);
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(false)
    const learnData = async () => {
        try {
            setLoading(true)
            const user = JSON.parse(localStorage.getItem('auth'));
            const userId = user.id;
            const response = await axios.get(`https://lms-backend-1-q2w4.onrender.com/api/enroll/get-enroll/${userId}`);
            setCourseData(response.data.enrolls);

            // Use Promise.all to wait for all axios requests to complete
            const responseData = await Promise.all(
                response.data.enrolls.map(async (m) => {
                    const courseResponse = await axios.get(`https://lms-backend-1-q2w4.onrender.com/api/course/get-course/${m.courseId}`);
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
            {data.length > 0 ? <div className='flex p-3 justify-evenly flex-wrap '>
                {loading ? <><div className='h-screen flex items-center justify-center'><p className='p-5 border-4 border-blue-500 border-b-0  animate-spin rounded-full'></p></div></> : data.map((courseData) => (
                    <LearnCard key={courseData._id}  id={courseData._id} name={courseData.title} image={courseData.logo} about={courseData.description} />
                ))}
            </div> : <NotHave/>}
                {/* card container end */}
            </div>
            {/* parent div end*/}
        </>
    );
};

export default LearnData;
