import{ observable,makeAutoObservable,action,computed} from "mobx"
import { Flight } from "../interfaces/flight.interface"
import { FlightFilterBy } from "../interfaces/flight-fileter.interface" 
import { flightService } from '../services/flight.service'

export class FlightStore{
  flights:Flight[]|null=null
  filterBy:string=''
    

 constructor(){
     makeAutoObservable(this,{
        flights:observable,
        filterBy:observable,
        startFlights:action,
        updateFlights:action,
        updateFlightFilter:action,
        filteredFlights:computed
     })
 }
get filteredFlights(){
    if(this.filterBy){
        let filteredFlights=this.flights?.filter((flight)=>flight.flightNumber.includes(this.filterBy.toUpperCase())
        ||flight.takeoffAirport.toLowerCase().includes(this.filterBy.toLowerCase())
        ||flight.landingAirport.toLowerCase().includes(this.filterBy.toLowerCase()))
        return filteredFlights
    } 
     return this.flights
}

updateFlightFilter(value:string){
    this.filterBy=value
}

async startFlights(){
    let newFlights= await flightService.query('')
    this.flights=JSON.parse(JSON.stringify(newFlights)) 
 }

 updateFlights(flight:Flight){
    let updatedFlightIdx=this.flights?.findIndex((currFlight)=>currFlight?.flightNumber===flight.flightNumber)
         if(updatedFlightIdx&& updatedFlightIdx>=0&&this.flights){
             let newFlights:Flight[]=this.flights
             console.log(`newFlights[updatedFlightIdx] = `, newFlights[updatedFlightIdx])
             console.log(`flight = `, flight)
              newFlights[updatedFlightIdx]=flight
              this.flights=[...newFlights]
         }
 }

}
export const realFlightStore= new FlightStore()
