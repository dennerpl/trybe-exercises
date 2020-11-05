let randomNumber = () => {
    return Math.floor(Math.random() * 100);
}

describe('Test if the function randomNumber works', () => {
    it('should return default value 10', () =>{
        randomNumber = jest.fn().mockReturnValue(10);
        expect(randomNumber()).toBe(10);
        expect(randomNumber).toHaveBeenCalled();
        expect(randomNumber).toHaveBeenCalledTimes(1);
    })
    it('should change the real implementation to be a divisor', () => {
        randomNumber.mockImplementation((number1, number2) => {
            return number1/number2;
        })
        expect(randomNumber(10,5)).toBe(2);
        randomNumber.mockReset();
    })
    it('should change the real implementation to be a divisor', () => {
        randomNumber.mockImplementation((number1, number2, number3) => {
            return number1*number2*number3;
        })
        expect(randomNumber(2,2,2)).toBe(8);
        randomNumber.mockReset();
    })
})