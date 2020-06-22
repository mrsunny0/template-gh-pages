/**
 * carousel callback functionality 
 */

// create a unique ID per carousel
// https://stackoverflow.com/questions/45427313/implementing-multiple-carousels-on-a-single-page
var all_carousel_containers = document.getElementsByClassName("carousel");
all_carousel_containers = Array.from(all_carousel_containers); // convert to Array prototype

// create an object containing the carousel container and its number
var all_carousel_objects = all_carousel_containers.map((e, i) => {
    return {
        "element": e,
        "index_number": i,
        "slide_index": 0
    }
})

// event handler for left and right arrows
// get carousel div that holds that carousel group
function changeSlide(elem, n) {
    var carousel_container = elem.parentElement.parentElement.parentElement;
    showSlide(carousel_container, n);
}

// event handler for dots
function currentSlide(elem, n) {
    var carousel_container = elem.parentElement.parentElement;
    showSlide(carousel_container, parseInt(n) - 1)
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
    var slides = carousel_container.querySelectorAll('.carousel__item--image');

    // get paragraphs
    var paragraphs = carousel_container.querySelectorAll('.carousel__item--paragraph');

    // get dots
    var dots = carousel_container.querySelectorAll(".carousel__dots");

    // boolean statements to manage slide indexing for arrows
    if (change === "+1") {
        slide_index += 1;
    } 
    else if  (change === "-1") {
        slide_index -= 1;
    } 

    // boolean indexing for dots
    if (typeof(change) == "number" ) {
        slide_index = change;
    }

    // wrap back number if too large or too little
    if (slide_index > slides.length-1) {
      slide_index = 0
    }    
    if (slide_index < 0) {
        slide_index = slides.length -1
    }

    // hide everything first
    for (const s of slides) {
        s.style.display = "none";
    }
    for (const p of paragraphs) {
        p.style.display = "none";
    }
    for (const d of dots) {
        d.className = d.className.replace(" active", "");
    }

    // hide and present slides/dots
    slides[slide_index].style.display = "flex";  
    dots[slide_index].className += " active";  
    paragraphs[slide_index].style.display = "flex";

    // update carousel object (array object indexing is pass by reference)
    carousel_object.slide_index = slide_index;
}

// initialize by showing the first slide of each carousel
// and create timer for each set of carousel in a group
var carousel_group = ""
var group_timer = 0
var mmax = 30, mmin = 15
var interval_list = []
for (let carousel_container of all_carousel_containers) {
    // show first slide
    showSlide(carousel_container, 0);

    // get carousel group id
    var new_carousel_group = carousel_container.parentElement.parentElement.parentElement.id
    if (carousel_group !== new_carousel_group) {
        carousel_group = new_carousel_group
        group_timer = Math.floor((Math.random() * (mmax - mmin) + mmin) * 1e3) 
    }

    // set interval
    interval_list.push(
            setInterval(() => {
            showSlide(carousel_container, "+1")
        }, group_timer)
    )
}