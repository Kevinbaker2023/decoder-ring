// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // setting up alphabet and empty array
  const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
  let substitutionCipher = [];

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // checking if there are any duplicates and errors
    const repeatCheck = new Set(alphabet);
      if (!alphabet || alphabet.length != 26 || [...repeatCheck].length != 26) {
        return false;
      }
      alphabet.split("");
      // checking for encode and using loop to access indexes
      if (encode) {
        for (let i = 0; i < alphabet.length; i++) {
          substitutionCipher[originalAlphabet[i]] = alphabet[i];
        }
      } else {
        for (let i = 0; i < alphabet.length; i++) {
          substitutionCipher[alphabet[i]] = originalAlphabet[i];
        }
      }
      // converting to lower case and return final solution
      let result = input.toLowerCase().split("").map((letters) => {
        if (letters === " ") return " ";
        return substitutionCipher[letters]
      })
      return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
