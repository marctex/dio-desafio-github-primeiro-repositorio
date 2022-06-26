function returnEvenValues(array){
  let impares = [];
  let pares =[];
  for (let i = 0;i < array.length; i++){
    if(array[i]%2 != 0){
      impares.push(array[i]);
    }else{
      pares.push(array[i]);
    }
  }
  console.log('Os números impares são ',impares);
  console.log('Os números pares são ',pares);
}
let array = [1,2,3,4,5,6,7,8,9];
returnEvenValues(array);
