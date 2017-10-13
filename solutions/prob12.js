/*factorial - input a number, return its factorial*/

const fac=(a,i=1,result=a)=>{
  if(i!==a){
    result=result*i
    return  fac(a,i+1,result);
  }else{
    return result;
  };
};
module.exports = fac;
