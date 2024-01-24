import React from 'react'

const TopicTableBody = () => {
  return (
    <>
       <tr className='mt-3 border-b p-2'>
                <td className='text-center font-3 '>1</td>
                <td className='text-center font-3 '>Kridhn thaksfjd aksjdfk</td>
                <td className=''>
                  
                  <iframe  width="200" height="100" src="https://www.youtube.com/embed/b0WrS5Qp5rM?si=TaFSl7fnoiM6qc_n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  
               
                </td>
                <td className='flex justify-evenly items-center h-32'>
                    <button className="bg-red-500 rounded p-2 text-white font-3">Delete</button>
                    <button className="bg-blue-500 rounded p-2 text-white font-3">Update</button>
                </td>
            </tr>
    </>
  )
}

export default TopicTableBody
