import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function PaymentError() {
  return (
    <>
        <Header/>
        <div className="min-h-screen flex justify-center items-center">
            <div className="md:grid grid-cols-2 gap-10">
                <div className='m-5'>
                    <h1 className='text-7xl text-blue-500 mb-5'>Failed..!!!</h1>
                    <h3 className='text-2xl text-green-400'>We apologize fro the inconvience caused</h3>
                    <Link to={'/books'} className='flex items-center bg-red-400'><FaBackward/>Explore more Books</Link>
                </div>
                <div>
                    <img src="" alt="paymentSuccess" />
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default PaymentError