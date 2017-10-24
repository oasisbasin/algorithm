 const pri = (b,i=2)=>{
   if(i!==b){
     if(b%i==0){
     return 'False';
     }else{
    return pri(b,i+1);
     };
   }else{
  return 'True';
   };
 };
const arr =(a,array=[])=>{
  if(a!==1){
    if(pri(a) == 'True'){
     array.push(a);
     arr(a-1,array);
  }else{
      arr(a-1,array);
    }
  }else{
    array.push(1);
    console.log(array);
    return array;
  };
};

arr(5);
arr(9);
arr(6);


    

