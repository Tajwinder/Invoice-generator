
import { number } from "yargs"
import { calculateFare } from "./Fare"

export interface Ride {
    distance:number,
    time: number
}

export interface result {
    totalFare:number,
     noOfRides:number,
      averageFarePerRide:number
     }


export const monthlyInvoice = (rides:Ride[]):result => {
 if(rides.length==0) return {totalFare:0, noOfRides:0, averageFarePerRide:0}
 
 const totalFare= rides.reduce((sum:number, ride:Ride)=> sum+calculateFare(ride),0),
 noOfRides=rides.length,
 averageFarePerRide=totalFare/noOfRides;
 return {totalFare, noOfRides, averageFarePerRide}

} 


