import React, { useState } from 'react'
import DataTable from './DataTable'
import Converter from './Converter'

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>

            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={toggleSidebar}>
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside
                className={`fixed top-0 left-0 z-40 w-72 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
                    }`}
                aria-label="Sidebar"
            >
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-100  items-center text-center text-slate-700 font-sans font-semibold">
                    <Converter></Converter>
                    {isSidebarOpen && (
                        <button
                            onClick={toggleSidebar}
                            className="mt-4 px-3 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus:border-gray-600"
                        >
                            Close Sidebar
                        </button>
                    )}
                </div>
            </aside>

            <div class="p-4 sm:ml-72">
                <DataTable></DataTable>
            </div>


        </div>
    )
}

export default Sidebar
