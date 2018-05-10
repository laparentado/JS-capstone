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
console.log(words[randomWord].split(""))

function showHint(){
  var dashes = words[randomWord].replace(/[a-z]/gi,"- ")
  hint.innerHTML = hints[randomWord]
  word.innerHTML = dashes
}
showHint()

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

  boxes[i].addEventListener("click", function(event){
    answer = event.target.innerHTML
    if(guessedLetters.indexOf(answer) !==-1){
      console.log("already guessed")
    }else if(words[randomWord].indexOf(answer) !==-1){
      word.innerHTML +=answer
      guessedLetters.push(answer)
      used.innerHTML = guessedLetters
    }else{
      guessedLetters.push("<b>"+answer+"</b>")
      used.innerHTML = guessedLetters
  }
  })
}
