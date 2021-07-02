console.log(process.argv.slice(2));
let num = process.argv.slice(2);
const timer1 = function(list){
  for(let second of list){
    if ((second !== '') && (second>0)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (Number(second)*1000));
  }
  }

};
timer1(num);

// const timer1 = function(list){
//   for(let second of list){
//     if ((second !== '') && (second>0)) {
//     setTimeout(() => {
//       process.stdout.write('@');
//     }, second);
//   }
//   }
// };
// timer1([10000,3000,5000,15000,9000]);
// timer1([-1,0,2000]);
// timer1([]);