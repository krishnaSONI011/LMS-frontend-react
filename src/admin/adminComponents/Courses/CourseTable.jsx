import React from 'react'
import TableData from './TableData';

const CourseTable = ()=>{
    const data = [
        {sr:1,name:'react',about:'its a react course'},
        {sr:2,name:'Full Stack', about:'its a course about fullstack'}
]
    return(
<>
<table class="min-w-full text-left text-sm font-light">
          <thead
            class="border-b bg-white font-medium ">
            <tr>
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">Course Name</th>
              <th scope="col" class="px-6 py-4">About</th>
              <th scope="col" colSpan={2} class="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((m)=>(
                <TableData sr={m.sr} name={m.name} about={m.about}/>

            ))}
          </tbody>
        </table>
</>
    )
};
export default CourseTable;