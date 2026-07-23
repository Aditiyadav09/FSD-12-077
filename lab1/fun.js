// WAF to take any digit (0-9) and return it in words

function digitToWords(digit) {
  const words = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };

  return words[digit] || "Invalid Digit";
}

console.log(digitToWords(5));
