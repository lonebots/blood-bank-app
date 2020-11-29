import React from 'react'
import {Link} from 'react-router-dom'

import userLogin

import '../../assets/navbar/Navbar.css'

const Navbar=()=>{
return(
    <nav className="nav.nav-wrapper grey darken -3">
        <div className="container">
            <Link to ="/" className="bbms">
                BBMS
            </Link>
        </div>
    </nav>
)
}

export default Navbar;