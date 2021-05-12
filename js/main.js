'use strict';

const nav_Container = document.querySelector(".nav_container");
const topArrow = document.getElementById("topArrow");
const top_text1 = document. querySelector(".concept_item1");
const top_text2 = document. querySelector(".concept_item2");
const top_slider = document.getElementById("top_slider");
const concept_slider = document.getElementById("concept_slider");

const hum_bar = document.getElementById("hum_bar");
const cross_bar = document.getElementById("cross_bar");
const responsive_menu = document.getElementById("responsive_menu");


const top_images = [
    {
        id:'Mens',
        src:'mens.jpg'
    },
    {
        id:'Womens',
        src:'womans.jpg'
    },
    {
        id:'Kids',
        src:'kids.jpg'},
    {
        id:'Dogs',
        src:'dogs.jpg'},
    {
        id:'Books',
        src:'books.jpg'
    },
];


// top_slider
let top_index = 0 
setInterval(topSlider, 3000);

function topSlider (){
    if (top_index > top_images.length - 1){
        top_index = 0;
    }
    top_slider.src = `img/${top_images[top_index].src}`;
    concept_slider.innerText = `${top_images[top_index].id}`;
    top_index++;
}


// window scroll event----------------------------------------------------
window.addEventListener("scroll", () =>{
  const scroll_Height = window.pageYOffset;

// global nav
  if(scroll_Height > 220){
      nav_Container.classList.add("addBgWhite");
  }else{
      nav_Container.classList.remove("addBgWhite");
  }
console.log(scroll_Height);
// top_to_arrow
  if(scroll_Height > 3120){
    topArrow.classList.add("show_up");
  }else{
    topArrow.classList.remove("show_up");
  }
});



// widdow load event------------------------------------------------
window.addEventListener("load", () =>{
  top_text1.classList.add("text_slide1");
  top_text2.classList.add("text_slide1");
});



// humburger menu--------------------------------------------------
hum_bar.addEventListener("click", () =>{
    hum_bar.classList.add("banish");
    cross_bar.classList.add("show_menu");
    responsive_menu.classList.add("show_menu");
});

cross_bar.addEventListener("click", () =>{
    hum_bar.classList.remove("banish");
    cross_bar.classList.remove("show_menu");
    responsive_menu.classList.remove("show_menu");
});


