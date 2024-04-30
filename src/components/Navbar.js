import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    useEffect(() => {
        const showMenu = (toggleId, navId) => {
            const toggle = document.getElementById(toggleId),
                nav = document.getElementById(navId);

            toggle.addEventListener('click', () => {
                nav.classList.toggle('show-menu');
                toggle.classList.toggle('show-icon');
            });
        };

        showMenu('nav-toggle', 'nav-menu');

        return () => {
            const toggle = document.getElementById('nav-toggle');
            toggle.removeEventListener('click', () => {});
        };
    }, []);

    return (
        <div>
            <header className="header">
                <nav className="nav container">
                    <div className="nav__data">
                        <img src="./img/logo-small.svg" alt="logo-small"></img>
                        <Link to="/">Scanique</Link>

                        <div className="nav__toggle" id="nav-toggle">
                            <i className="ri-equal-line nav__burger"></i>
                            <i className="ri-close-line nav__close"></i>
                        </div>
                    </div>
                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li>
                                <Link to="/Page404" className="nav__link">
                                    價格方案
                                </Link>
                            </li>
                            <li>
                                <Link to="/Page404" className="nav__link">
                                    解決方案
                                </Link>
                            </li>
                            <li>
                                <Link to="/Page404" className="nav__link">
                                    常見問題
                                </Link>
                            </li>
                            <div className="nav-menu-2">
                                <li>
                                    <Link to="/Contact" className="nav__link">
                                        聯繫銷售人員
                                    </Link>
                                </li>
                                <Link to="/Login">
                                    <button>login</button>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;


