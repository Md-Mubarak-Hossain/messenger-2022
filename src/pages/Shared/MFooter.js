import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillChatFill } from 'react-icons/bs';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FcVideoCall } from 'react-icons/fc';
import { MdWebStories } from 'react-icons/md';
const MFooter = () => {
    return (
        <div className='navbar place-items-center flex  px-5 lg:justify-between bottom-0 fixed bg-white'>
            <Link className="btn btn-ghost normal-case text-xs flex flex-col"><BsFillChatFill className='text-fuchsia-700'></BsFillChatFill>Chats</Link>
            <Link className="btn btn-ghost normal-case text-xs flex flex-col"><FcVideoCall className='text-fuchsia-700'></FcVideoCall>Calls</Link>
            <Link className="btn btn-ghost normal-case text-xs flex flex-col"><BsFillPeopleFill className='text-fuchsia-700'></BsFillPeopleFill>People</Link>
            <Link className="btn btn-ghost normal-case text-xs flex flex-col"><MdWebStories className='text-fuchsia-700'></MdWebStories>Stories</Link>
        </div>
    );
};

export default MFooter;