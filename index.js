var hint = document.getElementsByClassName("hint")[0];
var word = document.getElementsByClassName("word")[0];
var used = document.getElementsByClassName("used")[0];
var guess = document.getElementsByClassName("guess")[0];
var submit = document.getElementsByClassName("submit")[0];

// function Words(word, hint){
//   this.word = word;
//   this.hint = hint;
// }
// var word1 = new Words("shoe", "goes on foot")
// var word2 = new Words("hat","goes on head")
//var word3 = new Words("dog", "man's best friend")
//var word4 = new Words("moon", "my favorite")
//var word5 = new Words("hello", "common greeting")

var word1 = "shoe"
var word2 = "hat"

var games = []
games.push(word1,word2
  //,word3,word4,word5
)
console.log(games)
function rounds(){
  for(i=0; i<games.length;i++){
    for(j=0; j<guess.value.length; j++){
    var split = games[i].word.split("")

    hint.innerHTML = games[i]

    if(guess.value[j] === split[i]){
      word.innerHTML = guess.value
      used.innerHTML = guess.value
    }else{
      used.innerHTML = guess.value
    }
  }
  }
}

submit.addEventListener("click", function(){
rounds()
})
