/* carousel callback functionality */
// create a unique ID per carousel
// https://stackoverflow.com/questions/45427313/implementing-multiple-carousels-on-a-single-page
var all_carousel_containers = document.getElementsByClassName("slideshow-container");
all_carousel_containers = Array.from(all_carousel_containers); // convert to Array prototype

// create an object containing the carousel container and its number
var all_carousel_objects = all_carousel_containers.map((e, i) => {
  return {
    "element": e,
    "index_number": i,
    "slide_index": 1
  }
})

// event handler for left and right arrows
function changeSlide(elem, n) {
  var carousel_container = elem.parentElement;
  showSlide(carousel_container ,n);
}

// event handler for dots
function currentSlide(elem, n) {
  var carousel_container = elem.parentElement.parentElement;
  n = parseInt(n);
  showSlide(carousel_container, n)
}

function showSlide(carousel_container, change) {
  // match carousel container with the all_carousel_object to get the index number
  var carousel_object = all_carousel_objects.filter((obj) => {
    if (obj.element === carousel_container) {
      return obj
    }
  })[0]

  // get necessary slide information from carousel object
  var slide_index = carousel_object.slide_index;

  // get slides
  var slides = carousel_container.querySelectorAll('.slideshow');

  // get dots
  var dots = carousel_container.querySelectorAll(".dot");

  // boolean statements to manage slide indexing
  if (change === "+1") {
    slide_index += 1;
  } else if  (change === "-1") {
    slide_index -= 1;
  } else {
    slide_index = change;
  }

  // logic to handle image change
  if (slide_index > slides.length) {
    slide_index = 1
  }    
  if (slide_index < 1) {
    slide_index = slides.length
  }
  for (const s of slides) {
    s.style.display = "none";
  }
  for (const d of dots) {
    d.className = d.className.replace(" active", "");
  }

  // hide and present slides/dots
  slides[slide_index-1].style.display = "block";  
  dots[slide_index-1].className += " active";  

  // update carousel object (array object indexing is pass by reference)
  carousel_object.slide_index = slide_index;
}

// initialize by showing the first slide of each carousel
for (carousel_container of all_carousel_containers) {
  showSlide(carousel_container, 1);
}