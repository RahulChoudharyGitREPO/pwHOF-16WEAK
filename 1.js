function reverseString(str) {
  return str.split("").reverse().join("");
}

function delayedReverse(str) {
  setTimeout(function () {
    const reversedStr = reverseString(str);
    console.log(reversedStr);
  }, 2000);
}

const inputString = "Rahul, kumar";
delayedReverse(inputString);
