// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar")

describe("caesarModule", () => {
    it("should return false if shift value is 0", () => {
        const actual = caesarModule.caesar("kevin", 0);
        expect(actual).to.be.false;
    })
    it("should return false if shift value is less than -25", () => {
        const actual = caesarModule.caesar("kevin", -30);
        expect(actual).to.be.false;
    })
    it("should return false if shift value is greater than 25", () => {
        const actual = caesarModule.caesar("kevin", 30);
        expect(actual).to.be.false;
    })
    it("should return false if no shift value given", () => {
        const actual = caesarModule.caesar("kevin");
        expect(actual).to.be.false;
    }) 
    it("should ignore capital letters", () => {
        const actual = caesarModule.caesar("Kevin", 2);
        const expected = ("mgxkp");
        expect(actual).to.eql(expected);
    })
    it("should wrap to the beginning after z", () => {
        const actual = caesarModule.caesar("zap", 2);
        const expected = ("bcr");
        expect(actual).to.eql(expected);
    })
    it("should maintain spaces and nonalphabetic symbols when encoding", () => {
        const actual = caesarModule.caesar("kevin $", 2);
        const expected = ("mgxkp $");
        expect(actual).to.eql(expected);
    })
    it("should maintain spaces and nonalphabetic symbols when decoding", () => {
        const actual = caesarModule.caesar("mgxkp $", -2);
        const expected = ("kevin $");
        expect(actual).to.eql(expected);
    })
})