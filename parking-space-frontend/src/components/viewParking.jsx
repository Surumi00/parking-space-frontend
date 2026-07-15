import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ViewAllParking = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.get("http://localhost:3000/view-all").then(

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



            <div className="container mt-5">

                <div className="row">

                    <div className="col col-12">

                        <table className="table table-striped table-hover table-bordered align-middle text-center">

                            <thead className="table-primary">

                                <tr>

                                    <th>Parking ID</th>
                                    <th>Slot Number</th>
                                    <th>Parking Zone / Level</th>
                                    <th>Floor Number</th>
                                    <th>Vehicle Type</th>
                                    <th>Hourly Fee</th>
                                    <th>Availability</th>
                                    <th>Maximum Duration</th>
                                    <th>Parking Area</th>
                                    <th>CCTV</th>
                                    <th>Reserved Slot</th>
                                    <th>Remarks</th>

                                </tr>

                            </thead>

                            <tbody>

                                {
                                    data.map(

                                        (value, index) => {

                                            return (

                                                <tr key={index}>

                                                    <td>{value.parking_id}</td>
                                                    <td>{value.slot_number}</td>
                                                    <td>{value.parking_zone_level}</td>
                                                    <td>{value.floor_number}</td>
                                                    <td>{value.vehicle_type_supported}</td>
                                                    <td>{value.hourly_parking_fee}</td>
                                                    <td>{value.availability_status}</td>
                                                    <td>{value.maximum_parking_duration}</td>
                                                    <td>{value.parking_area_name}</td>
                                                    <td>{value.cctv_available}</td>
                                                    <td>{value.reserved_slot}</td>
                                                    <td>{value.remarks}</td>

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

    )
}

export default ViewAllParking