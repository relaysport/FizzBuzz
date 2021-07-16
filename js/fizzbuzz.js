function fizzFizz(value1, value2) {
    let returnValue = [];
    for (let i = 1; i <= 100; i++) {
        returnValue.push((i % value1 == 0 ? "Fizz" : "") + (i % value2 == 0 ? "Buzz" : "") || i);
    }
    return returnValue;
}

function buzzBuzz() {
    let value1 = document.getElementById("fizzValue").value;
    let value2 = document.getElementById("buzzValue").value;

    let templateHTML = document.getElementById("template-row-items")
    let resultsHTML = "";
    let output = fizzFizz(value1, value2);

    for (i = 0; i < output.length; i += 5) {
        resultsHTML += templateHTML.innerHTML.replace('{{val1}}', output[i])
            .replace('{{val2}}', output[i + 1])
            .replace('{{val3}}', output[i + 2])
            .replace('{{val4}}', output[i + 3])
            .replace('{{val5}}', output[i + 4]);
    }
    document.getElementById("results").innerHTML = resultsHTML;
}