const pri=require('../solutions/prob8.js')
const test=(input,result)=>{
 if(pri(input)==result){
   console.log('True');
 }else{
   console.log('False');
 };
};

test(3,'True');
test(4,'False');
test(5,'True');


 
