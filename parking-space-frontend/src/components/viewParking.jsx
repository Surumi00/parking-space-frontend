import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'


const ViewAllParking = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view-all").then(

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

                                                    <td>{value.parkingId}</td>
                                                    <td>{value.slotNumber}</td>
                                                    <td>{value.parkingZone}</td>
                                                    <td>{value.floorNumber}</td>
                                                    <td>{value.vehicleTypeSupported}</td>
                                                    <td>{value.hourlyParkingFee}</td>
                                                    <td>{value.availabilityStatus}</td>
                                                    <td>{value.maximumParkingDuration}</td>
                                                    <td>{value.parkingAreaName}</td>
                                                    <td>{String(value.cctvAvailable)}</td>
                                                    <td>{String(value.reservedSlot)}</td>
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