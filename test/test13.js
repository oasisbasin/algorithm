const fc = require('../solutions/prob13.js');
const test = (a)=>{
  let count = 0;
  const fun =()=>{
    count += 1
  };

  fc(a,fun);
  setTimeout(()=>{
  if(count== a){
    console.log('Pass');
  }else{
    console.log('Fail');
  };
} , a*1000+1000);
};
test(3);
test(2);
test(5);


