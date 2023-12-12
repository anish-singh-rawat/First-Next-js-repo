import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='nav-box mt-3'>
                <Link href={'/'}> <div className='home'>Home</div> </Link>
                <Link href={'/about'}><div className='about'>About</div> </Link>
                <Link href={'/blog'}><div className='blog'>Blog</div> </Link>
                <Link href={'/contact'}><div className='contact'>contact</div> </Link>
            </div>
        </>
    )
}

export default Navbar