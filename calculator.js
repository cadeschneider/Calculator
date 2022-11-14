function Clear(){
  let display = document.querySelector('span');
  display.textContent = "";
}

const calculate = {

  input: 0,

  add: function(input2) {
    return calculate.input + input2
  },

  subtract: function(input2) {
    return calculate.input - input2
  },

  divide: function(input2) {
    return calculate.input / input2
  },

  multiply: function(input2) {
    return calculate.input * input2
  },
};

let input2 = 0
let operation =""

Clear()

let digit = document.querySelectorAll('.digit');
digit.forEach(item => item.addEventListener('click', function(event){

   let display = document.querySelector('span');
   display.textContent += event.target.textContent;

}));

let operator = document.querySelectorAll('.operator');
operator.forEach(item => item.addEventListener('click', function(event){
    
   calculate.input = display.textContent;
   Clear()
   operation = event.target.id;

}));

let equals = document.querySelectorAll('#equal');
equals.forEach(item => item.addEventListener('click', function(event){
    
   let display = document.querySelector('span');
   display.textContent = calculate[operation](display.textContent);

}));

let clr = document.querySelector('#clear');
clr.onclick = function() {
  Clear();
}
