import React from 'react';
import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div data-theme='light'>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;