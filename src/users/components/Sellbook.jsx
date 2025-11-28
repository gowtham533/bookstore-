import React from 'react'

function Sellbook() {
  return (
    <div>
        <div className="p-10 my-20 mx-5 bg-gray-200 ">
        <h1 className="text-center text-3xl font-bold">Book Details</h1>
        <div className="md:grid grid-cols-2 mt-10 w-full">
           
            <div className="px-3">
                <div className="mb-3">
                    <input type="text" placeholder='Booktitle' className='p-2 bg-white w-full rounded'/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Author' className='p-2 bg-white w-full rounded'/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='no.of pages' className='p-2 bg-white w-full rounded'/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Original price' className='p-2 bg-white w-full rounded'/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Discount price' className='p-2 bg-white w-full rounded'/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Book image URL' className='p-2 bg-white w-full rounded'/>
                </div>
                <div className="mb-3">
                    <textarea type="text" placeholder='Book abstract' style={{height:"150px"}} className='p-2 bg-white w-full rounded'/>
                </div>
            </div>
            <div className="px-3">
                <div className="mb-3">
                    <input type="text" placeholder='Language' className='p-2 bg-white w-full rounded'/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Publisher' className='p-2 bg-white w-full rounded'/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='ISBN' className='p-2 bg-white w-full rounded'/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Category' className='p-2 bg-white w-full rounded'/>
                </div>
                <div className="mb-3 mt-10 flex justify-center items-center">
                    <label htmlFor="uploading">
                        <input type="file" id='uploading' hidden/>
                        <img src="/public/upload-1118929_1280.webp" style={{width:"200px"}} alt="upload" />
                    </label>
                </div>
            </div>
        </div>
        <div className="flex justify-end">
                <button className="bg-gray-400 text-white p-2 rounded me-5 hover:bg-white hover:text-gray-400">RESET</button>
                <button className="bg-blue-400 text-white p-2 rounded me-5 hover:bg-white hover:text-blue-400">SUBMIT</button>
            </div>
        </div>
    </div>
  )
}

export default Sellbook