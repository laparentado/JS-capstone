var hint = document.getElementsByClassName("hint")[0];
var word = document.getElementsByClassName("word")[0];
var used = document.getElementsByClassName("used")[0];
var guess = document.getElementsByClassName("guess")[0];

function Words(word, hint){
  this.word = word;
  this.hint = hint;
}

var word1 = new Words("hello", "common greeting")
var word2 = new Words("hat", "headwear")
var word3 = new Words("word","duh")

var words=[]
words.push(word1.word, word2.word, word3.word)
var hints=[]
hints.push(word1.hint, word2.hint, word3.hint)
var answer = ""
var guessedLetters = []

var randomWord = Math.floor(Math.random()* words.length)
var letterArray = words[randomWord].toLowerCase().split("")
console.log(letterArray)

var dashes = letterArray.map(function(x){return "_"})
console.log(dashes)
hint.innerHTML = hints[randomWord]
word.innerHTML = dashes.join(" ")


var letterWrapper = document.createElement("div")
letterWrapper.style.margin = '0 auto'
letterWrapper.style.border = '1px solid'
document.body.appendChild(letterWrapper)

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

for(let i=0; i<alphabet.length;i++){
  var alpha = document.createElement("div")
  alpha.style.width ="20px"
  alpha.style.border =  "1px solid"
  alpha.style.display = "inline-block"
  alpha.style.textTransform = "uppercase"
  alpha.classList.add("letter")
  alpha.innerHTML = alphabet[i]
  letterWrapper.appendChild(alpha)
  var boxes = document.getElementsByClassName("letter")

  boxes[i].addEventListener("click", function(){
    // answer = event.target.innerHTML
    if(guessedLetters.indexOf(boxes[i].innerHTML) !==-1){
      console.log("already guessed")
    }else {


      if(letterArray.includes(boxes[i].innerHTML)){
      for(let j=0; j<letterArray.length;j++){
        if(letterArray[j] === boxes[i].innerHTML){
        dashes.splice(j, 1, boxes[i].innerHTML)
        }
      }
      word.innerHTML = dashes.join(" ")
    }else{
      alert("you win")
      window.location.reload(true)

  }
  guessedLetters.push(boxes[i].innerHTML)
  used.innerHTML = guessedLetters

}
  })
}
