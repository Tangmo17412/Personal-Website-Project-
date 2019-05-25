
 //------------------------------------Javascript of nav top hide bar

window.onscroll = function() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  }
  else{
    document.getElementById("navbar").style.top = "-80px";
    document.getElementById("navbar").style.boxShadow = "none";
  }
}
 

 //------------------------------------Javascript of slide card friend
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
 
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
