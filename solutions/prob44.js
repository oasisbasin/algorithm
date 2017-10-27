const StrHas = (a,b,i=0)=>{
  if(i!==a.length){
    if(a[i]==b){
      return 'True'
    }else{
      return StrHas(i+1)
    }
  }else{
    return 'False'
  }
};

module.exports = StrHas;

StrHas('Hello','e');

