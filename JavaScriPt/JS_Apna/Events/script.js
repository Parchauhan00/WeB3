let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    console.log("btn1 was clicked");
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.elientY);
}

let box = document.querySelector("div");
box.onmouseover = () => {
    // Your code here for mouseover event
    console.log("You are inside Div")
};