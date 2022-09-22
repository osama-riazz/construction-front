import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Header from './Header'
import '../../src/App.css'
import Sidebar from './Sidebar'
const Admin = () => {



    return (
        <div className='flex App'>
            <div className="sticky top-0 left-0 w-1/5 bg-white shadow-md shadow-gray-400 h-screen">
                <Sidebar />
            </div>
            <div className='w-full'>
                <Header title={"admin"} />
                <div className='flex justify-center content-center'>
                    <label type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 h-32">Green</label>
                    <label type="button" class=" h-32 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</label>

                </div>
            </div>
        </div>

    )
}

export default Admin