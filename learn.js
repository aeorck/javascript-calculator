const opt = parseInt(prompt('What operation do you wish to perform? \n Input a corresponding number. \n \n e.g. 1 for Addition \n \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division'));
const a = parseFloat(prompt('Input first number'));
//const b = parseFloat(prompt(`Input second number`));
let ans;


if (opt == 1) {
    const b = parseFloat(prompt(`${a} + \n Input second number`));
    ans = a + b;
    alert(`The value of ${a} + ${b} = ${ans}`)
}
else if (opt == 2) {
    const b = parseFloat(prompt(`${a} - \n Input second number`));
    ans = a - b;
    alert(`The value of ${a} - ${b} = ${ans}`)
}
else if (opt == 3) {
    const b = parseFloat(prompt(`${a} * \n Input second number`));
    ans = a * b;
    alert(`The value of ${a} * ${b} = ${ans}`)
}
else if (opt == 4) {
    const b = parseFloat(prompt(`${a} / \n Input second number`));
    ans = a / b;
    alert(`The value of ${a} / ${b} = ${ans}`)
}
else {
    alert("Your option doesn't correspond with the given values. \n Please reload the page.");
};
