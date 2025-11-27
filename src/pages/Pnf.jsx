import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <>
      <div className='min-h-screen flex justify-center items-center flex-col'>
        <img width={'500px'} src="/public/original-78d5a175341b5698c5e82e902ff801a6 1.png" alt="" />
        <p className='text-xl m-5'>Oh No!</p>
        <h1 className='text-4xl font-bold'>Look Like You Are Lost</h1>
        <p className='text-xl m-5'>Page you are looking for not available </p>
        <Link to={'/'} className='bg-blue-400 p-3 rounded'>Back to Home</Link>
      </div>
    </>
  )
}

export default Pnf