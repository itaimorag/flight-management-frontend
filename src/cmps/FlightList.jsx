
import { useEffect,useState } from 'react'
import { FlightPreview } from './FlightPreview'
// import { Flight }  from '../interfaces/flight.interface'
// import { Flight } from './interfaces/flight.interface'
export const FlightList = ({flights}) => {

    useEffect(() => {

    }, [])

    // const { model, type } = robot
    
    return (
        <section className='flight-list'>
            {/* {JSON.stringify(flights)} */}

            {flights?.map((flight) =>
                <FlightPreview
                    key={flight.flightNumber}
                    flight={flight}
                />
            )}
          
        </section>
    )
}