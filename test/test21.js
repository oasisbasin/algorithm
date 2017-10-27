const fac = require('../solutions/prob21.js');
const test = (c,b)=>{
  if(fac(c)===b){
    //   console.log (b);
    console.log('Pass');
  }else{
    // console.log(b);
    console.log('Fail')
  };
};

test(1,1);
test(2,2);
test(3,2);


