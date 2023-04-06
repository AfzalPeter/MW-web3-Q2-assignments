"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const links = [
    { href: "/about", text: "About" },
    { href: "/syllabus", text: "Syllabus" },

];




const NavBar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <header className='mx-auto max-w-screen-xl'>
            {/* flex items-center justify-between gap-4 lg:gap-10 */}
            <nav className='z-50 py-5 flex items-center justify-between font-semibold gap-4 lg:gap-10'>
                <div className='flex-1 font-bold text-xl'>
                    <h1>PANAVERSE</h1>
                </div>
                <div>
                    {/* className="hidden gap-8 text-sm font-medium md:flex" */}

                    <ul className={`md:flex flex-1 gap-12 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                        }`}>
                        {links.map((l) => (
                            <li className='navlink' key={l.href}>
                                <motion.div
                                    whileHover={{ scale: 1.3 }}
                                >

                                    <Link href={l.href}>
                                        {l.text}
                                    </Link>
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div>
                        <button
                            type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg 
                          md:hidden hover:bg-gray-100 focus:outline-none 
                          focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
                          dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            onClick={() => setNavbar(!navbar)} >

                            {navbar ? ("Menu") : (
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            )}
                        </button>
                    </div>

                </div>
                <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
                    <a
                        className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
                        href="" >  Log in
                    </a>

                    <a
                        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
                        href="" > Sign up
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;