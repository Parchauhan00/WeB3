let div = document.querySelectorAll("div")
console.dir(div);

 let id= div.getAttribute("id");
 console.log(id);

 let para = document.querySelector("p");
 console.log(para.getAttribute)

 console.log(para.setAttribute("class", "new class"));

 let div2 = document.querySelector("div");
 div2.style;

 div.style.backgroundColor = "green";
 div.style.font 

 let newBtn = document.createElement("button");
 newBtn.innerText = "click me!";
 console.log(newBtn);

 let div3 = document.querySelector("div");
 div3.append(newBtn);

 let newheading = document.createElement( "h1");
 newheading.innerHTML = "<i>, I am new!</i>";

 document.querySelector("body").prepend(newheading);
 let para2 = document.querySelector("p");
 para2.remove()
