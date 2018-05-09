var hint = document.getElementsByClassName("hint")[0];
var word = document.getElementsByClassName("word")[0];
var used = document.getElementsByClassName("used")[0];
var guess = document.getElementsByClassName("guess")[0];
var submit = document.getElementsByClassName("submit")[0];

function Words(word, hint){
  this.word = word;
  this.hint = hint;
}
var word1 = new Words("shoe", "goes on foot")
var word2 = new Words("hat","goes on head")
//var word3 = new Words("dog", "man's best friend")
//var word4 = new Words("moon", "my favorite")
//var word5 = new Words("hello", "common greeting")

//push words and hints to new empty array
var games = []
games.push(word1,word2
  //,word3,word4,word5
)
console.log(games)


//shows hint on the screen
function hinting(){
  for(i=0; i<games.length;i++){
    hint.innerHTML = games[i].hint
  }
}
hinting()

function wording(){
  // var guesses = []
  // guesses.push(guess.value)
  var usedLetters = []

  for(i=0; i<games.length;i++){
    var split = games[i].word.split("")
    if(split[i] == guess.value){
    word.innerHTML += guess.value

    }else{
    used.innerHTML = guess.value
    }
  }

  console.log(guess.value)
  console.log(split)

}


submit.addEventListener("click", function(){
wording()
})
