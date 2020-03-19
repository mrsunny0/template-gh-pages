// find containers
var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');

console.log(container1);
console.log(container2);

var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');

b1.addEventListener('click', (event) => {
    container1.style.display = "none"
    container2.style.display = "block"
})

b2.addEventListener('click', (event) => {
    container1.style.display = "block"
    container2.style.display = "none"
})

container2.style.display = 'none'