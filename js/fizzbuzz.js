//function fizzBuzz taking the user inputs (value1 and value2)
//for loop going from one to 100
//if i is a multiple of the first user input, Fizz is displayed
//if i is a multiple of the second user input, Buzz is displayed
//Fizz and Buzz are pulled together into FizzBuzz if both conditions are met, if none of the conditions are met then i is displayed alone

function fizzFizz(value1, value2) {
    let returnValue = [];
    for (let i = 1; i <= 100; i++) {
        returnValue.push((i % value1 == 0 ? "Fizz" : "") + (i % value2 == 0 ? "Buzz" : "") || i);
    }
    return returnValue;
}

//Display function

function buzzBuzz() {
    let value1 = document.getElementById("fizzValue").value;
    let value2 = document.getElementById("buzzValue").value;
    let resultsHTML = "";
    let templateHTML = "";
    let output = fizzFizz(value1, value2)
    
    for (i = 0; i < output.length; i += 5) {
        resultsHTML + templateHTML.replace('{{val1}}', output[i])
            .replace('{{val2}}', output[i + 1])
            .replace('{{val3}}', output[i + 2])
            .replace('{{val4}}', output[i + 3])
            .replace('{{val5}}', output[i + 4]);
    }
    document.getElementById("results").innerHTML = output;
}

// //Call and use template

// function fizzBuzz() {
//     let output = [];
//     let headTemplate = document.getElementById("template-header");
//     let rowTemplate = document.getElementById("template-row-items");

//     let templateHTML = rowtemplate.innerHTML;
//     let resultsHTML = headtemplate.innerHTML;

//     //Get the user inputs

//     let val1 = document.getElementById("fizzValue").value;
//     let val2 = document.getElementById("buzzValue").value;

//     //Call out fizzBuzz4 function

//     output = fizzFizz(val1, val2);
//     for (i = 1; i < output.length; i += 5) {
//         resultsHTML + templateHTML.replace('{{val1}}', output[i])
//             .replace('{{val2}}', output[i + 1])
//             .replace('{{val3}}', output[i + 2])
//             .replace('{{val4}}', output[i + 3])
//             .replace('{{val5}}', output[i + 4]);
//     }

//     document.getElementById("results").innerHTML = resultsHTML;
// }
// }