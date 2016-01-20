var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word[0])) {
    return true;
  } else {
    return false;
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
