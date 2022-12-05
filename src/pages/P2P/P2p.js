import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';
const P2p = () => {
    const { user } = useContext(AuthContext)
    const { isLoading, data: p2p } = useQuery({
        queryKey: ['p2p'],
        queryFn: () =>
            fetch('https://messenger-server.vercel.app/p2p').then(res =>
                res.json()
            )
    })

    if (isLoading) return 'Loading...'
    return (
        <div className='w-full px-4 pt-3 overflow-y-scroll h-screen'>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-5 rounded-full">
                        <img alt='chat' src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble bg-base-200 text-black">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-5 rounded-full">
                        <img alt='profile' src={user.photoURL} />
                    </div>
                </div>
                <div className="chat-header">
                    {user.displayName}
                    <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble bg-blue-600">I hate you!</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-5 rounded-full">
                        <img alt='chat' src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble bg-base-200 text-black">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-5 rounded-full">
                        <img alt='chat' src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble bg-blue-600">I hate you!</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-5 rounded-full">
                        <img alt='chat' src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble bg-base-200 text-black">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-5 rounded-full">
                        <img alt='profile' src={user.photoURL} />
                    </div>
                </div>
                <div className="chat-header">
                    {user.displayName}
                    <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble bg-blue-600">I hate you!</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-5 rounded-full">
                        <img alt='chat' src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble bg-base-200 text-black">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-5 rounded-full">
                        <img alt='profile' src={user.photoURL} />
                    </div>
                </div>
                <div className="chat-header">
                    {user.displayName}
                    <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble bg-blue-600">I hate you!</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-5 rounded-full">
                        <img alt='chat' src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble bg-base-200 text-black">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-5 rounded-full">
                        <img alt='profile' src={user.photoURL} />
                    </div>
                </div>
                <div className="chat-header">
                    {user.displayName}
                    <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble bg-blue-600">I hate you!</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-5 rounded-full">
                        <img alt='chat' src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble bg-base-200 text-black">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-5 rounded-full">
                        <img alt='profile' src={user.photoURL} />
                    </div>
                </div>
                <div className="chat-header">
                    {user.displayName}
                    <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble bg-blue-600">I hate you!</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
        </div>
    );
};

export default P2p;