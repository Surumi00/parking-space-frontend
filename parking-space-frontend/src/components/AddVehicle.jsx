import React, { useState } from 'react'
import axios from 'axios'

const AddVehicle = () => {

    const [input, changeInput] = useState(
        {
            "vehicleId": "",
            "ownerName": "",
            "vehicleNumber": "",
            "vehicleModel": "",
            "vehicleBrand": "",
            "vehicleType": "",
            "vehicleColor": "",
            "registrationDate": "",
            "ownerContactNumber": "",
            "ownerEmail": "",
            "parkingPassType": "",
            "address": ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3000/add-vehicle", input).then(

            (response) => {
                console.log(response.data)
                alert("Vehicle added successfully!")
            }

        ).catch(
            (err) => (
                console.error("Error Adding Vehicle", err)
            )
        )
    }

    return (
        <div>

            <div className="container mt-4">
                <h2 className="text-center mb-4">Vehicle Registration</h2>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Vehicle ID</label>
                        <input
                            type="text"
                            className="form-control"
                            name="vehicleId"
                            value={input.vehicleId}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Owner Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="ownerName"
                            value={input.ownerName}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Vehicle Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="vehicleNumber"
                            value={input.vehicleNumber}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Vehicle Model</label>
                        <input
                            type="text"
                            className="form-control"
                            name="vehicleModel"
                            value={input.vehicleModel}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Vehicle Brand</label>
                        <input
                            type="text"
                            className="form-control"
                            name="vehicleBrand"
                            value={input.vehicleBrand}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Vehicle Type</label>
                        <select
                            className="form-select"
                            name="vehicleType"
                            value={input.vehicleType}
                            onChange={inputHandler}
                        >
                            <option value="">Select Type</option>
                            <option value="EV">EV</option>
                            <option value="Car">Car</option>
                            <option value="Bike">Bike</option>
                            <option value="SUV">SUV</option>
                            <option value="Truck">Truck</option>
                        </select>
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Vehicle Color</label>
                        <input
                            type="text"
                            className="form-control"
                            name="vehicleColor"
                            value={input.vehicleColor}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Registration Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="registrationDate"
                            value={input.registrationDate}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Contact Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            name="ownerContactNumber"
                            value={input.ownerContactNumber}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Owner Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="ownerEmail"
                            value={input.ownerEmail}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Parking Pass Type</label>
                        <select
                            className="form-select"
                            name="parkingPassType"
                            value={input.parkingPassType}
                            onChange={inputHandler}
                        >
                            <option value="">Select Pass Type</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Address</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            name="address"
                            value={input.address}
                            onChange={inputHandler}
                        ></textarea>
                    </div>

                    <div className="col-12 text-center mt-3">
                        <button
                            className="btn btn-primary"
                            onClick={readValue}
                        >
                            Register Vehicle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddVehicle