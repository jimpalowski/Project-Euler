import { FibonacciEven } from './../src/fibonaccieven.js';

describe ('fibonaccieven', function() {
  it ('should test whether function calculating correctly fibonacci', function() {
    var fibonacciSum = new FibonacciEven();
    console.log(fibonacciSum);
    expect(fibonacciSum.problem2(20)).toEqual(10);
  });
});
