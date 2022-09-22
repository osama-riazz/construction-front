import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Caraousel from './Caraousel'
import Navbar from './Navbar'


const Home = () => {
    const [data, setData] = useState([])

    const fetch = async () => {
        await axios
            .get("http://localhost:3001/image")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => console.log(err, "it has an error"));

    }
    useEffect(() => {
        
        fetch()
    }, [data]);
    return (
        <div className=''>
            <Navbar />
            <Caraousel/>
            <div className="bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4  w-3/4 flex justify-center flex-col m-auto ">
                <span className='font-bold font-italic  text-3xl flex items-center justify-center animate-pulse'>Projects Under Construction</span>
            </div>
            <div className='flex flex-wrap justify-center my-10'>
                {data.length > 0 && data.map((singleData) => {
                    // const st = singleData.name
                    // const ff = st.replace("images\\","")

                    const h = "http://localhost:3001/images/" + singleData.name
                    return <div className='mx-1'>

                        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <img class="rounded-t-lg w-52 h-52 " src={h} alt="" />
                            <div class="p-5">
                                <span class="mb-3 font-normal text-gray-700 dark:text-gray-400">{singleData.description}</span>
                            </div>
                        </div>

                        {/* <img class="max-w-full h-auto" src={h} alt="image description" />
                        <span>{singleData.description}</span> */}
                    </div>
                })}
            </div>
          
        </div>
    )
}

export default Home