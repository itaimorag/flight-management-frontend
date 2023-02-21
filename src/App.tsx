import './assets/main.scss'

import { useEffect } from 'react'
import { observer } from 'mobx-react'
import { realFlightStore } from './store/flight.store';
import { socketService, SOCKET_EVENT_FLIGHT_UPDATE } from './services/socket.service'
import { Flight } from './interfaces/flight.interface';

import { AppHeader } from './cmps/AppHeadet';
import { FlightList } from './cmps/FlightList'
import { FlightFilter } from './cmps/FlightFilter';


function App() {
  useEffect(() => {
    setTimeout(()=>{

      realFlightStore.startFlights()
    },2000)
    // console.log(`realFlightStore.flights = `, realFlightStore.filteredFlights)
    // need to unmark for the socket to run
    socketService.on(SOCKET_EVENT_FLIGHT_UPDATE,(flight:Flight)=>{
    realFlightStore.updateFlights(flight)
    })

  }, [])

  const onChangeFilter = (value: string) => {
    realFlightStore.updateFlightFilter(value)
  }

  if (!realFlightStore.filteredFlights) return (<div className="main-app">Loading...</div>)

  return (
    <div className="main-app">
      <AppHeader />
      <div className='main-container'>
        <FlightFilter filterBy={realFlightStore.filterBy} onChangeFilter={onChangeFilter} />
        <FlightList flights={realFlightStore.filteredFlights} />
      </div>
    </div>
  )
}


export default observer(App)
