let textboxCount = 0;
console.log("textboxCount:", textboxCount);

function progressStory() {
    textboxCount += 1
    console.log("textboxCount:", textboxCount)
    let appendText = document.getElementById("textbox");
    let newText = document.createElement("li");
    newText.innerHTML = "new text";
    appendText.appendChild(newText);
}
