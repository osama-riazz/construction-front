import React from 'react'
import {useNavigate} from 'react-router-dom'
const LoginModal = ({ setLoginModal }) => {
    const navigate = useNavigate()
    const handleLogin = () => {
        setLoginModal(false)
        navigate('/admin')
    }

    return (
        <div class="  w-full h-full outline-none overflow-x-hidden overflow-y-auto" role="dialog">
            <div class="modal-dialog  relative w-auto pointer-events-none">
                <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                            Admin Login
                        </h5>
                        <button type="button"
                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body relative p-4 ml-12 w-full">
                        <div class=" max-w-xs">
                            <form class="w-full bg-white  rounded px-8 pt-6 pb-8 mb-4">
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                        Email
                                    </label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email..." />
                                </div>
                                <div class="mb-6">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                        Password
                                    </label>
                                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />

                                </div>
                                <div class="flex items-center justify-between">
                                    <button onClick={e => handleLogin()} class="bg-blue-500 ml-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Sign In
                                    </button>

                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginModal