import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark sticky-top"
            style={{
                background: "rgba(15, 23, 42, 0.85)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
            }}
        >
            <div className="container">

                <Link
                    className="navbar-brand fw-bold fs-4"
                    to="/"
                    style={{ color: "#FFD700" }}
                >
                    🚗 Smart Parking
                </Link>

                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        <li className="nav-item mx-2">
                            <Link className="nav-link text-white fw-semibold" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item dropdown mx-2">
                            <a
                                className="nav-link dropdown-toggle text-white fw-semibold"
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
                                        View Vehicles
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown mx-2">
                            <a
                                className="nav-link dropdown-toggle text-white fw-semibold"
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

                        <li className="nav-item dropdown mx-2">
                            <a
                                className="nav-link dropdown-toggle text-white fw-semibold"
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
                                        View Offers
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavigationBar