// JavaScript code for the cash payment simulator

let questionAmount = 0;
let totalAmount = 0;

// Generate a random payment amount between RM0 and RM30
function generateRandomAmount() {
  return (Math.random() * 30).toFixed(2);
}

function setQuestion() {
  questionAmount = parseFloat(generateRandomAmount()).toFixed(2);
  document.getElementById("question").textContent = `Question: RM ${questionAmount}`;
}

function updateTotalAmount() {
  document.getElementById("total-amount").textContent = `Total: RM ${totalAmount.toFixed(2)}`;
}

// Initialize the question and total amount
setQuestion();
updateTotalAmount();

// Function to handle cash denomination button clicks
function handleCashDenominationClick(amount) {
  totalAmount += amount;
  updateTotalAmount();

  // Check if the total amount matches the question amount
  if (totalAmount.toFixed(2) === questionAmount) {
    document.getElementById("feedback").textContent = "Congratulations! You got it right!";
  } else if (totalAmount.toFixed(2) > questionAmount) {
    document.getElementById("feedback").textContent = "Oops! You've paid more than the required amount.";
  } else {
    document.getElementById("feedback").textContent = "";
  }
}

// Attach click event listeners to cash denomination buttons
document.getElementById("rm1-button").addEventListener("click", () => handleCashDenominationClick(1.00));
document.getElementById("rm5-button").addEventListener("click", () => handleCashDenominationClick(5.00));
document.getElementById("rm10-button").addEventListener("click", () => handleCashDenominationClick(10.00));
document.getElementById("rm20-button").addEventListener("click", () => handleCashDenominationClick(20.00));
document.getElementById("cents10-button").addEventListener("click", () => handleCashDenominationClick(0.10));

// Reset button
document.getElementById("reset-button").addEventListener("click", () => {
  totalAmount = 0;
  updateTotalAmount();
  setQuestion();
  document.getElementById("feedback").textContent = "";
});
