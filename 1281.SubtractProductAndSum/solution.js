/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  var myArr = String(n)
    .split("")
    .map((n) => {
      return Number(n);
    });

  let product = 1;
  let sum = 0;

  for (let i = 0; i < myArr.length; i++) {
    sum = sum + myArr[i];
    product = product * myArr[i];
  }
  return product - sum;
  console.log(product);
};
