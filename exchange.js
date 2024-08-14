import config from "./config.js";
console.log(config);
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const convert = document.getElementById("convert");
const result = document.getElementById("result");

const apiKey = config.API_KEY;
const apiURL = "https://api.api-ninjas.com/v1/exchangerate?pair=HKD_";

convert.addEventListener("click", () => {
  const amountTotal = amount.value;
  const currencyTotal = currency.value;
  const url = apiURL + currencyTotal;

  fetch(url, {
    headers: {
      "X-API-KEY": apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const rate = data.exchange_rate;
      const resultPrice = amountTotal * rate;
      result.innerHTML = `${amountTotal} HKD = ${resultPrice.toFixed(
        2
      )} ${currencyTotal}`;
    })
    .catch((error) => {
      console.error("Request failed:", error);
      result.innerHTML = "An error occured please try again later";
    });
});
