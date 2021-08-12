


//TEXT ANIMATION
let words = ["Programmer" , "Baseballer" , "Reader" , "Digital Passionate"]
// Check the path
if(window.location.pathname === "/assets/italian-version/index.html"){
    words = ["Programmatore" , "Baseballer" , "Lettore" , "Appassionato Digitale"]
}

let counter = 0
let word = document.querySelector(".animation-text")
setInterval(textAnimation, 1000)
function textAnimation(){
    word.innerHTML = words[counter]
    counter++
    if(counter >= words.length){
        counter=0
    }
}








