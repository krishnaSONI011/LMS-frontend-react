import React from 'react'
import { Link } from 'react-router-dom'
const MailBox = (props) => {
  function timeChanger(timestamp){
  

// Convert the timestamp to a Date object
const date = new Date(timestamp);

// Get the day, month, and year
const day = date.getDate();
const month = date.getMonth() + 1; // Month starts from 0
const year = date.getFullYear();

// Get the hours and minutes
let hours = date.getHours();
const minutes = date.getMinutes();

// Convert hours to 12-hour format and determine if it's AM or PM
const amPm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12 || 12; // Convert to 12-hour format

// Format the date and time
const formattedDateTime = `${day}-${month < 10 ? '0' + month : month}-${year} ${hours}:${minutes < 10 ? '0' + minutes : minutes} ${amPm}`;

return formattedDateTime;

  }
  return (
    <Link to={`/mail/single-mail/${props.id}`}><div className='p-2 hover:shadow-md '>
      <div className='flex justify-between'>
        {/* name */}
        <div className='font-1 font-semibold'>
            <p>{props.name}</p>
        </div>
        {/* description */}
        <div className='font-2 w-[500px]'>
            <p className='line-clamp-1 '>
                {props.body}
            </p>
        </div>
        {/* time stamp */}
        <div className='font-semibold font-1'>
            <p>{timeChanger(props.time)}</p>
        </div>
      </div>
    </div></Link>
  )
}

export default MailBox
