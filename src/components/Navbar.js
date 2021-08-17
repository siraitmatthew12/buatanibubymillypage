import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="App.js"><Link to="/Home" className="navbar-logo" onClick={closeMobileMenu}>
                        Buatan Ibu by Milly 
                    </Link></a>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active':'nav-menu'} id='horizontal-list'>
                        <li className="nav-item">
                            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Catalog' className='nav-links' onClick={closeMobileMenu}>
                                Catalog
                            </Link>
                        </li>
                            <a href="Contact"><li className="nav-item"><Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact 
                            </Link>
                        </li></a>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar