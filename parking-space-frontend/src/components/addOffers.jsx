import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NavigationBar from './NavigationBar'

const AddOffers = () => {

    const navigate = useNavigate()

    const [input, changeInput] = useState({

        offerId: "",
        offerCode: "",
        offerName: "",
        offerDescription: "",
        discountPercentage: "",
        maximumDiscountAmount: "",
        minimumParkingFeeRequired: "",
        validFrom: "",
        validUntil: "",
        applicableVehicleType: "",
        offerStatus: "",
        termsAndConditions: ""

    })

    const inputHandler = (event) => {

        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })

    }

    const readValue = () => {

        const payload = {
            ...input,
            offer_id: input.offerId,
            offer_code: input.offerCode,
            offer_name: input.offerName,
            offer_description: input.offerDescription,
            discount_percentage: input.discountPercentage,
            maximum_discount_amount: input.maximumDiscountAmount,
            minimum_parking_fee_required: input.minimumParkingFeeRequired,
            valid_from: input.validFrom,
            valid_until: input.validUntil,
            applicable_vehicle_type: input.applicableVehicleType,
            offer_status: input.offerStatus,
            terms_and_conditions: input.termsAndConditions
        }

        axios.post("http://localhost:3000/add-offer", payload).then(

            (response) => {

                console.log(response.data)
                alert("Offer Added Successfully")
                navigate('/view-offer')

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

            <NavigationBar />
            <div className="container">

                <div className="row">

                    <div className="col col-12">

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">Offer ID</label>
                                <input type="text" className="form-control"
                                    name="offerId"
                                    value={input.offerId}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Offer Code</label>
                                <input type="text" className="form-control"
                                    name="offerCode"
                                    value={input.offerCode}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Offer Name</label>
                                <input type="text" className="form-control"
                                    name="offerName"
                                    value={input.offerName}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Offer Description</label>
                                <textarea
                                    className="form-control"
                                    name="offerDescription"
                                    value={input.offerDescription}
                                    onChange={inputHandler}
                                ></textarea>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Discount Percentage</label>
                                <input type="number"
                                    className="form-control"
                                    name="discountPercentage"
                                    value={input.discountPercentage}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Maximum Discount Amount</label>
                                <input type="number"
                                    className="form-control"
                                    name="maximumDiscountAmount"
                                    value={input.maximumDiscountAmount}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Minimum Parking Fee Required</label>
                                <input type="number"
                                    className="form-control"
                                    name="minimumParkingFeeRequired"
                                    value={input.minimumParkingFeeRequired}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Valid From</label>
                                <input type="date"
                                    className="form-control"
                                    name="validFrom"
                                    value={input.validFrom}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Valid Until</label>
                                <input type="date"
                                    className="form-control"
                                    name="validUntil"
                                    value={input.validUntil}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Applicable Vehicle Type</label>

                                <select
                                    className="form-select"
                                    name="applicableVehicleType"
                                    value={input.applicableVehicleType}
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
                                    name="offerStatus"
                                    value={input.offerStatus}
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
                                    name="termsAndConditions"
                                    value={input.termsAndConditions}
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