import React from 'react';

import { IoIosVideocam } from 'react-icons/io';
import { IoIosCall } from 'react-icons/io';
import { AiOutlineInfo } from 'react-icons/ai';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const PNav = () => {
    return (
        <div className='lg:bg-base-200 shadow-lg sticky top-0'>
            <div className="navbar">
                <div className="flex justify-center items-center place-items-center px-2">
                    <div className="">
                        <Link to='/'>
                            <button><BiLeftArrowAlt className='text-2xl text-extrabold text-fuchsia-700'></BiLeftArrowAlt></button>
                        </Link>
                    </div>
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img alt='profile' src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <p className="normal-case text-xs font-bold">Rahim khan</p>
                </div>
                <div className="flex">
                    <div className='mx-2 rounded-full w-10 h-10 place-items-center flex flex-col justify-center items-center'>
                        <button><IoIosCall className='block text-fuchsia-600 text-2xl font-extrabold w-5 h-5'></IoIosCall></button>
                    </div>
                    <div className='mx-2 rounded-full w-10 h-10 place-items-center flex flex-col justify-center items-center'>
                        <button><IoIosVideocam className='block text-fuchsia-600 text-2xl font-extrabold w-5 h-5'></IoIosVideocam></button>
                    </div>
                    <div className='mx-2 bg-fuchsia-600 rounded-full w-5 h-5 place-items-center flex flex-col justify-center items-center'>
                        <button><AiOutlineInfo className='block text-white text-bold'></AiOutlineInfo></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PNav;