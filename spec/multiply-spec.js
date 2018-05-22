import { Multiply } from './../src/multiply.js';

describe ('multiply', function() {
  it ('should test whether function calculating correctly', function() {
    var multiply = new Multiply();
    console.log(multiply);
    expect(multiply.problem1(10)).toEqual(23);
  });
});
