var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var limite = 10;

function increment(){
  if(currentNumber < limite){    
    currentNumberWrapper.innerHTML = ++currentNumber;
  }   
}

function decrement(){  
  if(currentNumber > -limite){   
    currentNumberWrapper.innerHTML = --currentNumber;
  }  
}

function limpar(){  
  currentNumberWrapper.innerHTML = 0;
}