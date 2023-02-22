import { Flight } from "../interfaces/flight.interface"
import { httpService } from "./http.service"
const STORAGE_KEY = 'flights'

export const flightService = {
    query,
}

async function query(term:string|undefined):Promise<Flight[]>{
    const flights = await httpService.get(STORAGE_KEY,term)
    return flights.flights
}



