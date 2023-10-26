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

document.onkeypress = function(e) {
    // Listen if user press spacebar
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode) {
        progressStory();
    }
};

const targetElement = document.body;

// Text content changes for next append
function updateTextboxId(x) {
    if (x == 1) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                Hey-
                </p>
        </li>
        `
    } else if (x == 2) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                -Sam.
                </p>
        </li>
        `
    } else if (x == 3) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                Wake up! They're almost here.
                </p>
        </li>
        `
    } else if (x == 4) {
        textContent = `
        <li class="textbox">
                <p>
                Sam realise the situation. Jenn and Sam walks to the house entrance.
                </p>
        </li>
        `
    } else if (x == 5) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                It’s going to be okay. I’m here if
                you need it.
                </p>
        </li>
        `
    } else if (x == 6) {
        textContent = `
        <li class="textbox">
                <p>
                End.
                </p>
        </li>
        `
    } else if (x >= 7) {
        textContent = `

        `
    }
}

// On launch
console.log("textboxId:", textboxId);
console.log("textContent:", textContent);