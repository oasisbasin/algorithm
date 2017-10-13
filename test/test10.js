const fun = require('../solutions/prob10.js');
const test=(a,b,c,result)=>{
  a =(r)=>{
    console.log(r);
  };
  if(b<c){
  if(fun(a,b,c) == c){
    console.log('Pass');
  }else{
    console.log('Fail');
  };
  }else{
    if(fun(a,b,c) == b){
      console.log('Pass');
    }else{
      console.log('Fail');
    };
  };
};

test(2,3,3);


