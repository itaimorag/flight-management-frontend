
import { useEffect } from 'react'
import { Flight } from '../interfaces/flight.interface'
import { FlightPreview } from './FlightPreview'

type Props = {
    flights: Flight[]
}

export const FlightList: React.FC<Props> = ({ flights }) => {

    useEffect(() => {

    }, [])

    return (
        <section className='flight-list'>
            <table>
                <tr>
                    <th>Flight Number</th>
                    <th>Status</th>
                    <th>Takeoff Time</th>
                    <th>Landing Time</th>
                    <th>Takeoff Airport</th>
                    <th>Landing Airport</th>
                </tr>
                    {flights?.map((flight) =>
               
                        <FlightPreview
                            key={flight.flightNumber}
                            flight={flight}
                        />
               
                    )}
            </table>

        </section>
    )
}