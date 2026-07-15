import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';
import Search from './Search';

const ViewVehicle = () => {

    const [vehicleData, changeDate] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeSearchTerm, setActiveSearchTerm] = useState('');

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
    const handleSearch = () => {
        setActiveSearchTerm(searchTerm.trim().toLowerCase());
    };

    const filteredVehicles = vehicleData.filter((value) => {
        const term = activeSearchTerm;
        if (!term) {
            return true;
        }

        return (
            value.vehicleId?.toString().toLowerCase().includes(term) ||
            value.ownerName?.toLowerCase().includes(term) ||
            value.vehicleNumber?.toLowerCase().includes(term) ||
            value.vehicleModel?.toLowerCase().includes(term) ||
            value.vehicleBrand?.toLowerCase().includes(term) ||
            value.vehicleType?.toLowerCase().includes(term) ||
            value.vehicleColor?.toLowerCase().includes(term) ||
            value.registrationDate?.toLowerCase().includes(term) ||
            value.ownerContactNumber?.toLowerCase().includes(term) ||
            value.ownerEmail?.toLowerCase().includes(term) ||
            value.parkingPassType?.toLowerCase().includes(term) ||
            value.address?.toLowerCase().includes(term)
        );
    });

    return (
        <div>
            <NavigationBar />
            <div className="container-fluid mt-5 px-4">
                <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
                    <div className="card-body p-0">
                        <div className="p-3 border-bottom">
                            <Search
                                searchTerm={searchTerm}
                                onSearchChange={setSearchTerm}
                                onSearch={handleSearch}
                                placeholder="Search by owner, vehicle number, model, or email"
                            />
                        </div>
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
                                {filteredVehicles.map((value, index) => (
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