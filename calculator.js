function Clear(){
  let display = document.querySelector('span');
  display.textContent = "";

  
}

function tooLong(string){
  if (string.length > 10){
    return "Error", Clear()
  }else{
    return string
  }
}

const calculate = {

  input: "",

  add: function(input2) {
    return Math.round(((parseFloat(calculate.input) + parseFloat(input2)) + Number.EPSILON) * 100) / 100;
  },

  subtract: function(input2) {
    return Math.round(((calculate.input - input2) + Number.EPSILON) * 100) / 100;
  },

  divide: function(input2) {
    return Math.round(((calculate.input / input2) + Number.EPSILON) * 100) / 100;
  },

  multiply: function(input2) {
    return Math.round(((calculate.input * input2) + Number.EPSILON) * 100) / 100;
  },

  modulus: function(input2) {
    return Math.round(((calculate.input % input2) + Number.EPSILON) * 100) / 100;
  },

};

let input2 = 0
let operation =""

Clear()

let digit = document.querySelectorAll('.digit');
digit.forEach(item => item.addEventListener('click', function(event){

     let display = document.querySelector('span');
     let num = event.target.textContent;
     if (!(display.textContent.includes('.') && num.toString()=='.')){
       display.textContent = tooLong(display.textContent + num.toString());
     }
    
}));

//Listen for operator button to be pressed, record what button and save/clear first input
let operator = document.querySelectorAll('.operator');
operator.forEach(item => item.addEventListener('click', function(event){
    
   calculate.input = display.textContent;
   Clear()
   operation = event.target.id;

}));

//Set listener for equals button and take current display text as second input
let equals = document.querySelectorAll('#equal');
equals.forEach(item => item.addEventListener('click', function(event){
    
   let display = document.querySelector('span');
   let calculation = calculate[operation](display.textContent);

   console.log(typeof(calculation), calculation)

   display.textContent = tooLong(calculate[operation](display.textContent).toString());

}));

//Set listener for equals button and take current display text as second input
let del = document.querySelectorAll('#delete');
del.forEach(item => item.addEventListener('click', function(event){
    
   let display = document.querySelector('span');
   let text = display.textContent
   display.textContent = text.toString().slice(0,-1)

}));

let clr = document.querySelector('#clear');
clr.onclick = function() {
  Clear();
}
