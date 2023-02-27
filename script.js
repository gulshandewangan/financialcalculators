function convertCurrency() {
  // Get the amount and currencies from the form
  var amount = parseFloat(document.getElementById("currency-amount").value);
  var fromCurrency = document.getElementById("currency-from").value;
  var toCurrency = document.getElementById("currency-to").value;

  // Make an API call to get the exchange rate
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.exchangerate.host/latest?base=" + fromCurrency,
    true
  );
  xhr.onload = function () {
    if (xhr.status === 200) {
      var exchangeRate = JSON.parse(xhr.responseText).rates[toCurrency];
      var result = (amount * exchangeRate).toFixed(2);
      document.getElementById("currency-result").value = result;
    }
  };
  xhr.send();
}



const form = document.querySelector('form');
const calculateBtn = document.querySelector('#calculate-btn');
const result = document.querySelector('#result');

form.addEventListener('submit', e => {
  e.preventDefault();
  const investment = parseFloat(document.querySelector('#investment').value);
  const interest = parseFloat(document.querySelector('#interest').value);
  const years = parseFloat(document.querySelector('#years').value);

  const futureValue = investment * Math.pow(1 + (interest / 100), years);
  const totalInterest = futureValue - investment;

  result.innerHTML = `Future value: ₹${futureValue.toFixed(2)}<br>Total interest: ₹${totalInterest.toFixed(2)}`;
});

calculateBtn.addEventListener('click', () => {
  e.preventDefault();
  form.submit();
});


const form2 = document.querySelector('form');
const calculateBtn2 = document.querySelector('#calculate-btn');
const result2 = document.querySelector('#result');

form.addEventListener('submit', e => {
  e.preventDefault();
  const loanAmount = parseFloat(document.querySelector('#loan-amount').value);
  const interestRate = parseFloat(document.querySelector('#interest-rate').value);
  const loanTerm = parseFloat(document.querySelector('#loan-term').value);

  const monthlyRate = interestRate / 1200; // 12 months per year, 100% interest rate
  const monthlyPayment = loanAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -loanTerm * 12));
  const totalPayment = monthlyPayment * loanTerm * 12;
  const totalInterest = totalPayment - loanAmount;

  result2.innerHTML = `Monthly payment: ₹${monthlyPayment.toFixed(2)}<br>Total payment: ₹${totalPayment.toFixed(2)}<br>Total interest: ₹${totalInterest.toFixed(2)}`;
});

calculateBtn2.addEventListener('click', () => {
  e.preventDefault();
  form2.submit();
});