let words = ["Programmer" , "Baseballer" , "Reader" , "Digital Passionate"]
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