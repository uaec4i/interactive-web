window.onload = function () {
    alert("Welcome to the interactive web page!");
    
    const button = document.getElementById("clickMe");
    if (button) {
        button.onclick = function () {
            alert("You clicked the button!");
        };
    } else {
        console.error("Button with ID 'clickMe' not found.");
    }

    // Calculator functionality
    const display = document.getElementById("display");
    const buttons = Array.from(document.getElementsByClassName("btn"));
    let currentInput = "";
    let previousInput = "";
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.textContent;

            if (value === "C") {
                currentInput = "";
                previousInput = "";
                operator = null;
                display.textContent = "0";
            } else if (value === "=") {
                if (previousInput && operator) {
                    currentInput = evaluate(previousInput, currentInput, operator);
                    display.textContent = currentInput;
                    previousInput = "";
                    operator = null;
                }
            } else if (["+", "-", "*", "/"].includes(value)) {
                if (currentInput) {
                    if (previousInput && operator) {
                        previousInput = evaluate(previousInput, currentInput, operator);
                    } else {
                        previousInput = currentInput;
                    }
                    currentInput = "";
                    operator = value;
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function evaluate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case "+":
                return (a + b).toString();
            case "-":
                return (a - b).toString();
            case "*":
                return (a * b).toString();
            case "/":
                return (a / b).toString();
            default:
                return b;
        }
    }
};
