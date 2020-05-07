// find containers and buttons
var container_grid = document.getElementById('container-grid');
var container_list = document.getElementById('container-list');
var checkbox_toggle = document.getElementById("toggle-checkbox");
var navup_button = document.getElementById('navup-button');

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
checkbox_toggle.addEventListener("change", function() {
    toggle_display(this.checked)
})

container_list.style.display = 'none'


// add event handlers to buttons
// button_grid.addEventListener('click', (event) => {
//     container_grid.style.display = "none"
//     container_list.style.display = "block"
//     button_grid = 'none'
//     button_link = 'block'
//     change_hrefs(true)
// })

// button_link.addEventListener('click', (event) => {
//     container_grid.style.display = "block"
//     container_list.style.display = "none"
//     button_grid = 'block'
//     button_link = 'none'
//     change_hrefs(false)
// })

// // change to fixed position once scrolled into
// window.addEventListener('scroll', () => {
//     // innerHeight is 100vh in javascript html viewport meta
//     // grid and link button on/off using opacity changes
//     if (window.pageYOffset >= window.innerHeight * 0.875) {
//         button_grid.style.opacity = 1
//         button_link.style.opacity = 1
//         button_footer.style.opacity = 1
//     } else {
//         // button_grid.style.display = 'none'
//         button_link.style.opacity = 0
//         button_grid.style.opacity = 0
//         button_footer.style.opacity = 0
//     }
// })

// initial link container off and 0 opacity buttons
// button_grid.style.opacity = 0
// button_link.style.opacity = 0
// button_footer.style.opacity = 0


