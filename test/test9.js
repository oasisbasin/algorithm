const divi = require('../solutions/prob9.js');
const test = (input1,input2, result)=>{
  if(divi(input1,input2) == result){
    console.log('Pass');
  }else{
    console.log('Fail');
  };
};

test(3,6,3);
test(2,4,3);
test(2,4,2);

