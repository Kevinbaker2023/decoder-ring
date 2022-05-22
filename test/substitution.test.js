// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution")

describe("substitutionModule", () => {
    it("should return false if alphabet is not exactly 26 characters long", () => {
        const actual = substitutionModule.substitution("abc", "notlong");
        expect(actual).to.be.false;
    })
    it("should correctly translate phrase based on alphabet given", () => {
        const actual = substitutionModule.substitution("hello", "qrstuvwxyzabcdefghijklmnop");
        const expected = ("xubbe");
        expect(actual).to.eql(expected);
    })
    it("should return false if any duplicates in alphabet", () => {
        const actual = substitutionModule.substitution("kevin", "qrstuvwxyzabcdefghijklmnoo");
        expect(actual).to.be.false;
    })
    it("should maintain spaces when encoding", () => {
        const actual = substitutionModule.substitution("he llo", "qrstuvwxyzabcdefghijklmnop");
        const expected = ("xu bbe");
        expect(actual).to.eql(expected);
    })
    it("should maintain spaces when decoding", () => {
        const actual = substitutionModule.substitution("xu bbe", "qrstuvwxyzabcdefghijklmnop", false);
        const expected = ("he llo");
        expect(actual).to.eql(expected);
    })
    it("should ignore capital letters", () => {
        const actual = substitutionModule.substitution("HELLO", "qrstuvwxyzabcdefghijklmnop");
        const expected = ("xubbe");
        expect(actual).to.eql(expected);
    })
})