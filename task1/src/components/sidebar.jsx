import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const navitems = [
        { title: 'Dashboard', link: '/dashboard', iconClass:"fa-solid fa-list" },
        { title: 'Home', link: '/', iconClass:"fa fa-home" },
        { title: 'Users List', link: '/users-list', iconClass:"fa-solid fa-list" },
        { title: 'Profile', link: '/profile', iconClass: "fa-solid fa-user" },
        { title: 'Signout', link: '/signout', iconClass:"fa-solid fa-list"},
    ]
    return (
        <div
            id="default-sidebar"
            className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {
                        navitems?.map((navitem, index) => (
                            <li key={index}>
                                <Link
                                    to={navitem.link}
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <i className={navitem.iconClass}></i>
                                    <span className="ms-3">{navitem.title}</span>
                                </Link>
                            </li>

                        ))
                    }
                </ul>
            </div>
        </div>

    )
}

export default Sidebar
