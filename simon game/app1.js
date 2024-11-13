let gameseq = [];
let userseq = [];
let level = 0;
let started = false;
let arr = ["red", "green", "blue", "yellow"];
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});
function flash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}
function checkAns(idx) {
  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) setTimeout(levelUp, 1000);
  } else {
    h3.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}
function levelUp() {
  userseq = [];
  level++;
  h3.innerText = `Level ${level}`;
  let ranid = Math.floor(Math.random() * 4);
  let rancol = arr[ranid];
  let ranclass = document.querySelector(`.${rancol}`);
  // console.log(ranid);
  // console.log(rancol);
  // console.log(ranclass);
  gameseq.push(rancol);
  console.log(gameseq);
  flash(ranclass);
}
function btnpress() {
  let btn = this;
  userflash(btn);
  usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  checkAns(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}
function reset() {
  started = false;
  userseq = [];
  gameseq = [];
  level = 0;
}
