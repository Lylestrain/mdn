// single line comment
/* multi
    line
     comment */


const headline = document.getElementById("h1").innerHTML ;
const btn = document.querySelector('#button');
btn.addEventListener('click', updateName);

function updateName() {
    let name = prompt('Enter a new name');
    headline.textContent = name;
  }

function myfunction() {
   // document.getElementById("h1").innerHTML = "My Not So New text!";
}


//document.getElementById("h1").innerHTML = "My New text!";