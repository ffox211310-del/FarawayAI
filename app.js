window.addEventListener("load", () => {

const loadingText =
document.getElementById("loadingText");

const loadingScreen =
document.getElementById("loadingScreen");

const chatApp =
document.getElementById("chatApp");

const steps = [

"通信船に連絡中...",

"既読\n現在出港準備中...",

"通信船が移動中...",

"Farawayが到着しました"

];

let i = 0;

const timer = setInterval(() => {

i++;

if(i < steps.length){

loadingText.innerText = steps[i];

}else{

clearInterval(timer);

setTimeout(() => {

loadingScreen.style.display = "none";

chatApp.style.display = "flex";

},1000);

}

},2000);

});
