import React from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import P2pLayout from '../layouts/P2pLayout';
import GroupDashboard from '../pages/Group/GroupDashboard';
import Home from '../pages/Home/Home';
import PHome from '../pages/P2P/PHome';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                }
            ]
        },
        {
            path: '/p',
            element: <P2pLayout></P2pLayout>,
            children: [
                {
                    path: '/p',
                    element: <PHome></PHome>
                }
            ]
        },
        {
            path: '/*',
            element: <div>Page is not fount <Link to='/'>Return Home</Link></div>
        },
    ])
    return (
        <RouterProvider router={router}>
        </RouterProvider >
    );
};

export default Routes;