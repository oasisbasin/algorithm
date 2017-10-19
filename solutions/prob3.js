const print=(a,i=0)=>{
  if(a!== i){
    console.log('Hello');
   print(a,i+1);
  }
};
  print(3);
