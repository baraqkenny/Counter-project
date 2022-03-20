
let plus = document.getElementById('increment');
let minus = document.getElementById('decrement');
let reset = document.getElementById('reset');
let output = document.getElementById('score')

let score = 0;

plus.addEventListener('click', () =>{
   score++;
   output.innerHTML = score;
   if(score >= 1){
       output.style.color = 'green';
   }else if(score < 1){
       output.style.color = 'red';
   }else{
       output.innerHTML = score;
   }
})


minus.addEventListener('click', () =>{
    score--;
    output.innerHTML = score;
    if(score < 1){
        output.style.color = 'red';
    }else if(score < 1){
        output.style.color = 'green';
    }else{
        output.innerHTML = score;
    }
 })

 reset.addEventListener('click', ()=>{
     score = 0;
     output.innerHTML = score;
     output.style.color = 'crimson'
 })






