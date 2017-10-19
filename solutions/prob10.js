/*callfunctionBigger" calling a function largest number of times"*/

const fun=(a,b,c,i=0)=>{
  if(b<c){
    if(i!==c){
      a(c);
      return fun(a,b,c,i+1);
    }else{
      return i;
    };
  }else{
    if(i!==b){
      a(b);
      return fun(a,b,c,i+1);
    }else{
      return i;
    };
  };
};
module.exports = fun;

