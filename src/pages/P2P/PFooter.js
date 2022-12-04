import React from 'react';
import { Link } from 'react-router-dom';
import { MdSettingsVoice } from 'react-icons/md';
import { FaCamera } from 'react-icons/fa';
import { RiImageFill } from 'react-icons/ri';
import { IoMdSend } from 'react-icons/io';

const PFooter = () => {
    return (
        <div className='navbar place-items-center flex  px-5 lg:justify-between bottom-0 fixed bg-white'>
            <Link className="btn btn-ghost normal-case text-xs flex flex-col"><FaCamera></FaCamera></Link>
            <Link className="btn btn-ghost normal-case text-xs flex flex-col"><RiImageFill></RiImageFill></Link>
            <Link className="btn btn-ghost normal-case text-xs flex flex-col"><MdSettingsVoice></MdSettingsVoice></Link>
            <input type="text" placeholder='Type Here' className="input bg-base-200 rounded-3xl w-full h-7 " />
            <button><IoMdSend className='text-blue-700 h-10 w-full'></IoMdSend></button>
        </div>
    );
};

export default PFooter;