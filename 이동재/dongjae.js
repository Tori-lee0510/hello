// 페이지 진입 시 기본 값
window.addEventListener('DOMContentLoaded', function() {
  showContent('A');
});

function showContent(content) {
  var contentA = document.getElementById("contentA");
  var contentB = document.getElementById("contentB");
  var contentC = document.getElementById("contentC");
  var contentD = document.getElementById("contentD");
  var contentE = document.getElementById("contentE");
  var contentF = document.getElementById("contentF");
  var contentG = document.getElementById("contentG");
  var contentH = document.getElementById("contentH");
  var contentI = document.getElementById("contentI");
  var contentJ = document.getElementById("contentJ");

  // 내용 숨김
  contentA.style.display = "none";
  contentB.style.display = "none";
  contentC.style.display = "none";
  contentD.style.display = "none";
  contentE.style.display = "none";
  contentF.style.display = "none";
  contentG.style.display = "none";
  contentH.style.display = "none";
  contentI.style.display = "none";
  contentJ.style.display = "none";

  // 선택한 내용 보이기
  if (content === "A") {
    contentA.style.display = "block";
  } else if (content === "B") {
    contentB.style.display = "block";
  } else if (content === "C") {
    contentC.style.display = "block";
  } else if (content === "D") {
    contentD.style.display = "block";
  } else if (content === "E") {
    contentE.style.display = "block";
  } else if (content === "F") {
    contentF.style.display = "block";
  } else if (content === "G") {
    contentG.style.display = "block";
  } else if (content === "H") {
    contentH.style.display = "block";
  } else if (content === "I") {
    contentI.style.display = "block";
  } else if (content === "J") {
    contentJ.style.display = "block";
  }
}