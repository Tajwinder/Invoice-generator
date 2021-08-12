import { monthlyInvoice} from '../../src/Invoice'

describe("calculateFare Test", () => {
    it("should return 0 if there is no ride in the given month", () => {
        const result = monthlyInvoice([]);
        expect(result).toEqual(0);
    })

    it("should return 0 if there is no ride in the given month", () => {
        const result = monthlyInvoice([{distance:3, time:10}]);
        expect(result).toEqual(45);
    })



   
    
    




    
})