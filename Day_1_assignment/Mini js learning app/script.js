const scope ={
        bullet1:"Scope in JavaScript refers to the accessibility or visibility of variables.",
        bullet2:"JavaScript has 3 types of scope:",
        bullet3:"Block scope: Variables declared inside a { } block cannot be accessed from outside the block",
        bullet4:"Local scope: Variables declared within a JavaScript function, become LOCAL to the function",
        bullet5:"Global scope: variables that you declare outside of functions to the global execution context. These variables are in the global scope."
        };
const hoisting ={
    bullet1:"Hoisting is JavaScript's default behavior of finding variables and function declarations before actually executing the program.",
    bullet2:"It doesn't care about variable values. All it wants to know what variables are present in a program."
};
const constructor_function = {
    bullet1:"A constructor function is used to create objects.",
    bullet2:"To create an object from a constructor function, we use the 'new' keyword.",
    bullet3:"It is considered a good practice to capitalize the first letter of your constructor function."
};
const prototype = {
    bullet1:"In a simple language we can say that prototype is a blueprint.",
    bullet2:"Using prototype an original object from which a new object is created."
};
localStorage.setItem("scope",JSON.stringify(scope));
localStorage.setItem("Hoisting",JSON.stringify(hoisting));
localStorage.setItem("Constructor_function",JSON.stringify(constructor_function));
localStorage.setItem("Prototype",JSON.stringify(prototype));
document.querySelector("#scope").addEventListener("click",show);
document.querySelector("#hoisting").addEventListener("click",show_hoist);
document.querySelector("#constructor-functions").addEventListener("click",show_const_function);
document.querySelector("#prototype").addEventListener("click",show_prototype);
function show(){
    document.querySelector("ul").innerText = "";
    document.querySelector(".icon").innerHTML = "";
     let data = JSON.parse(localStorage.getItem("scope"));
    for(let key in data){
        let listItem = document.createElement("li");
        listItem.innerText = data[key];
        listItem.style.color = "white";
        document.querySelector("h1").innerText = document.querySelectorAll("button")[0].innerText;
        document.querySelector("ul").append(listItem);
    }
    let iframe = document.createElement("iframe");
    iframe.setAttribute("src","https://www.youtube.com/embed/UDHROiqYI5o");
    iframe.setAttribute("width","650");
    iframe.setAttribute("height","395");
    iframe.setAttribute("frameborder","none");
    // iframe.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    iframe.setAttribute("allowfullscreen","true");
    document.querySelector(".icon").append(iframe);
};
function show_hoist(){
    document.querySelector("ul").innerText = "";
    document.querySelector(".icon").innerHTML = "";
    let data = JSON.parse(localStorage.getItem("Hoisting"));
   for(let key in data){
       let listItem = document.createElement("li");
       listItem.innerText = data[key];
       listItem.style.color = "white";
       document.querySelector("h1").innerText = document.querySelectorAll("button")[1].innerText;
       document.querySelector("ul").append(listItem);
   }
   let iframe = document.createElement("iframe");
   iframe.setAttribute("src","https://www.youtube.com/embed/UDHROiqYI5o");
   iframe.setAttribute("width","650");
   iframe.setAttribute("height","395");
   iframe.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
   iframe.setAttribute("allowfullscreen","true");
   document.querySelector(".icon").append(iframe);
};

function show_const_function(){
    document.querySelector("ul").innerText = "";
    document.querySelector(".icon").innerHTML = "";
    let data = JSON.parse(localStorage.getItem("Constructor_function"));
   for(let key in data){
       let listItem = document.createElement("li");
       listItem.innerText = data[key];
       listItem.style.color = "white";
       document.querySelector("h1").innerText = document.querySelectorAll("button")[2].innerText;
       document.querySelector("ul").append(listItem);
   }
   let iframe = document.createElement("iframe");
   iframe.setAttribute("src","https://www.youtube.com/embed/UDHROiqYI5o");
   iframe.setAttribute("width","650");
   iframe.setAttribute("height","395");
   iframe.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
   iframe.setAttribute("allowfullscreen","true");
   document.querySelector(".icon").append(iframe);
};
function show_prototype(){
    document.querySelector("ul").innerText = "";
    document.querySelector(".icon").innerHTML = "";
    let data = JSON.parse(localStorage.getItem("Prototype"));
   for(let key in data){
       let listItem = document.createElement("li");
       listItem.innerText = data[key];
       listItem.style.color = "white";
       document.querySelector("h1").innerText = document.querySelectorAll("button")[3].innerText;
       document.querySelector("ul").append(listItem);
   }
   let iframe = document.createElement("iframe");
   iframe.setAttribute("src","https://www.youtube.com/embed/UDHROiqYI5o");
   iframe.setAttribute("width","650");
   iframe.setAttribute("height","395");
   iframe.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
   iframe.setAttribute("allowfullscreen","true");
   document.querySelector(".icon").append(iframe);
};