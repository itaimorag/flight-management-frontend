import './assets/main.scss'

import { useEffect,useContext } from 'react'
import { observer } from 'mobx-react'
import { socketService, SOCKET_EVENT_FLIGHT_UPDATE } from './services/socket.service'
import { Flight } from './interfaces/flight.interface';
import { FlightStoreContext } from './store/flight.store';

import { AppHeader } from './cmps/AppHeader';
import { FlightFilter } from './cmps/FlightFilter';
import StickyHeadTable from './cmps/MuiTable'


function App() {
  const flightStore = useContext(FlightStoreContext);
  useEffect(() => {
    //you can delete the setTimeout, its only for the loader
    // setTimeout(()=>{
      flightStore.startFlights()
    // },2000)

    socketService.on(SOCKET_EVENT_FLIGHT_UPDATE, (flight: Flight) => {
      flightStore.updateFlights(flight)
    })

  }, [])

  const onChangeFilter = (value: string) => {
    flightStore.updateFlightFilter(value)
  }

  if (!flightStore.filteredFlights) return (<div className="main-app"><section className="loader-container">
    <div className="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
  </section></div>)

  return (
    <FlightStoreContext.Provider value={flightStore}>
    <div className="main-app">
      <AppHeader />
      <div className='main-container'>
        <FlightFilter filterBy={flightStore.filterBy} onChangeFilter={onChangeFilter} />
        <StickyHeadTable flights={flightStore.filteredFlights}/>
        {/* im not deleting the components of flight list and flight preview so you could look at them if you would like :) */}
        {/* <FlightList flights={flightStore.filteredFlights} /> */}
      </div>
    </div>
    </FlightStoreContext.Provider>
  )
}


export default observer(App)
