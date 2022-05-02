/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort(function (a, b) {
    return a - b;
  });
  console.log(salary);
  salary.pop();
  salary.shift();
  console.log(salary);
  let sal = 0;

  for (let i = 0; i < salary.length; i++) {
    sal = sal + salary[i];
  }

  sal = sal / salary.length;
  console.log(sal);
  return sal;
};
