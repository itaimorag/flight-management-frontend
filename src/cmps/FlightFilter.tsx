import {  useRef } from 'react'
import { FlightFilterBy } from '../interfaces/flight-fileter.interface'
type Props = {
    filterBy: string,
    onChangeFilter:Function
}

export const FlightFilter: React.FC<Props>=({filterBy,onChangeFilter})=>  {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        onChangeFilter(ev.target.value)
    }

       

    
    
    return (
        <section className='flight-filter'>        
                    <label htmlFor="filterBy">Filter here by: flight number/takeoff & landing airport. </label>
                    <input className='search-input' ref={inputRef} onChange={(ev) =>handleChange(ev)} value={filterBy} type="text" id="filterBy" placeholder='Type here to filter'/>      
            </section>
        )
    }


