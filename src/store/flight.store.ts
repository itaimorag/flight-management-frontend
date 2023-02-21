import{ observable,makeAutoObservable,action} from "mobx"
import { Flight } from "../interfaces/flight.interface"
import { flightService } from '../services/flight.service'

export class FlightStore{
  flights:Flight[]|Array<undefined>=[]

 constructor(){
     makeAutoObservable(this,{
        flights:observable,
        startFlights:action,
        updateFlights:action,
     })
 }

 startFlights(flight:Flight){
    let updatedFlightIdx=this.flights.findIndex((currFlight)=>currFlight?.flightNumber===flight.flightNumber)
        //  console.log(`foo = `)
         if(updatedFlightIdx>=0){
          console.log(`flights[] = `, this.flights[updatedFlightIdx]+'|||'+flight)
          let newFlights=this.flights
          newFlights[updatedFlightIdx]=flight
         }
 }

 updateFlights(flight:Flight){
    let updatedFlightIdx=this.flights.findIndex((currFlight)=>currFlight?.flightNumber===flight.flightNumber)
        //  console.log(`foo = `)
         if(updatedFlightIdx>=0){
          console.log(`flights[] = `, this.flights[updatedFlightIdx]+'|||'+flight)
          let newFlights=this.flights
          newFlights[updatedFlightIdx]=flight
         }
 }

}
export const realFlightStore= new FlightStore()
