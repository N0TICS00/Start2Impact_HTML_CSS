'use strict';


//TEXT ANIMATION
let words = ["Programmatore" , "Baseballer" , "Lettore" , "Appassionato Digitale" , "Video Gamer"]



let counter = 0
let word = document.querySelector(".animation-text")
setInterval(textAnimation, 1000)
function textAnimation(){
    word.innerHTML = words[counter] //Change the Text 
    counter++
    if(counter >= words.length){
        counter=0
    }
}







