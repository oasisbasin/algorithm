/*IsPrime*/

const pri=(a,i=0)=>{
  if(i!==a){
  if(a%i==0){
    return 'False';
  }else{
    return pri(a,i+1);
  };
  }else{
    return 'True';
  };
};
module.exports = pri;


