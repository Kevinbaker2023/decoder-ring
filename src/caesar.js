// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // setting alphabet to use later in code
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    // your solution code here
    // checking for errors
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    // setting solution and setting up shift
    let solution = "";
      if (encode === false) {
       shift = shift * -1;
    }
    // using for loop to access each index and converting to lower case
    for (let i = 0; i < input.length; i++) {
      const letterInput = input[i].toLowerCase();
    // checking if part of alphabet
      if (alphabet.includes(letterInput)) {
        const indexLetter = alphabet.indexOf(letterInput);
        let indexShift = indexLetter + shift;
    // setting up loop of alphabet
      if (indexShift > 25) {
        indexShift += -26;
      }
      if (indexShift < 0 && indexShift > -25) {
        indexShift += 26;
      }
      const letterShift = alphabet[indexShift];
      solution += letterShift;
    } else {
      solution += letterInput;
    }
 }
    return solution;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
