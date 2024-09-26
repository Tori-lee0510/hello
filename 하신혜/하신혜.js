let clickCount = 0;

document.getElementById("bangButton").addEventListener("click", function() {
    clickCount++; 

    let outputText = "";
    if (clickCount === 1) {
        outputText = "BANG!";
    } else if (clickCount === 2) {
        outputText = "BANGBNAG!";
    } else if (clickCount === 3) {
        outputText = "👁️🫦👁️";
        clickCount = 0;
    }

    document.getElementById("output").textContent = outputText;
});

const button = document.getElementById('bangButton');

button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'red'; 
});

button.addEventListener('mouseout', function() {
    button.style.backgroundColor = 'blue'; 
});
