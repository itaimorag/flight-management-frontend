import { useEffect } from 'react'
import { Flight } from '../interfaces/flight.interface'
type Props = {
    flight: Flight
}

export const FlightPreview: React.FC<Props> = ({flight}) => {

    useEffect(() => {
//    console.log(`flight = `, flight)
    }, [])

    // const { model, type } = robot
    
    return (
        
        <tr className='flight-preview'>

            <td>{flight.flightNumber}</td>
            <td>{flight.status}</td>
            <td>{flight.takeoffTime}</td>
            <td>{flight.landingTime}</td>
            <td>{flight.takeoffAirport}</td>
            <td>{flight.landingAirport}</td>
            {/* <p>{flight.flightNumber}|{flight.status}|{flight.takeoffTime}|{flight.landingTime}|{flight.takeoffAirport}|{flight.landingAirport}</p> */}
        </tr>
        
    )
}