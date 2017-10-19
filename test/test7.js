const div=require('../solutions/prob7.js');
const test = (input,result) => {
  if(input==result){
    console.log('Pass');
  }else{
    console.log('Fail');
  };
}
test(div(6),3);
test(div(10),5);
test(div(15),5);
test(div(21),7);
