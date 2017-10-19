/*greatest divisor*/
const divi=(a,b,i=a)=>{
  if(a<b){
    if(i!==1){
    if(b%i==0){
      return i;
    }else{
      return divi(a,b,i-1);
    };
  }else{
    return i;
  };
  }else{
    if(i!==1){
      if(a%i==0){
        return i;
      }else{
        return divi(a,b,i-1);
      };
    };
  };
};

module.exports=divi;

