// Step 1 - selecting all the elements
var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

// Ex-06
submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  if(ip && qty && curr) {
    calculateProfitAndLoss(ip, qty, curr);
  }

  else if(ip <= 0 || qty <= 0 || curr <= 0) {
    showOutput("Note: Please Enter All The Fields and Values in them must be greater than 0!");
}


  
}

// Ex-05
function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(
      `Hey, the loss is: ₹ ${loss} and the loss percentage is: ${lossPercentage.toFixed(2)}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    showOutput(
      `Hey, the profit is: ₹${profit} and the profit percentage is: ${profitPercentage.toFixed(2)}%`
    );
  } else {
    showOutput(`No Pain No Gain And No Gain No Pain!`);
  }
}

function showOutput(message) {
  outputBox.innerText = message;
}