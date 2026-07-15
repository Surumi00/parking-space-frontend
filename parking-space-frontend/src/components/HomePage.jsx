import React from 'react'
import NavigationBar from './NavigationBar'

const Homepage = () => {
    return (
        <div>
            <NavigationBar />
            <div
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Arial, sans-serif",
                    color: "white",
                    padding: "20px"
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        background: "rgba(255,255,255,0.12)",
                        backdropFilter: "blur(10px)",
                        padding: "50px",
                        borderRadius: "20px",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
                        width: "80%",
                        maxWidth: "800px"
                    }}
                >
                    <h1
                        style={{
                            fontSize: "48px",
                            marginBottom: "20px",
                            color: "#FFD700"
                        }}
                    >
                        🚗 Smart Parking Management System
                    </h1>

                    <p
                        style={{
                            fontSize: "20px",
                            lineHeight: "1.8",
                            marginBottom: "30px",
                            color: "#f1f5f9"
                        }}
                    >
                        Welcome to the Smart Parking Management System.
                        Manage parking slots, vehicles, bookings, payments,
                        and offers efficiently with a modern and user-friendly interface.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                            flexWrap: "wrap"
                        }}
                    >
                       

                        
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: "50px",
                            flexWrap: "wrap",
                            gap: "20px"
                        }}
                    >
                        <div>
                            <h2 style={{ color: "#38bdf8" }}>500+</h2>
                            <p>Parking Slots</p>
                        </div>

                        <div>
                            <h2 style={{ color: "#4ade80" }}>1000+</h2>
                            <p>Registered Users</p>
                        </div>

                        <div>
                            <h2 style={{ color: "#facc15" }}>24/7</h2>
                            <p>Availability</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage


