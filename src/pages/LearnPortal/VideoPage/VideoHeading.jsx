import React, { useState,useEffect } from 'react';
import { LuPlay } from "react-icons/lu";
import { useLocation, useNavigate } from 'react-router-dom';

const VideoHeading = (props) => {
  const navi = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const checkedData = props.checkedAr.filter((data) => data.topicId === props.id);

  const [isChecked, setIsChecked] = useState(checkedData.length > 0 && checkedData[0].checked);
  let prevIsChecked = null
  let counter = 0
  function videoSetter() {
    queryParams.set('video_id', props.id);
    navi({ search: queryParams.toString() });
  }
  useEffect(() => {

    if ( isChecked) {
      props.checkedCount(props.count  + 1);
      prevIsChecked = "false"
    } 
   
    
  }, []);
  useEffect(()=>{
   
  },[isChecked])
 
  function handleCheckboxChange(e) {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    if ( prevIsChecked === 'true') {
      props.checkedCount(props.count  + 1);
      prevIsChecked = "false"
    } 
    if(prevIsChecked === "false") {
      props.checkedCount(props.count - 1)
      prevIsChecked = "true"
    }
    // You might want to update your checkedData array or do something else here.
  }

  return (
    <div className={`w-80 m-2 ${props.id == queryParams.get('video_id') ? 'bg-blue-500 text-white' : 'bg-white text-black'} border p-2`}>
      <div className='flex items-center justify-around'>
        <input
          type="checkbox"
          checked={isChecked}
          // disabled={isChecked} 
          className='w-5 h-5 disabled-checkbox'
          onClick={handleCheckboxChange}
        />
        <h1 className='font-1 text-lg'>{props.title}</h1>
        <button
          onClick={videoSetter}
          className={`text-lg border-2 ${props.id == queryParams.get('video_id') ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'} rounded-full p-2`}
        >
          <LuPlay />
        </button>
      </div>
    </div>
  );
}

export default VideoHeading;
