import React from 'react'

const Contact = () => {
    const actionURL = import.meta.env.VITE_CONTACT_FORM_ACTION_URL;
    console.log('Action URL:', actionURL); // heck if the variable is being read

return (
    <div id='contact' className='max-w-[1050px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
            <form action={actionURL} method='POST' encType='multipart/form-data' className='flex flex-col'>{/*Contact form*/}
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' id='name' />
                            </div>
                            <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300'type='text' name='phone' id='phone' />
                            </div>
                    </div>
                    <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email' id='email' />
                    </div>
                    <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Subject</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject' id='subject' />
                    </div>
                    <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Message</label>
                            <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name='message'></textarea>
                    </div>
                    <button type='submit' className='bg-[#001b5e] text-gray-100 py-4 rounded-lg mt-4 text-lg'>Send Message</button>
            </form>
    </div>
)
}

export default Contact