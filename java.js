function change0() {
    document.getElementById("back-iamge-sec").style.backgroundImage = "url('./pic/back.webp')";
}

function change1() {
    document.getElementById("back-iamge-sec").style.backgroundImage = "url('./pic/back2.webp')";
}

function change2() {
    document.getElementById("back-iamge-sec").style.backgroundImage = "url('./pic/back3.webp')";
}

function change3() {
    document.getElementById("back-iamge-sec").style.backgroundImage = "url('./pic/back4.webp')";
}

function change4() {
    document.getElementById("back-iamge-sec").style.backgroundImage = "url('./pic/back5.webp')";
}

function change5() {
    document.getElementById("back-iamge-sec").style.backgroundImage = "url('./pic/back6.webp')";
}

function change6() {
    document.getElementById("back-iamge-sec").style.backgroundImage = "url('./pic/back7.webp')";
}

function closeside() {
  document.getElementById("float-side").style.width = "0px%";
  document.getElementById("float-side").style.visibility = "hidden";
  document.getElementById("float-side").style.opacity = "0";
  document.getElementById("float-side").style.transition = "0.3s linear";
}

function openside() {
  document.getElementById("float-side").style.visibility = "visible";
  document.getElementById("float-side").style.opacity = "1";
  document.getElementById("float-side").style.width = "100%";
  document.getElementById("float-side").style.transition = "0.3s linear";
  document.getElementById("big-all").style.position = "fixed";
}