const urlRegex =
  /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+\.([a-zA-Z])+$/;

function validateURL(input) {
  if (urlRegex.test(input)) {
    console.log(`${input} is a valid URL.`);
  } else {
    console.log(`${input} is not a valid URL.`);
  }
}

// Test cases
validateURL("http://www.example.com");
validateURL("https://subdomain.example123.co");
validateURL("ftp://invalid.com");
validateURL("https://123invalid.com");
