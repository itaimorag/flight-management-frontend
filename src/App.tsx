import './assets/main.scss'

import { useEffect } from 'react'
import { observer } from 'mobx-react'
import { realFlightStore } from './store/flight.store';
import { socketService, SOCKET_EVENT_FLIGHT_UPDATE } from './services/socket.service'
import { Flight } from './interfaces/flight.interface';

import { AppHeader } from './cmps/AppHeader';
import { FlightList } from './cmps/FlightList'
import { FlightFilter } from './cmps/FlightFilter';
import StickyHeadTable from './cmps/MuiTable'


function App() {
  useEffect(() => {
    //you can delete the setTimeout, its only for the loader
    // setTimeout(()=>{
    realFlightStore.startFlights()
    // },2000)

    socketService.on(SOCKET_EVENT_FLIGHT_UPDATE, (flight: Flight) => {
      realFlightStore.updateFlights(flight)
    })

  }, [])

  const onChangeFilter = (value: string) => {
    realFlightStore.updateFlightFilter(value)
  }

  if (!realFlightStore.filteredFlights) return (<div className="main-app"><section className="loader-container">
    <div className="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
  </section></div>)

  return (
    <div className="main-app">
      <AppHeader />
      <div className='main-container'>
        <FlightFilter filterBy={realFlightStore.filterBy} onChangeFilter={onChangeFilter} />
        <StickyHeadTable />
        {/* im not deleting the components of flight list and flight preview so you could look at them if you would like :) */}
        {/* <FlightList flights={realFlightStore.filteredFlights} /> */}
      </div>
    </div>
  )
}


export default observer(App)
