async function fetchingApiData(amount, from, to) {
    const fetch = require("node-fetch");//npm i node-fetch --save
    await fetch(`https://currency-exchange.p.rapidapi.com/exchange?q=${amount}.0&from=${from}&to=${to}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
            "x-rapidapi-key": "1f98988481mshaf71d0b16041b35p14a73cjsn1e20a5387d6d"
        }
    }).then(response => {
        return response.json();
    })
        .then(result => {
            console.log(result * amount);
        })
        .catch(err => {
            console.log(err);
        });
}
fetchingApiData(22, "USD", "PKR");

// function test() {
//     var from = document.getElementById('from').value;
//     var to = document.getElementById('to').value;
//     var amount = parseInt(document.getElementById('amount').value);
//     // var val = fetchingApiData(amount, from, to);
//     // console.log(amount);
//     // console.log(val);
//     //const fetch = require("node-fetch");//npm i node-fetch --save
//     fetch(`https://currency-exchange.p.rapidapi.com/exchange?q=${amount}.0&from=${from}&to=${to}`, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
//             "x-rapidapi-key": "1f98988481mshaf71d0b16041b35p14a73cjsn1e20a5387d6d"
//         }
//     }).then(response => {
//         return response.json();
//     })
//         .then(result => {
//             console.log(result * amount);
//         })
//         .catch(err => {
//             console.log(err);
//         });

// }