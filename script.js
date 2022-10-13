const list = document.querySelector(".menu");
const bars = document.querySelector(".bars");
const scrolls = document.querySelectorAll(".scroll");

bars.addEventListener("click",function(){
    list.classList.toggle("show-menu");
    bars.classList.toggle("close");
})


// search
const search = document.querySelector(".search");
const inSearch = document.querySelector(".in-search");

search.addEventListener("click",function(){
    inSearch.classList.toggle("show-search")
    search.classList.toggle("x-search")
})


// slider

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlide = slides.length;
let slideNumber = 0;
// image slider next button
nextBtn.addEventListener("click",function(){
    slides.forEach(function(slide){
        slide.classList.remove("active")
    });
    slideIcons.forEach(function(slideIcon){
        slideIcon.classList.remove("active")
    });


    slideNumber++;


    if(slideNumber > (numberOfSlide - 1)){
        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");

})

// image slider prev button
prevBtn.addEventListener("click",function(){
    slides.forEach(function(slide){
        slide.classList.remove("active")
    });
    slideIcons.forEach(function(slideIcon){
        slideIcon.classList.remove("active")
    });


    slideNumber--;


    if(slideNumber < 0){
        slideNumber = numberOfSlide-1;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");

})
