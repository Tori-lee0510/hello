const personInfo = [
  { key: "이름", value: "정유석" },
  { key: "MBTI", value: "INFP" },
  { key: "최애음악", value: "balirun" },
  { key: "최애영화", value: "굿윌헌팅" },
  { key: "최애음식", value: "만두" },
  { key: "취미", value: "공연관람" },
  { key: "메세지", value: "사랑해요" }
];

const introduceMyself = document.querySelector("#introduce")

for (let i = 0; i < personInfo.length; i++) {
  const abc = () => {
    document.getElementById('iframe').contentWindow.document.getElementById('key').innerText = personInfo[i].key;
    document.getElementById('iframe').contentWindow.document.getElementById('value').innerText = personInfo[i].value;
  }
  const last = document.createElement("div")
  last.textContent = personInfo[i].key
  last.addEventListener("click", abc)
  last.classList.add(".link")

  introduceMyself.after(last)
}


// function link0() {
//   document.getElementById('iframe').contentWindow.document.getElementById('key').innerText = personInfo[0].key;
//   document.getElementById('iframe').contentWindow.document.getElementById('value').innerText = personInfo[0].value;
// }

// function link1() {
//   document.getElementById('iframe').contentWindow.document.getElementById('key').innerText = personInfo[1].key;
//   document.getElementById('iframe').contentWindow.document.getElementById('value').innerText = personInfo[1].value;
// }

// function link2() {
//   document.getElementById('iframe').contentWindow.document.getElementById('key').innerText = personInfo[2].key;
//   document.getElementById('iframe').contentWindow.document.getElementById('value').innerText = personInfo[2].value;
// }

// function link3() {
//   document.getElementById('iframe').contentWindow.document.getElementById('key').innerText = personInfo[3].key;
//   document.getElementById('iframe').contentWindow.document.getElementById('value').innerText = personInfo[3].value;
// }

// function link4() {
//   document.getElementById('iframe').contentWindow.document.getElementById('key').innerText = personInfo[4].key;
//   document.getElementById('iframe').contentWindow.document.getElementById('value').innerText = personInfo[4].value;
// }

// function link5() {
//   document.getElementById('iframe').contentWindow.document.getElementById('key').innerText = personInfo[5].key;
//   document.getElementById('iframe').contentWindow.document.getElementById('value').innerText = personInfo[5].value;
// }

// function link6() {
//   document.getElementById('iframe').contentWindow.document.getElementById('key').innerText = personInfo[6].key;
//   document.getElementById('iframe').contentWindow.document.getElementById('value').innerText = personInfo[6].value;
// }

const imgChange = document.getElementById('iframe').contentWindow.document.querySelector(".img")
imgChange.addEventListener("mouseover", () => {
  imgChange.src = "teacher.png";
});
imgChange.addEventListener("mouseout", () => {
  imgChange.src = "profile.png";
});