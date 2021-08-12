import { monthlyInvoice} from '../../src/Invoice'

describe("calculateFare Test", () => {
    it("should return 0 if there is no ride in the given month", () => {
        const result = monthlyInvoice([]);
        expect(result).toEqual({"averageFarePerRide": 0, "noOfRides": 0, "totalFare": 0});
    })

    it("should return correct fare for single ride in the given month", () => {
        const result = monthlyInvoice([{distance:3, time:10, type:"standard"}]);
        expect(result).toEqual({"averageFarePerRide": 45, "noOfRides": 1, "totalFare": 45});
    })

    it("should return correct fare for multiple rides in the given month", () => {
        const result = monthlyInvoice([{distance:3, time:10, type:"standard" },{distance:10, time:30, type:"standard"}]);
        expect(result).toEqual({"averageFarePerRide": 90, "noOfRides": 2, "totalFare": 180});
    })



   
    
    




    
})