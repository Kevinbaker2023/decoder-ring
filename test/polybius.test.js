// Write your tests here!
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius")

describe("polybiusModule", () => {
    it("should translate i and j to 42 when encoding", () => {
        const actual = polybiusModule.polybius("ij");
        const expected = ("4242");
        expect(actual).to.eql(expected);
    })
    it("should translate 42 to i/j when decoding", () => {
        const actual = polybiusModule.polybius("42", false);
        const expected = ('i/j');
        expect(actual).to.eql(expected);
    })
    it("should ignore capital letters", () => {
        const actual = polybiusModule.polybius("KEVIN");
        const expected = ("5251154233");
        expect(actual).to.eql(expected);
    })
    it("should maintain spaces when encoding", () => {
        const actual = polybiusModule.polybius("a b c");
        const expected = ("11 21 31");
        expect(actual).to.eql(expected);
    })
    it("should maintain spaces when decoding", () => {
        const actual = polybiusModule.polybius("11 12 13" , false);
        const expected = ("a f l");
        expect(actual).to.eql(expected);
    })
})