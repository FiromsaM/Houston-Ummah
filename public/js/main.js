/* Toggle between adding and removing the "responsive" class to nav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}


const carouselContainers = [...document.querySelectorAll('.carousel-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

//carousel arrow to change images
carouselContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Get all elements with class="closebtn"
var close = document.getElementById("closebtn");
close.addEventListener('click', closeBtn)

function closeBtn(){
  this.parentElement.style.display='none';
}
