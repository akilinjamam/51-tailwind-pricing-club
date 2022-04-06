import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const routs = [
        { id: 1, name: 'home', link: '/ home' },
        { id: 2, name: 'shop', link: '/shop' },
        { id: 3, name: 'contact', link: '/contact' },
        { id: 4, name: 'about', link: '/about' },
    ]
    return (
        <nav className='bg-indigo-200'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center md:static bg-indigo-200 w-full absolute duration-500 ease-in ${open ? 'top-6' : 'top-[-170px]'}  `} >

                {
                    routs.map(rout => <Link key={rout.id} name={rout.name} link={rout.link} rout={rout}></Link>)
                }

            </ul>
        </nav>
    );
};

export default Navbar;