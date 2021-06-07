function toggleswitch(tag) {
  var x = document.getElementById(tag);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}