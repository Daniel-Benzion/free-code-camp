let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /[\w0-9]/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;