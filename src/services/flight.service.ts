import { Flight } from "../interfaces/flight.interface"
import { httpService } from "./http.service"

import { utilService } from "./util.service"

const STORAGE_KEY = 'flights'

export const flightService = {
    query,
    getById,

}

async function query(term:string|undefined) {
    const flights = await httpService.get(STORAGE_KEY,term)
    // console.log(`flights = `, flights)
    return flights
}

function getById(flightId: string) {
    return httpService.delete(`flight/${flightId}`)
}


