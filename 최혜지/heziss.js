document.getElementById("toggleBtn").addEventListener("click", function () {
  const list = document.getElementById("list");
  if (list.style.display == "none") {
    list.style.display = "block"; //숨김 해제
  } else {
    list.style.display = "none"; //숨김
  }
});

const name = document.getElementById("name");
name.addEventListener("click", function () {
  this.style.color = "#ec6d7e";
});
