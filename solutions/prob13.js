const  fc=(a,fun,i=0)=>{
  if(i>a) return;
    setTimeout(()=>{
      fun();
      fc(a,fun,i+1);
    },1000)
};
module.exports=fc;

