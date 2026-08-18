function changeMessage() {
  var img = document.getElementById("smaeple-img");
  if (img) {
    img.src = "image1.png";
    console.log("자바 스크립트 로그를 찍을 수 있습니다");
  } else {
    console.error("이미지 요소를 찾을수없습니다");
  }
}
