//Traditional loop-based FizzBuzz solution

function fizzBuzzA(value1, value2) {
    let returnValue = "";
    for (let i = 1; i <= 100; i++) {
        if (i % value1 == 0 && i % value2 == 0) {
            returnValue += "FizzBuzz ";
        } else if (i % value1 == 0) {
            returnValue += "Fizz ";
        } else if (i % value2 == 0) {
            returnValue += "Buzz ";
        } else {
            returnValue += i + " ";
        }
    }
    return returnValue;
}

//FizzBuzz solution #2

function fizzBuzzB(value1, value2) {
    let returnValue = "";
    let Fizz = false;
    let Buzz
}

//Display function

function buzzBuzz(){
    let output = "";
    let val1 = document.getElementById("fizzValue").value;
    let val2 = document.getElementById("buzzValue").value;
    output = fizzBuzzA(val1, val2);
    document.getElementById("results").innerHTML = output;
}