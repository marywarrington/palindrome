var palindrome = function(word) {
  var alphaWord = word.toString().replace(/\s/g, '');
  if (alphaWord === alphaWord.split("").reverse().join("")) {
    return true;
  }
  return false;
};
