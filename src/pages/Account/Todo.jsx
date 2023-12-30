import React from "react";
import TodoCalnder from "./TodoCalnder";
import 'react-calendar/dist/Calendar.css';
import TodoSection from "./TodoSection";
const Todo = ()=>{
    return (
        <>
        <div className='w-2/6  flex flex-col items-center'>
            <TodoCalnder/>
            <TodoSection />
        </div>
        </>
    )
}
export default Todo;