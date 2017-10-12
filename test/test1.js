const sum = require('../solutions/prob1.js');
const test=(a,b,summ)=>{
  if(summ == sum(a,b)){
   console.log('True');
 }else{
    console.log('False');
 };
};
test(5,6,11);
test(3,2,6);
test(2,2,4);

