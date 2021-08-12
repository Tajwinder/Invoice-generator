const bookingCharges=5,
farePerKM=10,
farePerMinute=1;

export interface Ride {
    distance:number,
    time: number
}
export const calculateFare = (ride :Ride ) => {
let fare=bookingCharges;
   if(ride.distance>0 || ride.time>0 ){
       fare=fare+ride.distance*farePerKM+ride.time*farePerMinute;
   }
   return fare;
}
