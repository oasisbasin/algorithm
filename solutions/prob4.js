const string=(str,num,result='')=>{
  if(num!==0){

   result = result + str
    z = string(str,num-1,result);
    return z;
  }else{
    console.log(result);
 return(result);
  };
};
string('apple',2);
module.exports = string;


