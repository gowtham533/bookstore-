import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { FaBook, FaUser, FaUsers } from 'react-icons/fa'
import { BiPurchaseTag } from 'react-icons/bi'
import { ResponsiveContainer, BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, PieChart, Pie } from 'recharts'



function AdminHome() {

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
];

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];


  return (
    <>
      <AdminHeader/>
      <div className='md:grid grid-cols-5'>
      <div className="col-span-1">
      <AdminSidebar/>
      </div>
      <div className="col-span-4 p-10">
        {/* category */}
        <div className="md:grid grid-cols-4 gap-10">
          {/* 1st block */}
        <div className="md:px-5 my-5 md:my-0">
          <div className="bg-green-100 p-5 flex justify-center items-center rounded w-50">
        {/* icon */}
        <FaBook className='text-black text-5xl'/>
        {/* content */}
        <div className="text-center ms-5">
          <h3 className="text-xl">Books</h3>
          <h2 className="text-2xl">100+</h2>
        </div>
          </div>
        </div>
        <div className="md:px-5 my-5 md:my-0">
          <div className="bg-yellow-100 p-5 flex justify-center items-center rounded w-50">
        {/* icon */}
        <FaUser className='text-black text-5xl'/>
        {/* content */}
        <div className="text-center ms-5">
          <h3 className="text-xl">Users</h3>
          <h2 className="text-2xl">100+</h2>
        </div>
          </div>
        </div>
        <div className="md:px-5 my-5 md:my-0">
          <div className="bg-blue-100 p-5 flex justify-center items-center rounded w-50">
        {/* icon */}
        <FaUsers  className='text-black text-5xl'/>
        {/* content */}
        <div className="text-center ms-5">
          <h3 className="text-xl">Employees</h3>
          <h2 className="text-2xl">100+</h2>
        </div>
          </div>
        </div>
        <div className="md:px-5 my-5 md:my-0">
          <div className="bg-red-100 p-5 flex justify-center items-center rounded w-50">
        {/* icon */}
        <BiPurchaseTag className='text-black text-5xl'/>
        {/* content */}
        <div className="text-center ms-5">
          <h3 className="text-xl">Purchases</h3>
          <h2 className="text-2xl">100+</h2>
        </div>
          </div>
        </div>
        </div>
        {/* chart title */}
        <div className="md:grid grid-cols-2 mt-5">
          <h3 className="text-xl font-bold">Monthly Reveue(Bar chart)</h3>
          <h3 className="text-xl font-bold">Monthly Purchase(Pie chart)</h3>
        </div>
        {/* chart */}
        <div className="md:grid grid-cols-2 mb-5">
        {/* bar chart */}
        <ResponsiveContainer width='500' height='400'>
          <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8"  />
          <Bar dataKey="uv" fill="#82ca9d"  />
        </BarChart>
        </ResponsiveContainer>
        {/* pie chart */}
        <ResponsiveContainer width='500' height='400'>
          <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="50%"
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            fill="#82ca9d"
            label
          />
  </PieChart>
        </ResponsiveContainer>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default AdminHome