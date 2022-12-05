import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Nav/Navbar';
import Sidebar from './Sidebar';

const Home = () => {
    const { isLoading, data: p2p } = useQuery({
        queryKey: ['p2p'],
        queryFn: () =>
            fetch('https://messenger-server.vercel.app/p2p').then(res =>
                res.json()
            )
    })

    if (isLoading) return 'Loading...'
    return (
        <>
            <Navbar></Navbar>
            <div className='w-full h-screen'>
                <div className="drawer drawer-mobile" >
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle w-0 h-0"
                    />
                    <div className="relative drawer-content flex flex-col items-center justify-center mx-5">
                        <div className='absolute mt-0 pt-0 top-0 w-full'>
                            {/* .......search start...... */}
                            <div className='flex flex-col justify-center items-center place-items-center h-10 mt-5'>
                                <input type="text" placeholder='search' className="input bg-base-200 rounded-3xl w-full lg:w-1/2" />
                            </div>
                            {/* .......search end...... */}

                            {/* .......Active Profile end...... */}
                            <div className='flex overflow-y-scroll justify-center items-center place-items-center'>
                                <div className="avatar online flex flex-col justify-center items-center place-items-center text-xs m-5">
                                    <div className="w-10 h-10 rounded-full">
                                        <img alt='profile' src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p>Demo Name</p>
                                </div>
                                <div className="avatar online flex flex-col justify-center items-center place-items-center text-xs m-5">
                                    <div className="w-10 h-10 rounded-full">
                                        <img alt='profile' src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p>Demo Name</p>
                                </div>
                                <div className="avatar online flex flex-col justify-center items-center place-items-center text-xs m-5">
                                    <div className="w-10 h-10 rounded-full">
                                        <img alt='profile' src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p>Demo Name</p>
                                </div>
                                <div className="avatar online flex flex-col justify-center items-center place-items-center text-xs m-5">
                                    <div className="w-10 h-10 rounded-full">
                                        <img alt='profile' src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p>Demo Name</p>
                                </div>
                                <div className="avatar online flex flex-col justify-center items-center place-items-center text-xs m-5">
                                    <div className="w-10 h-10 rounded-full">
                                        <img alt='profile' src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p>Demo Name</p>
                                </div>
                                <div className="avatar online flex flex-col justify-center items-center place-items-center text-xs m-5">
                                    <div className="w-10 h-10 rounded-full">
                                        <img alt='profile' src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p>Demo Name</p>
                                </div>
                                <div className="avatar online flex flex-col justify-center items-center place-items-center text-xs m-5">
                                    <div className="w-10 h-10 rounded-full">
                                        <img alt='profile' src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p>Demo Name</p>
                                </div>
                                <div className="avatar online flex flex-col justify-center items-center place-items-center text-xs m-5">
                                    <div className="w-10 h-10 rounded-full">
                                        <img alt='profile' src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p>Demo Name</p>
                                </div>
                                <div className="avatar online flex flex-col justify-center items-center place-items-center text-xs m-5">
                                    <div className="w-10 h-10 rounded-full">
                                        <img alt='profile' src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p>Demo Name</p>
                                </div>
                                <div className="avatar online flex flex-col justify-center items-center place-items-center text-xs m-5">
                                    <div className="w-10 h-10 rounded-full">
                                        <img alt='profile' src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p>Demo Name</p>
                                </div>
                                <div className="avatar online flex flex-col justify-center items-center place-items-center text-xs m-5">
                                    <div className="w-10 h-10 rounded-full">
                                        <img alt='profile' src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p>Demo Name</p>
                                </div>
                                <div className="avatar online flex flex-col justify-center items-center place-items-center text-xs m-5">
                                    <div className="w-10 h-10 rounded-full">
                                        <img alt='profile' src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p>Demo Name</p>
                                </div>

                                {/* <div className="avatar offline">
                    <div className="w-10 rounded-full">
                        <img alt='profile' src="https://placeimg.com/192/192/people" />
                    </div>
                </div> */}
                            </div>
                            {/* .......Active Profile end...... */}

                            {/* ....... Chat Profile Start...... */}
                            <div className='flex flex-col justify-start  place-items-start w-full overflow-y-scroll h-96'>
                                <div className='flex justify-start place-items-center text-xs'>
                                    <div className="avatar online m-5">
                                        <div className="w-10 h-10 rounded-full mx-2">
                                            <img alt='profile' src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <Link to='/p'><p className='mx-2 text-blue-700 online'>Demo Name</p></Link>
                                    <p>12:45</p>
                                </div>
                                <div className='flex justify-start place-items-center text-xs'>
                                    <div className="avatar online m-5">
                                        <div className="w-10 h-10 rounded-full mx-2">
                                            <img alt='profile' src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <Link to='/p'><p className='mx-2 text-blue-700 online'>Demo Name</p></Link>
                                    <p>12:45</p>
                                </div>
                                <div className='flex justify-start place-items-center text-xs'>
                                    <div className="avatar online m-5">
                                        <div className="w-10 h-10 rounded-full mx-2">
                                            <img alt='profile' src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <Link to='/p'><p className='mx-2 text-blue-700 online'>Demo Name</p></Link>
                                    <p>12:45</p>
                                </div>
                                <div className='flex justify-start place-items-center text-xs'>
                                    <div className="avatar online m-5">
                                        <div className="w-10 h-10 rounded-full mx-2">
                                            <img alt='profile' src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <Link to='/p'><p className='mx-2 text-blue-700 online'>Demo Name</p></Link>
                                    <p>12:45</p>
                                </div>
                                <div className='flex justify-start place-items-center text-xs'>
                                    <div className="avatar online m-5">
                                        <div className="w-10 h-10 rounded-full mx-2">
                                            <img alt='profile' src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <Link to='/p'><p className='mx-2 text-blue-700 online'>Demo Name</p></Link>
                                    <p>12:45</p>
                                </div>
                                <div className='flex justify-start place-items-center text-xs'>
                                    <div className="avatar online m-5">
                                        <div className="w-10 h-10 rounded-full mx-2">
                                            <img alt='profile' src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <Link to='/p'><p className='mx-2 text-blue-700 online'>Demo Name</p></Link>
                                    <p>12:45</p>
                                </div >
                                <div className='flex justify-start place-items-center text-xs'>
                                    <div className="avatar online m-5">
                                        <div className="w-10 h-10 rounded-full mx-2">
                                            <img alt='profile' src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <Link to='/p'><p className='mx-2 text-blue-700 online'>Demo Name</p></Link>
                                    <p>12:45</p>
                                </div >
                                <div className='flex justify-start place-items-center text-xs'>
                                    <div className="avatar online m-5">
                                        <div className="w-10 h-10 rounded-full mx-2">
                                            <img alt='profile' src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <Link to='/p'><p className='mx-2 text-blue-700 online'>Demo Name</p></Link>
                                    <p>12:45</p>
                                </div >
                                <div className='flex justify-start place-items-center text-xs'>
                                    <div className="avatar online m-5">
                                        <div className="w-10 h-10 rounded-full mx-2">
                                            <img alt='profile' src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <Link to='/p'><p className='mx-2 text-blue-700 online'>Demo Name</p></Link>
                                    <p>12:45</p>
                                </div >
                                <div className='flex justify-start place-items-center text-xs'>
                                    <div className="avatar online m-5">
                                        <div className="w-10 h-10 rounded-full mx-2">
                                            <img alt='profile' src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <Link to='/p'><p className='mx-2 text-blue-700 online'>Demo Name</p></Link>
                                    <p>12:45</p>
                                </div >


                                {/* <div className="avatar offline">
                    <div className="w-10 rounded-full">
                        <img alt='profile' src="https://placeimg.com/192/192/people" />
                            </div>
                        </div> */}
                            </div >
                            {/* .......Chat Profile end...... */}

                        </div >

                    </div >
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay text-justify place-items-start"></label>
                        <Sidebar></Sidebar>
                    </div>
                </div>
                <Footer></Footer>
            </div>


        </>
    );
};

export default Home;