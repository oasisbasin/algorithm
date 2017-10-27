const fac = (a,count=a,i=a-1)=>{

  if(i!==0){
    count = count*i;
  return fac(a,count,i-1);
  }else{
    return count;
  };
  };

module.exports = fac;



