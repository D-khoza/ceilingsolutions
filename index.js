function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function (e) {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && e.key === 'U') ||
    (e.ctrlKey && e.key === 'Shift') ||
    (e.ctrlKey && e.key === 'J')
  ) {
    e.preventDefault();
    alert("Access to developer tools is disabled.");
  }
});