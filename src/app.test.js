const FizzBuzz = require('./app')

test('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).toBe('Fizz')
})


test('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).toBe('Buzz')
})


test('should return `FizzBuzz` when multiple of 5 and 3', () => {
    expect(FizzBuzz(15)).toBe('FizzBuzz')
})


test('should return number when diferrent multiple of 5 or 3', () => {
    expect(FizzBuzz(16)).toBe(16)
})

test('should return 0 when 0', () => {
    expect(FizzBuzz(0)).toBe(0)
})
