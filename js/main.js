function showLinks() {
  let x = document.getElementsByClassName("menu")[0];
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

let valueBefore = window.innerWidth;

function onresize(event) {
  if (valueBefore - window.innerWidth > 0) {} else {
      if (window.innerWidth >= 850) {
          document.getElementsByClassName("menu")[0].style.display = "none";
      }
  }

  valueBefore = window.innerWidth;
}

window.onresize = onresize;