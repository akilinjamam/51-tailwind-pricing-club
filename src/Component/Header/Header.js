import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-6xl">this is header with tailwind</h2>
        </div>
    );
};

export default Header;