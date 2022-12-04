import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillChatFill } from 'react-icons/bs';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FcVideoCall } from 'react-icons/fc';
import { MdWebStories } from 'react-icons/md';
const Footer = () => {
    return (
        <div className='fixed  bg-white'>
            <div className="navbar  place-items-start px-7 lg:justify-between ">
                <Link className="btn btn-ghost normal-case text-xs flex flex-col"><BsFillChatFill></BsFillChatFill>Chats</Link>
                <Link className="btn btn-ghost normal-case text-xs flex flex-col"><FcVideoCall></FcVideoCall>Calls</Link>
                <Link className="btn btn-ghost normal-case text-xs flex flex-col"><BsFillPeopleFill></BsFillPeopleFill>People</Link>
                <Link className="btn btn-ghost normal-case text-xs flex flex-col"><MdWebStories></MdWebStories>Stories</Link>
            </div>
        </div>
    );
};

export default Footer;