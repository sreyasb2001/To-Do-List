const input = document.getElementById("input-txt");
const list = document.getElementById("list-container");
function addTask(){
    if(input.value === ' '){
        alert("Write something!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
 }

 list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
 });

 function saveData(){
    localStorage.setItem("data", list.innerHTML);
 }

 function showData(){
    list.innerHTML = localStorage.getItem("data");
 }
 showData();