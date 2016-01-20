describe("isVowel",function() {
  it("returns true for a word beginning with a vowel", function() {
    expect(isVowel("unusual")).to.equal(true);
  });
  it("returns false for a word not beginning with a vowel", function() {
  expect(isVowel("carrot")).to.equal(false);
  });
});

describe("pigLatin", function() {
  it("adds 'ay' to the end of a word beginning with a vowel", function(){
    expect(pigLatin("and")).to.equal("anday");
  });
  it("removes first letter and appends it to the end of the word, along with 'ay'", function(){
    expect(pigLatin("bus")).to.equal("usbay");
  });
  it("returns true for a word beginning with two consonants", function() {
    expect(pigLatin("train")).to.equal(true);
  });
});
