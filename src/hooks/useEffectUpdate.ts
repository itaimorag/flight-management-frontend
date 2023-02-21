import { useEffect, useRef } from "react"

//need to change any
export const useEffectUpdate = (cb:any, dependencies:any) => {

    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
        } else {
            return cb()
        }

    }, dependencies)
}