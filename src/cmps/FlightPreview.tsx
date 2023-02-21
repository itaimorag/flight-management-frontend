import { useEffect } from 'react'
import { Flight } from '../interfaces/flight.interface'
type Props = {
    flight: Flight
}

export const FlightPreview: React.FC<Props> = ({flight}) => {

    useEffect(() => {
   console.log(`flight = `, flight)
    }, [])

    // const { model, type } = robot
    
    return (
        <section className='flight-preview'>
            <p>{flight.flightNumber}|{flight.status}|{flight.takeoffTime}|{flight.landingTime}|{flight.takeoffAirport}|{flight.landingAirport}</p>
        </section>
    )
}