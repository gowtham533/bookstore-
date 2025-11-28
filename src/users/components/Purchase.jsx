import React from 'react'

function Purchase() {
  return (
    <>
       <div className="rounded shadow p-10 mx-5 my-20">
        {/* book div duplicate */}
        <div className="bg-gray-200 p-5 rounded">
            <div className="md:grid grid-cols-[3fr_1fr]">
                <div>
                    <h2 className="text-2xl">Title</h2>
                    <h2 className="text-xl">Author</h2>
                    <h2 className="text-lg text-red-500">$ 400</h2>
                    <p className='text-justify'>Abstract</p>
                    <div className="flex mt-5">
                        <img src="/public/purchase.png" alt="" />
                    </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                    <img className='w-100' src="/public/shopping.webp"  alt="" />
                </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Purchase