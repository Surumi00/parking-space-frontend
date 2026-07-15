import React from 'react'

const HomePage = () => {
    return (

        <div
            className="container-fluid text-white"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #11998e, #38ef7d)",
            }}
        >
            <div className="container py-5">
                <div className="row align-items-center">

                    {/* Left Side */}
                    <div className="col-lg-6">
                        <h1 className="display-3 fw-bold">
                            Supermarket Management System
                        </h1>

                        <p className="lead mt-4">
                            Manage your supermarket efficiently with inventory tracking,
                            billing, customer management, employee records, and sales reports
                            in one place.
                        </p>




                    </div>

                    {/* Right Side */}
                    <div className="col-lg-6 text-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3082/3082037.png"
                            alt="Supermarket"
                            className="img-fluid"
                            style={{ maxHeight: "400px" }}
                        />
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="row mt-5 g-4">

                    <div className="col-md-3">
                        <div className="card shadow-lg border-0 text-center p-4 h-100">
                            <h1>📦</h1>
                            <h4>Inventory</h4>
                            <p>Track stock levels and product availability.</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card shadow-lg border-0 text-center p-4 h-100">
                            <h1>💳</h1>
                            <h4>Billing</h4>
                            <p>Fast and secure billing with invoice generation.</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card shadow-lg border-0 text-center p-4 h-100">
                            <h1>👥</h1>
                            <h4>Customers</h4>
                            <p>Maintain customer details and purchase history.</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card shadow-lg border-0 text-center p-4 h-100">
                            <h1>📈</h1>
                            <h4>OFFERS</h4>
                            <p>View all offers.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default HomePage