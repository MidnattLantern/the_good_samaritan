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
    newText.innerHTML = textContent(textboxId);
    appendText.appendChild(newText);
}

// Text content changes for next append
function updateTextboxId(x) {
        textContent(1) = "<p>first text</p>"
        textContent(2) = "<p>third text</p>"
        textContent(3) = "<p>fourth text</p>"
        textContent(4) = "<p>fifth text<p/>"
}

// On launch
console.log("textboxId:", textboxId);
console.log("textContent:", textContent);