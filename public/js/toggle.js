document.getElementById('toggle').addEventListener('click', myFunction)


function myFunction() {
  let x = document.getElementById("myInfo");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

