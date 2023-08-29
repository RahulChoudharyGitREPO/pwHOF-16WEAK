function generateRandomNumberWithDelay(delay) {
  console.log(`Generating a random number after ${delay} seconds...`);
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(`Generated random number: ${randomNum}`);
  }, delay * 1000);
}

function startCountdown(delay) {
  let remainingTime = delay;
  const countdownInterval = setInterval(() => {
    console.log(`Time remaining: ${remainingTime} seconds`);
    remainingTime--;
    if (remainingTime < 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

const delay = parseInt(prompt("Enter the delay in seconds:"));

startCountdown(delay);
generateRandomNumberWithDelay(delay);
