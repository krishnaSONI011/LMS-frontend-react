import React from 'react'
import LearnCard from './LearnCard';

const LearnData = ()=>{
    return(
    <>
    {/* parent div */}
    <div className='w-full'>
        {/* card container  */}
            <div className='flex p-3 justify-evenly flex-wrap '>
                <LearnCard/>
                <LearnCard/>
                <LearnCard/>
                <LearnCard/>
                <LearnCard/>
                <LearnCard/>
                <LearnCard/>
                <LearnCard/>
            </div>
            {/* card container end */}
    </div>
    {/* parent div end*/}
    </>
    )
}
export default LearnData;