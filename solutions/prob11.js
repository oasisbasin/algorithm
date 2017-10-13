/*find7m - Take a number and return the number which is next divisible by 7*/

const fun=(a,i=0,result)=>{
  if(a%7==0){
    if(i==0){
      return result = a+7;
    }else{
      return result = a;
    };
  }else{
    if(i<8){
      return fun(a+1,i+1);
    };
  };
};

module.exports = fun;

