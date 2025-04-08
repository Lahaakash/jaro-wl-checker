let whitelist = [];

fetch('whitelist.json')
  .then(response => response.json())
  .then(data => whitelist = data.map(addr => addr.toLowerCase()));

function checkWhitelist() {
  const input = document.getElementById('walletInput').value.trim().toLowerCase();
  const result = document.getElementById('result');

  if (input === '') {
    result.textContent = "Please enter a wallet address.";
    result.style.color = "#cc0000";
    return;
  }

  if (whitelist.includes(input)) {
    result.textContent = "Congratulations, you are in whitelist. Welcome to Jaro.";
    result.style.color = "#cc0000"; // red text for excitement
  } else {
    result.textContent = "Sorry, your address is not on the list.";
    result.style.color = "#cc0000"; // red text for alert
  }
}
