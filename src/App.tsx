import { useState, useEffect, SetStateAction } from 'react'
import reactLogo from './assets/imgs/react.svg'
import { flightService } from './services/flight.service'
import { Flight } from './interfaces/flight.interface'
import './assets/main.scss'
import { FlightList } from './cmps/FlightList.jsx'
import { utilService } from './services/util.service'

function App() {
  const [flights, setFlights] = useState<Flight[]>([])
  
  useEffect(() => {
    // let newFlights: SetStateAction<Flight[]>

    const fetchData = async () => {
      const data = await flightService.query('');
      setFlights([...data.flights])
      return data
    }
    fetchData()
  }, [])

if(!flights.length){
  return (
    <div className="App">Loading...</div>
  )

} else{

  return (
    <div className="App">

      {flights.length > 0 &&
        <FlightList flights={flights} />
      }
    </div>
  )
}
}

export default App
