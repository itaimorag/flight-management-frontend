import { useEffect } from 'react'
import { Flight } from '../interfaces/flight.interface'
type Props = {
    flight: Flight
}

export const FlightPreview: React.FC<Props> = ({flight}) => {

    let statusClass;
    switch (flight.status) {
      case 'hangar':
        statusClass = 'hangar';
        break;
      case 'airborne':
        statusClass = 'airborne';
        break;
      case 'malfunction':
        statusClass = 'malfunction';
        break;
      default:
        statusClass = '';
    }
    
    return (
        
        <tr className='flight-preview'>

            <td>{flight.flightNumber}</td>
            <td className={statusClass}>{flight.status}</td>
            <td>{flight.takeoffTime}</td>
            <td>{flight.landingTime}</td>
            <td>{flight.takeoffAirport}</td>
            <td>{flight.landingAirport}</td>
            {/* <p>{flight.flightNumber}|{flight.status}|{flight.takeoffTime}|{flight.landingTime}|{flight.takeoffAirport}|{flight.landingAirport}</p> */}
        </tr>
        
    )
}