var isVowel = function(letter) {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(letter[0])) {
    return true;
  } else {
    return false;
  }
};

var pigLatin = function(word) {
    if (isVowel(word)) {
      return (word + "ay");
    } else {
      return ((word.substring(1,word.length)) + (word.substring(0,1)) + ("ay"));
    }
};


// for (var i = 0;i < word.length; i++) {
//   letter = word[i]
//   for (var j = 0;i < vowels.length;j++) {
//     if (letter === vowels[j]) {
//       return word.slice(i,word.length) + word.slice(0,i) + "ay";
//     }
//   }
// }
