let btn1 = document.getElementById("btn1");
btn1.addEventListener('click',()=>{
    var workerobj= new Worker("worker.js");
    workerobj.postMessage("start worker");
    workerobj.onmessage= function(e){
    }
    document.querySelector('#output').innerHTML += result;
})

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",()=>{
    document.querySelector("#hi").innerHTML +="** Hi **"
})