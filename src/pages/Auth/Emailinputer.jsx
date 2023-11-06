import React from 'react'
import Button from '../../components/fragment/Button'

const Emailinputer = () => {
    return <>
        <div className='p-2'>
            <p className='text-center font-2 text-lg'>Use Your Email</p>
        </div>
        <div className='text-center pt-2'>
            <input type="email" name='email' className='bg-gray-50 p-3 border rounded-md' placeholder='example@gmail.com'/>
        </div>
         <div className='text-center pt-8'>
            <Button>Next</Button>
         </div>
    </>
}
export default Emailinputer