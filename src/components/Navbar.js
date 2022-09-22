import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import LoginModal from './LoginModal'
const Navbar = () => {
    const navigate = useNavigate()
    

    const [loginModal, setLoginModal] = useState(false)

    const handleToggle = () => {

        setLoginModal(!loginModal)
        console.log(loginModal)




    }

    return (
        <div>
      {loginModal ? (
        <div className=" flex w-full h-screen z-50 absolute justify-center pt-20 backdrop-blur-sm  bg-white/5 custom_class_zindex">
          <LoginModal
           setLoginModal={setLoginModal}
          />
        </div>
      ) : (
        ""
      )}
            <nav
                class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
            >
                <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <button
                        class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bars"
                            class="w-6"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                            ></path>
                        </svg>
                    </button>
                    <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
                        <a class="text-xl text-white pr-2 font-semibold" href="/">Dubai Construction</a>

                        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">

                            <li class="nav-item p-2">
                                <a
                                    class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                                    href="#"
                                >Team</a>

                            </li>
                            <li class="nav-item p-2">
                                <a
                                    class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                                    href="#"
                                >Projects</a>

                            </li>
                        </ul>

                    </div>

                    <div class="flex items-center relative">



                        <div class="dropdown relative" >
                          <button onClick={handleToggle}>Login</button>
                        </div>
                    </div>

                </div>
            </nav>
            <div>
                
          
                {/* {loginModal &&
                    <div class="  w-full h-full outline-none overflow-x-hidden overflow-y-auto" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
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
                                        <form class="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                    Sign In
                                                </button>
                                               
                                            </div>
                                        </form>
                                      
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>

                } */}



            </div>
            {/* {loginModal && <LoginModal
                loginModal={loginModal}
                setLoginModal={setLoginModal}
            />} */}
        </div>

    )
}

export default Navbar