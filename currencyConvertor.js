
function fetchingApiData() {
    var finalAmount = 0;
    var res = document.getElementById('Result');
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var amount = parseInt(document.getElementById('amount').value);
    //const fetch = require("node-fetch");//npm i node-fetch --save
    fetch(`https://currency-exchange.p.rapidapi.com/exchange?q=${amount}.0&from=${from}&to=${to}`
        , {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
                "x-rapidapi-key": "1f98988481mshaf71d0b16041b35p14a73cjsn1e20a5387d6d"
            }
        })
        .then(response => {
            return response.json();
        }).then(result => {
            finalAmount += result * amount;
            res.value = finalAmount.toFixed(2);
        }).catch(err => {
            console.log(err);
        });
}
fetchingApiData();

window.onload = function () {
    let myButton = document.getElementById("button");
    myButton.addEventListener('click', () => {
        myButton.style.cssText = "transition:0.5s ease;box-shadow: 10px -9px 27px -8px rgba(128,123,128,1);"
        fetchingApiData();
    });
}