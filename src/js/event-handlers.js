// find containers and buttons
const container_grid = document.getElementById('container-grid');
const container_list = document.getElementById('container-list');
const display_toggle = document.getElementById("display-toggle-checkbox");
const scrollup_button = document.getElementById('scrollup-button');
const navigation = document.getElementById('navigation');

/***********************
 * toggle anchors
 ***********************/
// get nav wrapper and footer button hrefs
var nav_a = document.getElementsByTagName('nav')[0]
    .querySelectorAll('a');
var a_list = [...nav_a];

// create two lists of hrefs with original and original+overlay suffix
var hrefs = a_list.map((a) => {
    return a.getAttribute('href')
})
var suffix = "-overlay"
var hrefs_overlay = hrefs.map((href) => {
    return href+suffix
})

// create function to toggle between original and overlay hrefs
// this means changing the href from the navigation to the 
// new -overlay hrefs or vice-versa
function change_hrefs(bool) {
    if (bool) {
        new_hrefs = hrefs_overlay
    } else {
        new_hrefs = hrefs
    }
    a_list.forEach((a, i) => {
        a.setAttribute('href', new_hrefs[i])
    })
}

/***********************
 * toggle display types
 ***********************/
// function to control visibility and display of the container
// block when toggled
function toggle_display(bool) {
    // if checked to list view
    if (bool) {
        container_grid.style.display = "none"
        container_list.style.display = "block"
        container_grid.style.visibility = "hidden"
        container_list.style.visibility = "visible"
    } 
    // default (unchecked) is grid view
    else {
        container_grid.style.display = "block"
        container_list.style.display = "none"
        container_grid.style.visibility = "visible"
        container_list.style.visibility = "hidden"
    }

    // change ref links
    change_hrefs(bool)
}

// add event handler to checkbox
display_toggle.addEventListener("change", function() {
    toggle_display(this.checked)
})

// initial state
container_list.style.display = 'none'

/***********************
 * toggle scroll hide
 ***********************/
// change to fixed position once scrolled into
window.addEventListener('scroll', () => {
    // innerHeight is 100vh in javascript html viewport meta
    // grid and link button on/off using opacity changes
    if (window.pageYOffset >= window.innerHeight * 0.1) {
        scrollup_button.style.opacity = 1
    } else {
        scrollup_button.style.opacity = 0
    }

    if (window.pageYOffset >= window.innerHeight) {
        display_toggle.style.opacity = 1
    } else {
        display_toggle.style.opacity = 0
    }
})

// initial states
scrollup_button.style.opacity = 0
display_toggle.style.opacity = 0

/***********************
 * toggle scroll hide
 ***********************/
const navigation_navbar = navigation.querySelector(".navigation__nav");
const navigation_checkbox = document.getElementById("navi-toggle");

navigation_navbar.addEventListener("click", function(event) {
    // check to see if this is actually the target
    // rather than a child click on li a links
    if (this == event.target) {
        navigation_checkbox.checked = false;
    }
})