window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var backToTopBtn = document.getElementById("backToTopBtn");
  var backToTopBtn2 = document.getElementById("backToTopBtn2");
  var headerHeight = document.querySelector('header').clientHeight;

  if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
    backToTopBtn.style.display = "block";
    backToTopBtn2.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
    backToTopBtn2.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
