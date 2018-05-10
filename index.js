var hint = document.getElementsByClassName("hint")[0];
var word = document.getElementsByClassName("word")[0];
var used = document.getElementsByClassName("used")[0];
var guess = document.getElementsByClassName("guess")[0];
var submit = document.getElementsByClassName("submit")[0];

var letterWrapper = document.createElement("div")
letterWrapper.style.width = "90%";
letterWrapper.style.margin = '0 auto'
letterWrapper.style.border = '1px solid'
document.body.appendChild(letterWrapper)


function Words(word, hint){
  this.word = word;
  this.hint = hint;
}

var word1 = new Words("word","it's word")
var word2 = new Words("hat", "goes on head")

var rounds = [word1, word2]

console.log(rounds[1].hint)

function hinting(){
  for(i=0; i<rounds.length;i++){
    hint.innerHTML = rounds[i].hint
  }
}
hinting()

function number(){
  for (let i=0; i<rounds.word.length;i++){
  word.innerHTML = rounds[i].word[i].length
}
}

function guessing(){

  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  for(let i=0; i<alphabet.length;i++){
    var alpha = document.createElement("div")
    alpha.style.width ="20px"
    alpha.style.border =  "1px solid"
    alpha.style.display = "inline-block"
    alpha.style.textAlign = "center"
    alpha.classList.add("letter")
    alpha.innerHTML = alphabet[i]
    letterWrapper.appendChild(alpha)
    var boxes = document.getElementsByClassName("letter")
    boxes[i].addEventListener("click", function(event){
      // for(let i=0; i<rounds.length;i++){
      //   for(let j=0; j<rounds[i].word.split("").length;j++){
      //     console.log(rounds[i].word.split(""))
      //   }
      //
      // }
      var guesses = []
      var guessed = (event.target.innerHTML)
        guesses.push(guessed)


        for(i=0; i<rounds.length;i++){
          var split = rounds[i].word.split("")
          if(split[i] == guessed){
          split.splice(i, 1, guessed)
          word.innerHTML += guessed
          console.log(split)
          console.log(guessed)

          }else{

          used.innerHTML += guesses
          console.log(guesses)
          }
        }

    })

}
}
guessing()

//TRY ONE
// for(let j=0; j<rounds.length;j++){
// for(let i=0; i<rounds.length;i++){
// var guessed = (event.target.innerHTML)
// var wordSplit = rounds[i].word[i].split("")
// var guesses = []
//
// if(wordSplit.indexOf(guessed) !== -1){
//   console.log(wordSplit)
//   word.innerHTML += guessed
//   guesses.push(guessed)
// }else{
//   guesses.push(guessed)
//   used.innerHTML += guessed
// }
// }
//}

// function Words(word, hint){
//   this.word = word;
//   this.hint = hint;
// }
// var word1 = new Words("shoe", "goes on foot")
// var word2 = new Words("hat","goes on head")
// //var word3 = new Words("dog", "man's best friend")
// //var word4 = new Words("moon", "my favorite")
// //var word5 = new Words("hello", "common greeting")
//
// //push words and hints to new empty array
// var games = []
// games.push(word1,word2
//   //,word3,word4,word5
// )
// console.log(games)
//
//
// //shows hint on the screen
// function hinting(){
//   for(i=0; i<games.length;i++){
//     hint.innerHTML = games[i].hint
//   }
// }
// hinting()
//
// function wording(){
//   var guesses = []
//   guesses.push(guess.value)
//   var usedLetters = []
//
//   for(i=0; i<games.length;i++){
//     var split = games[i].word.split("")
//     if(split[i] == guesses[0]){
//     split.splice(i, 1, guesses[0])
//     word.innerHTML += guesses[0]
//
//     }else{
//     usedLetters.splice(i,0,guesses)
//     used.innerHTML = usedLetters
//     }
//   }
//
//   console.log(guess.value)
//   console.log(split)
//
// }
//
//
// submit.addEventListener("click", function(){
// wording()
// })
