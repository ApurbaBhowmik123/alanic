import React from 'react'
import '../css/navbar.css';
import { Search } from 'lucide-react';
import { Mail } from 'lucide-react';
import icon from '../assets/image 6.png'
const Navbar = () => {
    return (
        <div>
            <div className="bg-black h-20 text-white">
                <div className="flex justify-evenly flex-wrap">
                    <div className="mt-7 mr-96">
                        <div className="flex">
                            <div className="navbar-search">
                                <input className="mr-96 w-3/5 bg-transparent border-b-2" type="search" placeholder="Search Products.." />
                            </div>
                            <div className="search-icon">
                                <p> <Search /></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <button className="navbar-button-1">Distributer</button>
                        <button className="navbar-button-2">Catalogue</button>

                    </div>
                    <p className="flex mt-8 navbar-mail">
                        <span>   <Mail /></span>Email Us
                    </p>
                </div>
            </div>
            <div className="bg-white h-20 navbar-navbar">
                <div className="flex justify-evenly">
                    <div className="navbar-icon mt-7">
                        <p><img src={icon} /></p>
                    </div>
                    <div className="flex gap-6 mt-7 navbar-menu">
                        <p>Home</p>
                        <p>About</p>
                        <p>Products</p>
                        <p>Become a Distributor</p>
                        <p>Private Label</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar