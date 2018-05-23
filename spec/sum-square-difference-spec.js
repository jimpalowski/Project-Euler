import { sumSquareDifference } from './../src/sum-square-difference.js';

describe ('sum-square-difference', function() {
  it ('should test whether function calculating correctly difference of sums', function() {
    var differenceSum = new sumSquareDifference();
    console.log(differenceSum);
    expect(differenceSum.problem6(10)).toEqual(2640);
  });
});
