import React from 'react'
import { FaEdit } from 'react-icons/fa'

function Edit() {
  return (
    <>
        <button className="flex items-center justify-center text-blue-600 border rounded p-2"><FaEdit className='me-2'/>EDIT</button>
        {/* offcanvas */}
        <div>
            <div className="fixed inset-0 bg-gray-500/75 z-50 w-full h-full">
            </div>
            <div className="bg-white h-full w-90 fixed top-0 left-0">
                {/* header */}
                <div className="bg-black p-3 flex justify-between"></div>
                {/* body */}
            </div>
        </div>
    </>
  )
}

export default Edit