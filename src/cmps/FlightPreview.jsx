import { useEffect } from 'react'

export const FlightPreview = ({flight}) => {

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