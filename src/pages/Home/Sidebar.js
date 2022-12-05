import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsFillChatDotsFill, BsFillChatFill } from 'react-icons/bs';
import { IoIosArchive } from 'react-icons/io';
import { HiGift } from 'react-icons/hi';
import { AiOutlineLogout } from 'react-icons/ai';
import { AuthContext } from '../../Contexts/UserContext';

const Sidebar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    console.log(user.photoURL)
    const logout = () => {
        logOut()
            .then(() => {

            })
            .catch(err => console.error(err))
    }
    return (
        <>
            <ul className="menu p-4 w-full lg:w-72 bg-white lg:bg-base-200 text-base-content place-items-start">
                <div className='flex'>
                    <div className="avatar online">
                        <div className="w-8 rounded-full">
                            <img alt={user.displayName} src={`${user.photoURL}`} />
                        </div>
                    </div>
                    <p className='pl-2 online'>{user.displayName}</p>
                </div>
                <li className='w-full'> <Link className="btn btn-ghost normal-case text-xs flex justify-start"><BsFillChatFill></BsFillChatFill>Chats</Link></li>
                <li className='w-full'> <Link className="btn btn-ghost normal-case text-xs flex justify-start"><HiGift></HiGift>Marketplace</Link></li>
                <li className='w-full'> <Link className="btn btn-ghost normal-case text-xs flex justify-start"><BsFillChatDotsFill></BsFillChatDotsFill>Message requests</Link></li>
                <li className='w-full'> <Link className="btn btn-ghost normal-case text-xs flex justify-start"><IoIosArchive></IoIosArchive>Archive</Link></li>

                {/* .....Group start..... */}
                <p>Communities</p>
                <li className='w-full'> <Link className="btn btn-ghost normal-case text-xs flex justify-start">
                    <div className="avatar">
                        <div className="w-5 h-5 rounded">
                            <img alt='group' src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    Public Group of Bangladesh
                </Link>
                </li>
                <li className='w-full'> <Link className="btn btn-ghost normal-case text-xs flex justify-start"><div className="avatar">
                    <div className="w-5 h-5 rounded">
                        <img alt='group' src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                    Public Group of Bangladesh
                </Link>
                </li>
                <li className='w-full'> <Link className="btn btn-ghost normal-case text-xs flex justify-start"><div className="avatar">
                    <div className="w-5 h-5 rounded">
                        <img alt='group' src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                    Public Group of Bangladesh
                </Link>
                </li>
                <li className='w-full'> <Link className="btn btn-ghost normal-case text-xs flex justify-start"><div className="avatar">
                    <div className="w-5 h-5 rounded">
                        <img alt='group' src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                    Public Group of Bangladesh
                </Link>
                </li>
                {/* .....Group end..... */}

                {/* ...log out button..... */}
                <Link to='/'> <li><button onClick={() => logout()} className='active'><AiOutlineLogout></AiOutlineLogout></button></li></Link>
            </ul>
        </>
    );
};

export default Sidebar;