const max = require('../solutions/prob2.js');
const test=(a,b,c,d)=>{
  console.log(max(a,b,c));
  if(max(a,b,c)== d){ 
    console.log('Pass');
  }else{
    console.log('Fail');
  };
};
test(5,8,9,9);
test(1,2,3,3);
test(1,2,1,1)

;

