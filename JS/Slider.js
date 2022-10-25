let slider = document.getElementById("slider-container");
var count = 1;
function setTrans() {
  slider.classList.remove("notrans");
  slider.classList.remove("trans");
  slider.classList.add("trans");
}
function removeTrans() {
  slider.classList.remove("notrans");
  slider.classList.remove("trans");
  slider.classList.add("notrans");
}
function autoplay() {
  if (count == 1) {
    setTrans();
    slider.style.transform = "translate(-28.57%)";
    count++;
  } else if (count == 2) {
    slider.style.transform = "translate(-42.85%)";
    count++;
  } else if (count == 3) {
    slider.style.transform = "translate(-57.14%)";
    count++;
  } else if (count == 4) {
    slider.style.transform = "translate(-71.42%)";
    count++;
  } else if (count == 5) {
    slider.style.transform = "translate(-85.71%)";
    count = 1;
    setTimeout(() => {
      removeTrans();
      slider.style.transform = "translate(-14.28%)";
    }, 200);
  }
}
let timer = setInterval(autoplay, 3000);

document.getElementById("right-button").addEventListener("click", () => {
  clearInterval(timer);
  if (count == 1) {
    setTrans();
    slider.style.transform = "translate(-28.57%)";
    count++;
  } else if (count == 2) {
    setTrans();
    slider.style.transform = "translate(-42.85%)";
    count++;
  } else if (count == 3) {
    setTrans();
    slider.style.transform = "translate(-57.14%)";
    count++;
  } else if (count == 4) {
    setTrans();
    slider.style.transform = "translate(-71.42%)";
    count++;
  } else if (count == 5) {
    setTrans();
    slider.style.transform = "translate(-85.71%)";
    count = 1;
    setTimeout(() => {
      removeTrans();
      slider.style.transform = "translate(-14.28%)";
    }, 200);
  }
  timer = setInterval(autoplay, 3000);
});
document.getElementById("left-button").addEventListener("click", () => {
  clearInterval(timer);
  if (count == 1) {
    setTrans();
    slider.style.transform = "translate(0%)";
    count = 5;
    setTimeout(() => {
      removeTrans();
      slider.style.transform = "translate(-71.42%)";
    }, 200);
    setTimeout(() => {
      setTrans();
    }, 250);
  } else if (count == 2) {
    setTrans();
    slider.style.transform = "translate(-14.28%)";
    count--;
  } else if (count == 3) {
    setTrans();
    slider.style.transform = "translate(-28.57%)";
    count--;
  } else if (count == 4) {
    slider.style.transform = "translate(-42.85%)";
    count--;
  } else if (count == 5) {
    setTrans();
    slider.style.transform = "translate(-57.14%)";
    count--;
  }
  timer = setInterval(autoplay, 3000);
});
//************************************************************************************ */

var s3RightButton = document.getElementById("s3-rs");
var s3LeftButton = document.getElementById("s3-ls");
var s3Slider = document.getElementById("s3-slider");

s3RightButton.addEventListener("click", () => {
  s3Slider.style.transform = "translateX(-4.3%)";
  s3RightButton.classList.remove("s3-active");
  s3RightButton.classList.add("s3-dormant");
  s3LeftButton.classList.remove("s3-dormant");
  s3LeftButton.classList.add("s3-active");
});

s3LeftButton.addEventListener("click", () => {
  s3Slider.style.transform = "translateX(0%)";
  s3RightButton.classList.remove("s3-dormant");
  s3RightButton.classList.add("s3-active");
  s3LeftButton.classList.remove("s3-active");
  s3LeftButton.classList.add("s3-dormant");
});

var s3sl = document.querySelectorAll(".s3-sl");
var s3slimg = document.querySelector(".s3img1");

for (i = 0; i < s3sl.length; i++) {
  s3sl[i].addEventListener("mouseenter", (e) => {
    let i_mg = e.target.getElementsByTagName("img")[0];
    i_mg.style.transform = "scale(1.05)";
  });
}
for (i = 0; i < s3sl.length; i++) {
  s3sl[i].addEventListener("mouseleave", (e) => {
    let i_mg = e.target.getElementsByTagName("img")[0];
    i_mg.style.transform = "scale(1)";
  });
}

// **********************************************************************************************
var s4RightButton = document.getElementById("s4-rs");
var s4LeftButton = document.getElementById("s4-ls");
var s4Slider = document.getElementById("s4-slider");

s4RightButton.addEventListener("click", () => {
  s4Slider.style.transform = "translateX(-23%)";
  s4RightButton.classList.remove("s4-active");
  s4RightButton.classList.add("s4-dormant");
  s4LeftButton.classList.remove("s4-dormant");
  s4LeftButton.classList.add("s4-active");
});

s4LeftButton.addEventListener("click", () => {
  s4Slider.style.transform = "translateX(0%)";
  s4RightButton.classList.remove("s4-dormant");
  s4RightButton.classList.add("s4-active");
  s4LeftButton.classList.remove("s4-active");
  s4LeftButton.classList.add("s4-dormant");
});

var s4sl = document.querySelectorAll(".s4-sl");

for (i = 0; i < s4sl.length; i++) {
  s4sl[i].addEventListener("mouseenter", (e) => {
    let i_mg = e.target.getElementsByTagName("img")[0];
    i_mg.style.transform = "scale(1.05)";
  });
}
for (i = 0; i < s4sl.length; i++) {
  s4sl[i].addEventListener("mouseleave", (e) => {
    let i_mg = e.target.getElementsByTagName("img")[0];
    i_mg.style.transform = "scale(1)";
  });
}
