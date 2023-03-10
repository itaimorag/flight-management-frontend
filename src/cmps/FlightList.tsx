
import { Flight } from '../interfaces/flight.interface'
import { FlightPreview } from './FlightPreview'

type Props = {
    flights: Flight[]
}

export const FlightList: React.FC<Props> = ({ flights }) => {

    return (
        <section className='flight-list'>
            <table>
                <thead>
                    <tr>
                        <th>Flight Number</th>
                        <th>Status</th>
                        <th>Takeoff Time</th>
                        <th>Landing Time</th>
                        <th>Takeoff Airport</th>
                        <th>Landing Airport</th>
                    </tr>
                </thead>

                <tbody>
                    {flights?.map((flight) =>
                        <FlightPreview
                            key={flight.flightNumber}
                            flight={flight}
                        />
                    )}
                </tbody>
            </table>

        </section>
    )
}