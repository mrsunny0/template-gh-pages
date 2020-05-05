// find containers and buttons
var container_grid = document.getElementById('container-grid');
var container_link = document.getElementById('container-link');
var button_grid = container_grid.querySelector('.button');
var button_link = container_link.querySelector('.button');
var button_footer = document.getElementById('button-footer');

// get nav wrapper and footer button hrefs
var nav_a = document.getElementsByTagName('nav')[0]
    .querySelectorAll('a');
var footer_a = document.getElementById('button-footer')
    .querySelector('a')
var a_list = [...nav_a, footer_a]
a_list.shift()

// create two lists of hrefs with original and original+overlay suffix
var hrefs = a_list.map((a) => {
    return a.getAttribute('href')
})
var suffix = "-overlay"
var hrefs_overlay = hrefs.map((href) => {
    return href+suffix
})

// create function to toggle between original and overlay hrefs
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

// add event handlers to buttons
button_grid.addEventListener('click', (event) => {
    container_grid.style.display = "none"
    container_link.style.display = "block"
    button_grid = 'none'
    button_link = 'block'
    change_hrefs(true)
})

button_link.addEventListener('click', (event) => {
    container_grid.style.display = "block"
    container_link.style.display = "none"
    button_grid = 'block'
    button_link = 'none'
    change_hrefs(false)
})

// change to fixed position once scrolled into
window.addEventListener('scroll', () => {
    // innerHeight is 100vh in javascript html viewport meta
    // grid and link button on/off using opacity changes
    if (window.pageYOffset >= window.innerHeight * 0.875) {
        button_grid.style.opacity = 1
        button_link.style.opacity = 1
        button_footer.style.opacity = 1
    } else {
        // button_grid.style.display = 'none'
        button_link.style.opacity = 0
        button_grid.style.opacity = 0
        button_footer.style.opacity = 0
    }
})

// initial link container off and 0 opacity buttons
container_link.style.display = 'none'
button_grid.style.opacity = 0
button_link.style.opacity = 0
button_footer.style.opacity = 0


