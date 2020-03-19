/* sweetScroll load */
document.addEventListener("DOMContentLoaded", function () {
    const sweetScroll = new SweetScroll({
        offset: -50, // in pixels
    });
}, false)

// back to top buttons
document.getElementById('test').addEventListener('click', (event) => {
    document.getElementById('container1').scrollIntoView({
        behavior: "smooth"
    });    
})
