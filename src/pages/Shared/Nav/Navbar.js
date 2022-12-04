import React from 'react';
import { Link } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className='lg:bg-base-200'>
            <div className="navbar">
                <div className="flex flex-col justify-center items-center bg-base-200 rounded-full h-10 w-10 place-items-center px-2">
                    <label htmlFor="my-drawer-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="flex-1 pl-3">
                    <Link className="normal-case text-2xl font-bold">Chats</Link>
                </div>
                <div className="flex">
                    <div className='mx-2 bg-base-200 rounded-full w-10 h-10 place-items-center flex flex-col justify-center items-center'>
                        <button><FaCamera></FaCamera></button>
                    </div>
                    <div className='mx-2 bg-base-200 rounded-full w-10 h-10 place-items-center flex flex-col justify-center items-center'>
                        <button><MdEdit className='block'></MdEdit></button>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Navbar;