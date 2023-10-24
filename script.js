document.getElementById('loveCalculatorForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const maleName = document.getElementById('maleName').value;
    const femaleName = document.getElementById('femaleName').value;
    const resultContainer = document.getElementById('result');

    const apiKey = '54140b1064msh22df647e7f2fec1p11fcf6jsn21ddb4a38bd0';
    const apiUrl = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${maleName}&sname=${femaleName}`;

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(result);
            resultContainer.innerHTML = `Love Presentation: ${data.percentage}%<br>Results: ${data.result}`;
        })
        .catch(error => {
            console.error(error);
            resultContainer.innerHTML = 'An error occurred while calculating love.';
        });
});
