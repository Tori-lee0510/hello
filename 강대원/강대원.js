const main = document.querySelector('#main');

const introduce = [
  '안녕하세요! 저는 3팀 강대원입니다!',
  'MBTI: ISTJ',
  '좋아하는 노래: LANY - Super Far',
  '좋아하는 영화: 씽2게더',
  '좋아하는 음식: 장어덮밥, 닭갈비, 삼겹살, 탕수육, 꿔바로우, 배, 족발, 막국수',
  '싫어하는 음식: 고수, 생새우',
  '취미: 산책, 헬스, 독서, 웹소설, 웹툰',
  '기타: 최근에 스케이팅하고 수영 하고 있어요!',
];

main.addEventListener('click', function (e) {
  e.target.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
});

main.addEventListener('mouseover', function (e) {
  if (e.target !== main) {
    e.target.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  }
});

const text = document.querySelector('.sec-text');
const textLoad = () => {
  let index = 0;
  setInterval(() => {
    text.textContent = introduce[index];
    index = (index + 1) % introduce.length;
  }, 4000);
};
textLoad();
