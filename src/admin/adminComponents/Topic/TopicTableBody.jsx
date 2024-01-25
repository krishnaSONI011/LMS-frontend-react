import React from 'react';

const TopicTableBody = (props) => {
  return (
    <>
      <tr className='mt-3 border-b p-2'>
        <td className='text-center font-3'>1</td>
        <td className='text-center font-3 w-52 p-2'>{props.name}</td>
        <td className='' dangerouslySetInnerHTML={{ __html: props.video }}></td>
        {/* Use dangerouslySetInnerHTML correctly */}
        <td className='flex justify-evenly items-center h-32'>
          <button className="bg-red-500 rounded p-2 text-white font-3">Delete</button>
          <button className="bg-blue-500 rounded p-2 text-white font-3">Update</button>
        </td>
      </tr>
    </>
  );
};

export default TopicTableBody;
