var all_carousel_containers=document.getElementsByClassName("carousel"),all_carousel_objects=(all_carousel_containers=Array.from(all_carousel_containers)).map((e,t)=>({element:e,index_number:t,slide_index:1}));function changeSlide(e,t){showSlide(e.parentElement.parentElement.parentElement,t)}function currentSlide(e,t){showSlide(e.parentElement.parentElement,t=String(parseInt(t)-1))}function showSlide(e,t){var n=all_carousel_objects.filter(t=>{if(t.element===e)return t})[0],i=n.slide_index,a=e.querySelectorAll(".carousel__item--image"),o=e.querySelectorAll(".carousel__item--paragraph"),l=e.querySelectorAll(".carousel__dots");"+1"===t?i+=1:"-1"===t?i-=1:i=t,i>a.length-1&&(i=0),i<0&&(i=a.length-1);for(const e of a)e.style.display="none";for(const e of o)e.style.display="none";for(const e of l)e.className=e.className.replace(" active","");a[i].style.display="block",l[i].className+=" active",o[i].style.display="block",n.slide_index=i}for(carousel_container of all_carousel_containers)showSlide(carousel_container,0);const container_grid=document.getElementById("container-grid"),container_list=document.getElementById("container-list"),display_toggle=document.getElementById("display-toggle"),display_toggle_checkbox=document.getElementById("display-toggle-checkbox"),navigation=document.getElementById("navigation");var header_arrow=document.getElementById("section-header").querySelector(".header__scrolldown-link"),a_list=document.getElementsByTagName("nav")[0].querySelectorAll("a"),popup_containers=document.getElementsByClassName("popup");const EXTENSION="-overlay";function addStripExtension(e,t){return t?e+EXTENSION:e.split(EXTENSION)[0]}function change_header_arrow_href(e){var t=header_arrow.getAttribute("href");header_arrow.setAttribute("href",addStripExtension(t,e))}function change_hrefs(e){for(const n of a_list){var t=n.getAttribute("href");n.setAttribute("href",addStripExtension(t,e))}}function change_popup_close_href(e){for(let i of popup_containers){var t=i.querySelector(".popup__close"),n=t.getAttribute("href");t.setAttribute("href",addStripExtension(n,!e))}}function toggle_display(e){e?(container_grid.style.display="none",container_list.style.display="block",container_grid.style.visibility="hidden",container_list.style.visibility="visible"):(container_grid.style.display="block",container_list.style.display="none",container_grid.style.visibility="visible",container_list.style.visibility="hidden"),change_hrefs(e),change_header_arrow_href(e),change_popup_close_href(e)}display_toggle_checkbox.addEventListener("change",(function(){toggle_display(this.checked)})),container_list.style.display="none",change_popup_close_href(!1),window.addEventListener("scroll",()=>{window.pageYOffset>=.5*window.innerHeight?navigation.style.opacity=1:navigation.style.opacity=0}),navigation.style.opacity=0;const navigation_checkbox=document.getElementById("navi-toggle"),navigation_navcontainer=navigation.querySelector(".navigation__nav"),navigation_navlist=navigation.querySelector(".navigation__list"),navigation_navitem=navigation.querySelector(".navigation__item");[navigation_navcontainer,navigation_navlist,navigation_navitem].forEach((function(e){e.addEventListener("click",(function(e){this==e.target&&(navigation_checkbox.checked=!1)}))})),document.addEventListener("DOMContentLoaded",(function(){new SweetScroll({offset:0})}),!1);