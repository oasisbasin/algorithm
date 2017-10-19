/*call a function * number of times and pass in the parameter*/
const nfunc=(a,num,i=1)=>{
 console.log(i);
  if(i!==num){
    a(i);
    return nfunc(a,num,i+1);
  }else{
    return i;
  };
};

module.exports = nfunc
