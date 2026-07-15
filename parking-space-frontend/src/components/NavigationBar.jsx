import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    <Link className="navbar-brand fw-bold" to="/">
                        Parking<span className="text-warning">Space</span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>

                            {/* Vehicle */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Vehicle
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/add-vehicle">
                                            Add Vehicle
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/view-vehicle">
                                            View Vehicle
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Parking */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Parking
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/add-parking">
                                            Add Parking
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/view-parking">
                                            View Parking
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Offers */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Offers
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/add-offer">
                                            Add Offer
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/view-offer">
                                            View Offer
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar