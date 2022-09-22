import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Header from './Header'
import '../../src/App.css'
import Sidebar from './Sidebar'
const Progress = () => {

    const [file, setFile] = useState()
    const [filename, setFilename] = useState('')
    const [description, setDescription] = useState("")

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

    const submit = async event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append("image", file)
        formData.append("description", description)
        console.log(formData)
        const result = await axios.post('http://localhost:3001/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        console.log(result)
        console.log(data[0].name)


    }
    const handleChange = (e) => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }
    const handleDelete = async (id) => {
        const deleted = await axios.delete("http://localhost:3001/progress/" + id)
    }
    return (
        <div className='flex App'>
            <div className="sticky top-0 left-0 w-1/5 bg-white shadow-md shadow-gray-400 h-screen">
                <Sidebar />
            </div>
            <div className='w-full'>
                <Header title={"admin"} />
                <div className="bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4 mt-10 w-2/4 flex justify-center flex-col m-auto ">
                    <span className='font-bold font-italic  text-3xl flex items-center justify-center animate-pulse'>Projects Under Construction</span>
                </div>
                <div class="w-full max-w-xs my-8 flex justify-center flex-col m-auto">
                    <form action="/images" method="post" enctype="multipart/form-data" onSubmit={submit} class="bg-white w-full shadow-md rounded px-8 pt-6 pb-8 mb-4 my-4">
                        <div class="mb-4">

                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
                            <input onChange={e => handleChange(e)}
                                type="file"
                                accept="image/*" class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" name='file' />

                        </div>
                        <div class="mb-4">

                            {/* <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
                        <textarea onChange={e => setDescription(e.target.value)} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea> */}

                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Description</label>
                            <input onChange={e => setDescription(e.target.value)}
                                type="text" class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" name='file' />

                        </div>

                        <div class="flex items-center justify-between">
                            <button class=" flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Upload
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>

                            </button>

                        </div>
                    </form>
                </div>

                <div class="overflow-x-auto relative shadow-md sm:rounded-lg mx-10">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    image
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Description
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.length > 0 && data.map((singleData) => {


                                const h = "http://localhost:3001/images/" + singleData.name
                                return <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img class="rounded-t-lg h-12 3-12" src={h} alt="" />
                                    </th>
                                    <td class="py-4 px-6">
                                        {singleData.description}
                                    </td>

                                    <td class="py-4 px-6">
                                        <button onClick={e => handleDelete(singleData._id)}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                        </button>


                                    </td>

                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>


            </div>
        </div>

    )
}

export default Progress