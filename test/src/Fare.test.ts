import { calculateFare } from '../../src/Fare'

describe("calculateFare Test", () => {
    it("should return 5 if distance and time is 0", () => {
        const result = calculateFare({distance:0, time:0});
        expect(result).toEqual(5);
    })

    it("should return correct fare for regular values", ()=>{
        const result = calculateFare({distance:10, time:10});
        expect(result).toEqual(115);
 
    })

    
    




    
})