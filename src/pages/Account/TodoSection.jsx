import React from 'react'
import TodoInputer from './TodoInputer';
import TodoWriter from './TodoWriter';

const TodoSection = ()=>{
    function getDate(){
        const today = new Date();
        const date = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        return date+ '/'+month+'/'+year
    }
    const [date,setDate] = React.useState(getDate())
    return (
        <>
        {/* parent div */}
        <div className='border border-black rounded w-4/6 mt-7 flex flex-col  justify-center'>

       
        {/* todo inputer */}
        <div className='font-1 text-lg mt-7 text-center'>
        Here todays todo
        </div>
        {/* todo inputer end */}
        {/* date div  */}
        <div className='text-lg font-1 text-center'>
            {date}
        </div>
        {/* date div end */}
        
        <TodoInputer />
        <TodoWriter />
        </div>
        </>
    )
}

export default TodoSection;