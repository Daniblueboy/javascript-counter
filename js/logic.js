const num = document.getElementById("num");
const plus = document.getElementById("plus");
const min = document.getElementById("min");

var a = 7;

plus.addEventListener("click", () => {
    if(a <= 49){
    a += 1;
    num.innerHTML = a;
    } 
});

min.addEventListener("click", () => {
    if(a >= 1){
    a -= 1;
    num.innerHTML = a;
    }
})