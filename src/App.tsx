import './assets/main.scss'

import { useState, useEffect, SetStateAction } from 'react'
import { observer } from 'mobx-react'
import { realFlightStore } from './store/flight.store';
import { flightService } from './services/flight.service'
import { Flight } from './interfaces/flight.interface'
import { FlightList } from './cmps/FlightList'
import { utilService } from './services/util.service'
import { socketService, SOCKET_EVENT_FLIGHT_UPDATE } from './services/socket.service'
import { FlightFilter } from './cmps/FlightFilter';



function App() {
  // const [flights, setFlights] = useState<Flight[]>([])
  //  const FlightStore=realFlightStore

  useEffect(() => {
    realFlightStore.startFlights()
console.log(`realFlightStore.flights = `, realFlightStore.filteredFlights)
    //need to unmark for the socket to run
    // socketService.on(SOCKET_EVENT_FLIGHT_UPDATE,(flight:Flight)=>{
    // realFlightStore.updateFlights(flight)
    // })

  },[])

  const onChangeFilter=(value:string)=>{
    realFlightStore.updateFlightFilter(value)
  }


  //need to change mabey
  if (!realFlightStore.filteredFlights) {
    return (
      <div className="App">Loading...</div>
    )

  } 

    return (

      <div className="App">
        <FlightFilter filterBy={realFlightStore.filterBy} onChangeFilter={onChangeFilter}/>
        <FlightList flights={realFlightStore.filteredFlights} />
      </div>
    )
  }


export default observer(App)
