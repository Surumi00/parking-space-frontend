import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'


const ViewAllOffers = () => {

    const [data, changeData] = useState([])

    const normalizeOffer = (value) => ({
        offerId: value?.offerId ?? value?.offer_id ?? '',
        offerCode: value?.offerCode ?? value?.offer_code ?? '',
        offerName: value?.offerName ?? value?.offer_name ?? '',
        offerDescription: value?.offerDescription ?? value?.offer_description ?? '',
        discountPercentage: value?.discountPercentage ?? value?.discount_percentage ?? '',
        maximumDiscountAmount: value?.maximumDiscountAmount ?? value?.maximum_discount_amount ?? '',
        minimumParkingFeeRequired: value?.minimumParkingFeeRequired ?? value?.minimum_parking_fee_required ?? '',
        validFrom: value?.validFrom ?? value?.valid_from ?? '',
        validUntil: value?.validUntil ?? value?.valid_until ?? '',
        applicableVehicleType: value?.applicableVehicleType ?? value?.applicable_vehicle_type ?? '',
        offerStatus: value?.offerStatus ?? value?.offer_status ?? '',
        termsAndConditions: value?.termsAndConditions ?? value?.terms_and_conditions ?? ''
    })

    const fetchData = () => {

        axios.post("http://localhost:3000/view-offer").then(

            (response) => {

                const payload = Array.isArray(response.data)
                    ? response.data
                    : response.data?.offers ?? [response.data]

                changeData(payload.map(normalizeOffer))

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