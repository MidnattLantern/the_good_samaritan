// Integer decides what text should appear next
let textboxId = 0;

let textContent = "sample text";

function progressStory() {
    textboxId += 1
    console.log("textboxId:", textboxId);
    updateTextboxId(textboxId);
    console.log("textContent:", textContent);

    // Appends integer for textboxId
    let appendText = document.getElementById("textbox");
    let newText = document.createElement("li");
    newText.innerHTML = textContent;
    appendText.appendChild(newText);
}

// Text content changes for next append
function updateTextboxId(x) {
    if (x == 1) {
        textContent = "<p>first text</p>"
    } else if (x == 2) {
        textContent = "<p>second text</p>"
    } else if (x == 3) {
        textContent = "<p>third text</p>"
    } else if (x == 4) {
        textContent = "<p>fourth text<p/>"
    }
}

// On launch
console.log("textboxId:", textboxId);
console.log("textContent:", textContent);