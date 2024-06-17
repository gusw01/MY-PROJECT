const vscroll = document.getElementById("vscroll");
let vscrollPosition = 0;
vscroll.addEventListener("wheel", (event) => {
  // 스크롤 이벤트 발생 시 좌우로 스크롤 이동
  vscrollPosition += event.deltaY;
  vscroll.scrollLeft = vscrollPosition;
});
