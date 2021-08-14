


//TEXT ANIMATION
let words = ["Programmer" , "Baseballer" , "Reader" , "Digital Passionate" , "Video Gamer"]
// Check the path
if(window.location.pathname === "/assets/italian-version/index.html"){
    words = ["Programmatore" , "Baseballer" , "Lettore" , "Appassionato Digitale" , "Video Gamer"]
}

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








