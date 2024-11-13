// let body = document.querySelector("body");
// let btn = document.createElement("button");
// let ip = document.createElement("input");
// body.append(ip);
// btn.innerText = "Click me";
// body.append(btn);

// let h1 = document.createElement("h1");
// h1.innerText = "DOM Practice";
// h1.style.color = "purple";
// h1.style.textDecoration = "underline";
// body.append(h1);

// let para = document.createElement("p");
// para.innerHTML = "Apna College <b>Delta</b> Practice";
// body.appendChild(para);

//for only one btn
// let btn = document.querySelector("button");
// btn.onclick = function () {
//   alert("hello");
// };

//for multiple btns
// let btns = document.querySelectorAll("button");
// for (a of btns) {
//   a.onclick = function () {
//     alert("hello world");
//   };
// }
//onmouseenter
// let btns = document.querySelectorAll("button");
// for (a of btns) {
//   a.onmouseenter = function () {
//     console.log("u r in button");
//   };
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", randomcolor);
// function randomcolor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);
//   let color = `rgb(${red},${green},${blue})`;
//   let h3 = document.querySelector("h3");
//   h3.innerText = color;
//   let div = document.querySelector("div");
//   div.style.backgroundColor = color;
// }

// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//   console.log("para was clicked");
// });

// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let btn = document.querySelector("button");
// function color() {
//   console.log(this.innerText);
//   this.style.backgroundColor = "red";
// }
// h1.addEventListener("click", color);
// h3.addEventListener("click", color);
// btn.addEventListener("click", color);
// p.addEventListener("click", color);

// let ip = document.querySelector("input");
// ip.addEventListener("keydown", function (event) {
//   console.log(event.key);
//   console.log(event.code);
//   console.log(`${event.key} is pressed`);
//   if (event.code == "KeyU") {
//     console.log("character moves up");
//   } else if (event.code == "KeyD") {
//     console.log("character moves down");
//   } else if (event.code == "KeyL") {
//     console.log("character moves left");
//   } else if (event.code == "KeyR") {
//     console.log("character moves right ");
//   }
// });

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   alert("form is submitted");
//   // let u = document.querySelector("#user");
//   // let p = document.querySelector("#pass");
//   // console.log(u.value);
//   // console.log(p.value);
//   let u = this.elements[0];
//   let p = this.elements[1];
//   console.log(u.value);
//   console.log(p.value);
// });

// let ip = document.querySelector("input");
// // ip.addEventListener("change", function () {
// //   console.log("input changed");
// //   console.log(this.value);
// // });
// // ip.addEventListener("input", function () {
// //   console.log(this.value);
// // });
// let para = document.querySelector("p");
// ip.addEventListener("input", function () {
//   console.log(this.value);
//   para.innerText = this.value;
// });

//pq2
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   btn.style.color = "green";
// });

// let ip = document.querySelector("input");
// ip.addEventListener("input", function () {
//   console.log(this.value);
//   let h2 = document.querySelector("h2");
//   h2.innerText = this.value;
// });

//miniproject
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");
// div.addEventListener("click", function () {
//   console.log("div was clicked");
// });
// ul.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("ul was clicked");
// });
// for (li of lis) {
//   li.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("li was clicked");
//   });
// }

//todoapp start
// let input = document.querySelector("input");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   let newli = document.createElement("li");
//   newli.innerText = input.value;
//   input.value = "";
//   ul.appendChild(newli);
//   let delbtn = document.createElement("button");
//   delbtn.innerText = "Delete";
//   delbtn.classList.add("delete");
//   newli.appendChild(delbtn);
// });
// ul.addEventListener("click", function (event) {
//   if (event.target.nodeName == "BUTTON") {
//     let parent = event.target.parentElement;
//     parent.remove();
//   }
// });

// // let del = document.querySelectorAll(".delete");
// // for (a of del) {
// //   a.addEventListener("click", function () {
// //     let parent = this.parentElement;
// //     parent.remove();
// //   });
// // }
//todoapp end
