let slideshow = document.getElementById("slideshow");
// console.log(slideshow);
let i = 0;
let images = ["../img/main.jpg" , "../img/slide1.jpg" , "../img/slide2.jpg" , "../img/slide3.png" , "../img/slide4.png" , "../img/slide5.png", "../img/slide6.png", "../img/slide7.png"];
autoslide();
function autoslide(){
    if(i < images.length){
        i++;
    }else{
        i = 1;
    }
    slideshow.innerHTML = "<img class='myslides' src=" + '"' + images[i-1] + '"' + " alt=image>";
}
setInterval(autoslide, 10000);


