const fac = require('../solutions/prob12.js');
const test=(a,b)=>{
  if(fac(a)==b){
    console.log('Pass');
  }else{
    console.log('Fail');
  };
};

test(3,6);
test(3,5);
test(4,24);


