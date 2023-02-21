import { Flight } from "../interfaces/flight.interface"
import { httpService } from "./http.service"

import { utilService } from "./util.service"

const STORAGE_KEY = 'flights'

export const flightService = {
    query,
    getByFlightNumber,

}
//needs to delete!!!!!
var gFlights:Flight[]

async function query(term:string|undefined):Promise<Flight[] >{
    const flights:Flight[] = await httpService.get(STORAGE_KEY,term)
    // console.log(`flights = `, flights)
    gFlights=flights
    return flights
}

function getByFlightNumber(givenFlightNumber: string):Flight|undefined {
    return gFlights.find((flight)=>flight.flightNumber===givenFlightNumber)
}


