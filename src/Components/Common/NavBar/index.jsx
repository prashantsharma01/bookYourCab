import React from 'react'
import { LogoImage, Navbar } from './NavBarStyle'
import Logo from '../../../assets/BookYourCAB.png'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <React.Fragment>
            <Navbar>
                <Link to={'/'}>
                    <LogoImage src={Logo} alt='Logo' />
                </Link>
            </Navbar>
        </React.Fragment>
    )
}

export default NavBar