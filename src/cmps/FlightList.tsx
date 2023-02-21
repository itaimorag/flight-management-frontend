
import { useEffect } from 'react'
import { Flight } from '../interfaces/flight.interface'
import { FlightPreview } from './FlightPreview'

type Props = {
    flights: Flight[]
}

export const FlightList: React.FC<Props> = ({flights}) => {

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