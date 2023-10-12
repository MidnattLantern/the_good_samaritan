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
        textContent = "first text"
    } else if (x == 2) {
        textContent = "second text"
    } else if (x == 3) {
        textContent = "third text"
    } else if (x == 4) {
        textContent = "fourth text"
    } else if (x == 5) {
        textContent = "fifth text"
    }
}

// On launch
console.log("textboxId:", textboxId);
console.log("textContent:", textContent);