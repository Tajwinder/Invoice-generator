
const Fare={
    standard: {
        bookingCharges:5,
        farePerKM:10,
        farePerMinute:1
    },
    premium: {
        bookingCharges:5,
        farePerKM:15,
        farePerMinute:2
    }
}



export interface Ride {
    distance:number,
    time: number, 
    type:"standard" | "premium"
}
export const calculateFare = (ride :Ride ) => {
const {distance, time, type}=ride
   
      return distance*Fare[type].farePerKM+time*Fare[type].farePerMinute+Fare[type].bookingCharges;
}
