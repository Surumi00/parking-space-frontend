import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'


const ViewAllOffers = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view-offer").then(

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

                                                        <td>{value.offerId}</td>
                                                        <td>{value.offerCode}</td>
                                                        <td>{value.offerName}</td>
                                                        <td>{value.offerDescription}</td>
                                                        <td>{value.discountPercentage}</td>
                                                        <td>{value.maximumDiscountAmount}</td>
                                                        <td>{value.minimumParkingFeeRequired}</td>
                                                        <td>{value.validFrom}</td>
                                                        <td>{value.validUntil}</td>
                                                        <td>{value.applicableVehicleType}</td>
                                                        <td>{value.offerStatus}</td>
                                                        <td>{value.termsAndConditions}</td>

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