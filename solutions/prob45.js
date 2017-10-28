const Kebab =(a,b='',i=0)=>{
  if(i!==a.length){
    if(a[i]==a[i].toLowerCase()){
      b+=a[i];
      return Kebab(a,b,i+1) ; 
    }else{
      b+=" "+ a[i].toLowerCase();
      return Kebab(a,b,i+1);
    }
  }else{
   console.log(b);
    return b;
  }
};

module.exports = Kebab;
Kebab('ieLe');

