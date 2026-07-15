import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ViewVehicle = () => {

    const [vehicleData, changeDate] = useState([]);

    const fetchData = () => {
        axios.post("http://localhost:3000/view-vehicles", vehicleData).then(
            (response) => {
                changeDate(response.data)
            }).catch(
                (err) => {
                    console.error("Error fetching entries: ", err)
                }
            )
    }

    useEffect(
        () => {
            fetchData();
        }, []
    )
    return (
        <div>

            <div className="container-fluid mt-5 px-4">
                <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
                    <div className="card-body p-0">
                        <table className="table table-hover align-middle text-center mb-0 w-100">
                            <thead className="table-primary">
                                <tr>
                                    <th>Vehicle ID</th>
                                    <th>Owner Name</th>
                                    <th>Vehicle Number</th>
                                    <th>Model</th>
                                    <th>Brand</th>
                                    <th>Type</th>
                                    <th>Color</th>
                                    <th>Registration Date</th>
                                    <th>Contact Number</th>
                                    <th>Email</th>
                                    <th>Pass Type</th>
                                    <th>Address</th>
                                </tr>
                            </thead>

                            <tbody>
                                {vehicleData.map((value, index) => (
                                    <tr key={index}>
                                        <td className="fw-semibold">{value.vehicleId}</td>
                                        <td>{value.ownerName}</td>
                                        <td>{value.vehicleNumber}</td>
                                        <td>{value.vehicleModel}</td>
                                        <td>{value.vehicleBrand}</td>
                                        <td>{value.vehicleType}</td>
                                        <td>{value.vehicleColor}</td>
                                        <td>{value.registrationDate}</td>
                                        <td>{value.ownerContactNumber}</td>
                                        <td>{value.ownerEmail}</td>
                                        <td>{value.parkingPassType}</td>
                                        <td>{value.address}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewVehicle