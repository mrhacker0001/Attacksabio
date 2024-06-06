import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../assets/sabio-logo-for-dark-wt-com.png"
import img from "../assets/flag.png"
import logo1 from "../assets/symbol.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className='Navbar'>
                <img src={logo} alt="..." />

                <div className="triple-card">
                    <select>
                        <option value="EN"><img src={img} alt="..." />ENG</option>
                        <option value="RU">RUS</option>
                        <option value="UZ">UZB</option>
                    </select>
                    <button>Log in</button>
                    <button>Get funded</button>
                </div>
            </div>

            <div className="Navbar-media">
                <img src={logo1} alt="" />

                <div className="btns">
                    <button>Get funded</button>
                    <button className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
                        <FontAwesomeIcon icon={showMenu ? faTimes : faBars} className='icon' />
                    </button>

                    <div className={`mobile-menu ${showMenu ? 'open' : ''}`}>

                    </div>
                </div>


            </div>
        </>

    )
}

export default Navbar