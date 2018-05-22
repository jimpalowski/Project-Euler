export function FibonacciEven(threshold) {
  this.threshold = threshold;
  debugger;
}

FibonacciEven.prototype.problem2 = function(threshold) {
  var a = 1;
  var b = 2;
  var temp = 0;
  var total = 0;
  while (a <=threshold) {
    if (a%2 == 0) {
      total += a;
      console.log(total);
    }
    temp = a;
    a = b;
    b = (temp + b);

  }
  return total;

};
