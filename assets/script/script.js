// Integer decides what text should appear next
let textboxId = 0;

let textContent = "sample text";

function progressStory() {
    textboxId += 1
    console.log("textboxId:", textboxId);
    updateTextboxId(textboxId);
    console.log("textContent:", textContent);

    // Appends integer for textboxId
    let appendText = document.getElementById("textboxes_window");
    let newText = document.createElement("li");
    newText.innerHTML = textContent;
    appendText.appendChild(newText);
}

// Text content changes for next append
function updateTextboxId(x) {
    if (x == 1) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                Hey.
                </p>
        </li>
        `
    } else if (x == 2) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                Are you okay?
                </p>
        </li>
        `
    } else if (x == 3) {
        textContent = `
        <li class="textbox">
                <div class="test_box"></div>
                <p>
                I feel so stupid.
                </p>
        </li>
        `
    } else if (x == 4) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                Here.
                </p>
        </li>
        `
    }
}

// On launch
console.log("textboxId:", textboxId);
console.log("textContent:", textContent);