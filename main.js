var value = 50; //biến toàn cầu
function a() {
  alert(value);
}
function b() {
  alert(value);
}
function c() {
  document.getElementById("a").innerHTML = typeof value;
}
function mOver(obj) {
  obj.innerHTML = "Thank You";
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me";
}
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "dây là từ cảm ơn";
}

function mUp(obj) {
  obj.style.backgroundColor = "black";
  obj.style.color = "white";
  obj.innerHTML = "Thank you";
}
// var addPT = document.getElementById("them").value;
// var emp = new Array("Java", "PHP", "C++");
// emp.push("Ball");
function Mang() {
  var addPT = document.getElementById("them").value;
  var emp = new Array("Java", "PHP", "C++");
  emp.push(addPT);
  document.getElementById("mang").innerHTML = emp;
}
// document.getElementById("mang").innerHTML = emp;

console.log(typeof value);
// document.getElementById(a)
// document.getElementById('a').innerHTML = typeof(value)
// document.writeln(" navigator.appCodeName: " + navigator.appCodeName);
//     document.writeln(" <br> navigator.appName: " + navigator.appName);
//     document.writeln(" <br> navigator.appVersion: " + navigator.appVersion);
//     document.writeln(" <br> navigator.cookieEnabled: "+ navigator.cookieEnabled);
//     document.writeln(" <br> navigator.language: " + navigator.language);
//     document.writeln(" <br> navigator.userAgent: " + navigator.userAgent);
//     document.writeln(" <br> navigator.platform: " + navigator.platform);
//     document.writeln(" <br> navigator.onLine: " + navigator.onLine);
    
//     document.writeln(" <br>History: " + history.length);
    
//     function go(){
//       document.writeln(" <br>History: " + history.back());
//       // document.writeln(" <br>Historyer: " + history.go("https://www.google.com.vn/?hl=vi"));
//     }
var x = document.cookie;
document.write("x: " + x)
