import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'


const ViewAllOffers = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.get("http://localhost:3000/view-offer").then(

            (response) => {

                changeData(response.data)

            }

        ).catch(

            (error) => {

                console.log(error)

            }

        )

    }

    useEffect(() => {

        fetchData()

    }, [])

    return (

        <div>

            <NavigationBar />

            <div className="container mt-5">

                <div className="row">

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="table-responsive">

                            <table className="table table-striped table-hover table-bordered align-middle text-center">

                                <thead className="table-primary">

                                    <tr>

                                        <th>Offer ID</th>
                                        <th>Offer Code</th>
                                        <th>Offer Name</th>
                                        <th>Description</th>
                                        <th>Discount (%)</th>
                                        <th>Maximum Discount</th>
                                        <th>Minimum Parking Fee</th>
                                        <th>Valid From</th>
                                        <th>Valid Until</th>
                                        <th>Vehicle Type</th>
                                        <th>Status</th>
                                        <th>Terms & Conditions</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        data.map(

                                            (value, index) => {

                                                return (

                                                    <tr key={index}>

                                                        <td>{value.offer_id}</td>
                                                        <td>{value.offer_code}</td>
                                                        <td>{value.offer_name}</td>
                                                        <td>{value.offer_description}</td>
                                                        <td>{value.discount_percentage}</td>
                                                        <td>{value.maximum_discount_amount}</td>
                                                        <td>{value.minimum_parking_fee_required}</td>
                                                        <td>{value.valid_from}</td>
                                                        <td>{value.valid_until}</td>
                                                        <td>{value.applicable_vehicle_type}</td>
                                                        <td>{value.offer_status}</td>
                                                        <td>{value.terms_and_conditions}</td>

                                                    </tr>

                                                )

                                            }

                                        )
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ViewAllOffers