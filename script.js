
// Ensures the code runs only after the page has fully loaded
window.onload = function () {
    alert("Welcome to the interactive web page!");
    
    // Assign the click event to the button
    const button = document.getElementById("clickMe");
    if (button) {
        button.onclick = function () {
            alert("You clicked the button!");
        };
    } else {
        console.error("Button with ID 'clickMe' not found.");
    }
};
