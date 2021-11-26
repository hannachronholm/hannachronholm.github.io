// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    document.getElementById("desktop-menu").style.top = "0";
  } else {
    document.getElementById("desktop-menu").style.top = "-54px";
  }
}
