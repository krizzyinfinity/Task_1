var button = document.getElementById("myBttn");

var paragraph = document.getElementById("myParagraph");
function hideBttn() {
  button.style.display = "none";

  paragraph.style.display = "block";

  setTimeout(() => {
    button.style.display = "block";
    paragraph.style.display = "none";
  }, 5000);
}
