const linkedinUrlRegex =
  /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

function validateLinkedInURL(input) {
  if (linkedinUrlRegex.test(input)) {
    console.log(`${input} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${input} is not a valid LinkedIn profile URL.`);
  }
}

// Test cases
validateLinkedInURL("https://www.linkedin.com/in/john_doe123");
validateLinkedInURL("https://www.linkedin.com/in/mary-smith");
validateLinkedInURL("https://www.linkedin.com/in/john-doe-123");
validateLinkedInURL("https://www.linkedin.com/in/short");
validateLinkedInURL("https://www.linkedin.com/in/invalid%");
