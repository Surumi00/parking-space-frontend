import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const InsertParkingSpace = () => {

    const [input, changeInput] = useState({

        parking_id: "",
        slot_number: "",
        parking_zone_level: "",
        floor_number: "",
        vehicle_type_supported: "",
        hourly_parking_fee: "",
        availability_status: "",
        maximum_parking_duration: "",
        parking_area_name: "",
        cctv_available: "",
        reserved_slot: "",
        remarks: ""

    })

    const inputHandler = (event) => {

        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })

    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:3000/add-parking", input).then(

            (response) => {

                console.log(response.data)
                alert("Parking Space Added Successfully")

            }

        ).catch(

            (error) => {

                console.log(error)
                alert("Failed to Add Parking Space")

            }

        )

    }

    return (

        <div>

            <NavigationBar />

            <div className="container">

                <div className="row">

                    <div className="col col-12">

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">Parking ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="parking_id"
                                    value={input.parking_id}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Slot Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="slot_number"
                                    value={input.slot_number}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Parking Zone / Level</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="parking_zone_level"
                                    value={input.parking_zone_level}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Floor Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="floor_number"
                                    value={input.floor_number}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Vehicle Type Supported</label>

                                <select
                                    className="form-select"
                                    name="vehicle_type_supported"
                                    value={input.vehicle_type_supported}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select</option>
                                    <option value="Car">Car</option>
                                    <option value="Bike">Bike</option>
                                    <option value="EV">EV</option>
                                </select>

                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Hourly Parking Fee</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="hourly_parking_fee"
                                    value={input.hourly_parking_fee}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Availability Status</label>

                                <select
                                    className="form-select"
                                    name="availability_status"
                                    value={input.availability_status}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select</option>
                                    <option value="Available">Available</option>
                                    <option value="Occupied">Occupied</option>
                                </select>

                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Maximum Parking Duration</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="maximum_parking_duration"
                                    value={input.maximum_parking_duration}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Parking Area Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="parking_area_name"
                                    value={input.parking_area_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">CCTV Available</label>

                                <select
                                    className="form-select"
                                    name="cctv_available"
                                    value={input.cctv_available}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>

                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Reserved Slot</label>

                                <select
                                    className="form-select"
                                    name="reserved_slot"
                                    value={input.reserved_slot}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>

                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Remarks</label>

                                <textarea
                                    className="form-control"
                                    name="remarks"
                                    value={input.remarks}
                                    onChange={inputHandler}
                                ></textarea>

                            </div>

                            <div className="col-12">

                                <button
                                    className="btn btn-primary"
                                    onClick={readValue}
                                >
                                    Submit
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default InsertParkingSpace