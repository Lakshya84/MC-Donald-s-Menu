var c = document.querySelector(".cursor");
var m = document.querySelector("body");
m.addEventListener("mousemove", function (details) {
  c.style.left = details.clientX + "px";
  c.style.top = details.clientY + "px";
});

var i = document.querySelectorAll(".main");
i.forEach(function (val) {
  val.addEventListener("mouseenter", function (det) {
    det.target.childNodes[3].style.opacity = 0.8;
    det.target.childNodes[3].style.positiom = "absolute";
  });
  val.addEventListener("mousemove", function (det) {
    det.target.childNodes[3].style.left = det.clientX + "px";
    det.target.childNodes[3].style.top = det.clientY + "px";
    det.target.childNodes[3].style.positiom = "absolute";
  });
  val.addEventListener("mouseleave", function (det) {
    det.target.childNodes[3].style.opacity = 0;
    det.target.childNodes[3].style.positiom = "absolute";
  });
});