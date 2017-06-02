var wrapLog = function (callback, name) {
  /* your code here */
  return function (a, b) {
    console.log('sum('+a+','+b+') => ' + (a+b));
  }

};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
