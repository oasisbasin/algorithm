/*customTimeout - "execute the function with a time interval of give number"*/

const  fc=(a,fun,i=0)=>{
  if(i>a) return;
    setTimeout(()=>{
      fun();
      fc(a,fun,i+1);
    },1000)
};






module.exports=fc;

