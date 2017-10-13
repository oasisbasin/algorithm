const fun = require('../solutions/prob11.js');
const test=(a,b)=>{
  if(fun(a)==b){
    console.log('Pass');
  }else{
    console.log('Fail');
  };
};

test(4,7);
test(8,14);
test(2,3);

