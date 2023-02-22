import { observable, makeAutoObservable, action, computed } from "mobx"
import { Flight } from "../interfaces/flight.interface"
import { flightService } from '../services/flight.service'
import { utilService } from "../services/util.service"

export class FlightStore {
    flights: Flight[] | null = null
    filterBy: string = ''


    constructor() {
        makeAutoObservable(this, {
            flights: observable,
            filterBy: observable,
            startFlights: action,
            updateFlights: action,
            updateFlightFilter: action,
            filteredFlights: computed
        })
    }
    get filteredFlights() {
        if (this.filterBy) {
            let filteredFlights = this.flights?.filter((flight) => flight.flightNumber.includes(this.filterBy.toUpperCase())
                || flight.takeoffAirport.toLowerCase().includes(this.filterBy.toLowerCase())
                || flight.landingAirport.toLowerCase().includes(this.filterBy.toLowerCase()))
            return filteredFlights
        }
        return this.flights
    }

    updateFlightFilter(value: string) {
        this.filterBy = value
    }

    async startFlights() {
        let newFlights = await flightService.query('')
        this.flights = JSON.parse(JSON.stringify(newFlights))
    }

    updateFlights(flight: Flight) {
        let updatedFlightIdx = this.flights?.findIndex((currFlight) => currFlight?.flightNumber === flight.flightNumber)
        if (updatedFlightIdx && updatedFlightIdx >= 0 && this.flights) {
            let newFlights: Flight[] = this.flights
            if (newFlights[updatedFlightIdx].takeoffTime !== flight.takeoffTime ||
                newFlights[updatedFlightIdx].landingTime !== flight.landingTime) {
                //im not deleting the flight.updates after sometime because,
                //  i get new info from the server if this flight changed again so it restarts the updates and
                // that way you can see the table is changing

                // and its called updates so if in the future i'll have some simple other updates i can show them here

                flight.updates = utilService.getTimeDifference(newFlights[updatedFlightIdx].takeoffTime, flight.takeoffTime)
            }
            newFlights[updatedFlightIdx] = flight
            this.flights = [...newFlights]
        }
    }

}
export const realFlightStore = new FlightStore()
