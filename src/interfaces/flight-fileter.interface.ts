//i thought i needed smarter filter at the start and i dont delete it if ill need it

export interface FlightFilterBy {
    /** Unique flight identifier. Example: AB1234 */
    flightNumber: string;
    takeoffAirport: string;
    landingAirport: string;
}

