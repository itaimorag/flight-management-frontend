import './assets/main.scss'

import { useState, useEffect, SetStateAction } from 'react'
import { observer } from 'mobx-react'
import { realFlightStore } from './store/flight.store';
import { flightService } from './services/flight.service'
import { Flight } from './interfaces/flight.interface'
import { FlightList } from './cmps/FlightList.jsx'
import { utilService } from './services/util.service'
import { socketService, SOCKET_EVENT_FLIGHT_UPDATE } from './services/socket.service'

function App() {
  const [flights, setFlights] = useState<Flight[]>([])
   const FlightStore=realFlightStore
   
  useEffect(() => {
    let newFlights: SetStateAction<Flight[]>
    //need to unmark for the socket to run
    // socketService.on(SOCKET_EVENT_FLIGHT_UPDATE,(flight:Flight)=>{
    //      let updatedFlightIdx=flights.findIndex((currFlight)=>currFlight.flightNumber===flight.flightNumber)
    //     //  console.log(`foo = `)
    //      if(updatedFlightIdx>=0){
    //       console.log(`flights[] = `, flights[updatedFlightIdx]+'|||'+flight)
    //       let newFlights=flights
    //       newFlights[updatedFlightIdx]=flight
    //       setFlights([...newFlights])
    //      }
    // })
    const fetchData = async () => {
      const data: any = await flightService.query('');
      setFlights([...data.flights])
      return data
    }
    fetchData()
  }, [])


  //need to change mabey
  if (!flights.length) {
    return (
      <div className="App">Loading...</div>
    )

  } else {

    return (
      <div className="App">
        <FlightList flights={flights} />
      </div>
    )
  }
}

export default App
