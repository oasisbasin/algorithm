/*callX calling a function*/
const fun=(a,num,i=0)=>{
  if(num!==0){
    a();
   z= fun(a,num-1,i+1);
  return z;
  }else{
    return i
  };
};
module.exports = fun;
