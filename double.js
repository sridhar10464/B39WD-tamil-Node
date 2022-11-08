 
//  console.log(process.argv);

 const double = (n) => n*2;
//  console.log(double(10));
// console.log(double(process.argv[2]));

const [, , num] = process.argv;
console.log(double(num));

