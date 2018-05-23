export function sumSquareDifference(limit) {
  this.limit = limit;
  debugger;
}

sumSquareDifference.prototype.problem6 = function(limit) {
  var sumOne = 0;
  var sumTwo = 0;
  var difference = 0;
  for (var i = 1; i <= limit; i++) {
    sumOne += Math.pow(i,2);
    sumTwo += i;
  }
  difference = (Math.pow(sumTwo, 2)) - sumOne;
  console.log(difference);
  return difference;
};
