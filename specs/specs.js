describe("pigLatin",function() {
  it("returns true for a word beginning with a vowel", function() {
    expect(pigLatin("apple")).to.equal(true);
  });
  it("adds 'ay' to the end of a word beginning with a vowel", function(){
    expect(pigLatin("and")).to.equal("anday");
  });
});
//   it("removes first letter and appends it to the end of the word, along with 'ay'", function(){
//     expect(pigLatin("bus")).to.equal("usbay");
//   });
// });
