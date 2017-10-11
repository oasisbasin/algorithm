const max=(a,b,c)=>{
  let result = a;
  result = result>b?result:b;
  result = result>c?result:c;
  return result;
};
module.exports = max;
