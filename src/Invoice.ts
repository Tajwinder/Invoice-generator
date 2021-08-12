import { calculateFare } from "./Fare"

export interface Ride {
    distance:number,
    time: number
}

export const monthlyInvoice = (rides:Ride[]) => {
    let monthlyFare=0
   
    rides.map(ride=>{
        monthlyFare+=calculateFare(ride)
    })
    return monthlyFare
} 


