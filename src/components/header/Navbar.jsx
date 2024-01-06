import React, { useRef, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

import NavMenuItem from './NavMenuItem';

const navMenuLinks = [
    { link: "/home", title: "Home" },
    { link: "/details", title: "Details" },
    { link: "/category", title: "Category" },
    { link: "/favourites", title: "My Favourites" },
    { link: "/profile", title: "Profile" },
    { link: "/signup", title: "Log In/Sign Up" },
];

export default function Navbar() {
    const navDropdownMenu = useRef(null);
    const [showMenu, setShowMenu] = useState(false);
    const handleOpenMenu = () => {
        if (showMenu) setShowMenu(false);
        else setShowMenu(true);
    };
    return (
        <nav className="grid grid-cols-12 py-5 border-b border-slate-300 sm:border-transparent">
            <div className="col-span-2 flex items-center">
                <img src="/logo.png" className="h-[25px] sm:h-[50px]" />
            </div>
            <div className="col-span-10 flex items-center gap-x-2 md:col-span-8">
                <div className="w-full flex items-center justify-start bg-white pe-1 py-2 text-sm rounded-md sm:text-base sm:pe-2 sm:py-3 sm:rounded-xl">
                    <FiSearch className="text-secondary mx-1 text-[20px] sm:text-[20px] sm:mx-3" />
                    <input
                        type="search"
                        placeholder="Search Audiobook"
                        className="bg-transparen border-0 outline-none w-full"
                    />
                </div>
                <div className="relative">
                    <button
                        className="flex justify-between items-center gap-x-8 sm:gap-x-16 bg-white rounded-md px-1.5 py-2 sm:px-3 sm:py-3 sm:rounded-lg"
                        onClick={handleOpenMenu}
                    >
                        <span className="uppercase font-semibold text-sm text-slate-700 sm:text-base">
                            Menu
                        </span>
                        <IoIosArrowDown
                            className={`fill-secondary text-[15px] sm:text-[20px] transition-[0.33s] ${
                                showMenu && "rotate-180"
                            }`}
                        />
                    </button>
                    <div
                        className={`bg-white absolute right-0 w-[150%] sm:w-full mt-1 rounded-xl shadow z-50 h-[0px] overflow-hidden transition-[0.33s] ${
                            showMenu && "h-[216px] block py-3"
                        }`}
                    >
                        <ul className="w-full">
                            {navMenuLinks.map((navitem, i) => (
                                <NavMenuItem
                                    href={navitem.link}
                                    title={navitem.title}
                                    key={i}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hidden justify-end items-center md:flex md:col-span-2">
                <button className="bg-secondary rounded-full p-2">
                    <AiOutlineUser color="#ffffff" size={25} />
                </button>
            </div>
        </nav>
    );
}
