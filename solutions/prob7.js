/*const div=(a,i=2,result=1)=>{
    ://github.com/oasisbasin/algorithm/pull/5= a/(i+1);
  if(i<a){
    if(a%i == 0){
      return div(a,i+1,i);
    }else{
      return div(a,i+1,result);
    }
  }else{
    return result;
  };
};
module.exports= div*/

const div=(a,i=a-1,result=1)=>{
if(i!==0){
  if(a%i==0){
    return result=i;
  }else{
    return div(a,i-1,result);
  }
}else{
  return result;
};
};
module.exports = div;

