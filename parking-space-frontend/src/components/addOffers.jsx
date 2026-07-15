import React, { useState } from 'react'
import axios from 'axios'

const AddOffers = () => {

    const [input, changeInput] = useState({

        offer_id: "",
        offer_code: "",
        offer_name: "",
        offer_description: "",
        discount_percentage: "",
        maximum_discount_amount: "",
        minimum_parking_fee_required: "",
        valid_from: "",
        valid_until: "",
        applicable_vehicle_type: "",
        offer_status: "",
        terms_and_conditions: ""

    })

    const inputHandler = (event) => {

        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })

    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:3000/add-offer", input).then(

            (response) => {

                console.log(response.data)
                alert("Offer Added Successfully")

            }

        ).catch(

            (error) => {

                console.log(error)
                alert("Failed to Add Offer")

            }

        )

    }

    return (

        <div>


            <div className="container">

                <div className="row">

                    <div className="col col-12">

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">Offer ID</label>
                                <input type="text" className="form-control"
                                    name="offer_id"
                                    value={input.offer_id}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Offer Code</label>
                                <input type="text" className="form-control"
                                    name="offer_code"
                                    value={input.offer_code}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Offer Name</label>
                                <input type="text" className="form-control"
                                    name="offer_name"
                                    value={input.offer_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Offer Description</label>
                                <textarea
                                    className="form-control"
                                    name="offer_description"
                                    value={input.offer_description}
                                    onChange={inputHandler}
                                ></textarea>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Discount Percentage</label>
                                <input type="number"
                                    className="form-control"
                                    name="discount_percentage"
                                    value={input.discount_percentage}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Maximum Discount Amount</label>
                                <input type="number"
                                    className="form-control"
                                    name="maximum_discount_amount"
                                    value={input.maximum_discount_amount}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Minimum Parking Fee Required</label>
                                <input type="number"
                                    className="form-control"
                                    name="minimum_parking_fee_required"
                                    value={input.minimum_parking_fee_required}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Valid From</label>
                                <input type="date"
                                    className="form-control"
                                    name="valid_from"
                                    value={input.valid_from}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Valid Until</label>
                                <input type="date"
                                    className="form-control"
                                    name="valid_until"
                                    value={input.valid_until}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Applicable Vehicle Type</label>

                                <select
                                    className="form-select"
                                    name="applicable_vehicle_type"
                                    value={input.applicable_vehicle_type}
                                    onChange={inputHandler}
                                >

                                    <option value="">Select</option>
                                    <option value="Bike">Bike</option>
                                    <option value="Car">Car</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Truck">Truck</option>

                                </select>

                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Offer Status</label>

                                <select
                                    className="form-select"
                                    name="offer_status"
                                    value={input.offer_status}
                                    onChange={inputHandler}
                                >

                                    <option value="">Select</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>

                                </select>

                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Terms & Conditions</label>

                                <textarea
                                    className="form-control"
                                    name="terms_and_conditions"
                                    value={input.terms_and_conditions}
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

export default AddOffers