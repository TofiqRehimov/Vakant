import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";
import { AiFillBell } from "react-icons/ai";
import { FaBell, FaUser, FaUserAlt, FaBars } from "react-icons/fa";
import { Confirm } from 'react-st-modal';
import Login from '../Login/Login';
import Modals from '../Modals/Modals';
import Search from '../Search/Search';
const Header = () => {

    const LoginHandler = () => {

        const result = Confirm(<Login />,
            'Daxil olun');

        if (result) {
            // Сonfirmation confirmed
        } else {
            // Сonfirmation not confirmed

        }
    }

    return (
        <div className='container' >

            <nav className="navbar navbar-expand-lg navbar-light bg-light mt-5">

                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FaBars />
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <a className="navbar-brand mt-2 mt-lg-0" href="#">
                            {/* <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
                /> */}
                        </a>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/CVCommon" className="nav-link">Cv-ler</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/User" className="nav-link">Haqqimizda</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">Saytda reklam</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Elaqe  </a>
                            </li>
                        </ul>

                    </div>
                    <form className="d-flex input-group w-auto ">
                        <input
                            type="search"
                            className="form-control rounded"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search"></i>
                        </span>
                    </form>
                    <div className="d-flex align-items-center">

                        {/* <a className="text-reset me-3" href="#">
                            <i className="fas fa-shopping-cart"></i>
                        </a> */}


                        {/* <div className="dropdown">
                            <a
                                className="text-reset me-3 dropdown-toggle hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <FaBell />
                                <span className="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">Some news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Another news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </div> */}

                        <div className="dropdown">
                            <a
                                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <FaUserAlt onClick={LoginHandler} />
                                {/* <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"

          /> */}


                            </a>
                            {/* <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul> */}
                        </div>

                    </div>
                    {/* <!-- Right elements --> */}
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
        </div>
    );
};

export default Header;