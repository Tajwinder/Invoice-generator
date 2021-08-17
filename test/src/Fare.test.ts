import { calculateFare } from '../../src/Fare'

describe("calculateFare Test", () => {
    it("should return 5 if distance and time is 0", () => {
        const result = calculateFare({distance:0, time:0, type:"standard"});
        expect(result).toEqual(5);
    })

    it("should return correct fare for regular values", ()=>{
        const result = calculateFare({distance:10, time:10, type:"standard"});
        expect(result).toEqual(115);
 
    })

    it("should return correct fare for a premium ride", ()=>{
        const result = calculateFare({distance:10, time:10, type:"premium"});
        expect(result).toEqual(175);
 
    })
    it("should return correct fare for a premium ride", ()=>{
        const result = calculateFare({distance:10, time:10, type:"premium"});
        expect(result).toEqual(170);
 
    })



    
    




    
})