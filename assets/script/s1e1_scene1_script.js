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
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
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
    } else if (x == 5) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                I know I’m not going to become a
                lawyer or president or doctor with tennis. I know that...<br>
                ...But can’t they just cheer me on?...
                </p>
        </li>
        `
    } else if (x == 6) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                I don’t want to go home. With the way I yelled at them they might not drive me
                to tennis anymore, just help me with my homework.
                </p>
        </li>
        `
    } else if (x == 7) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                It’s so confusing. They care so
                much but it feels like they also don’t.
                </p>
        </li>
        `
    } else if (x == 8) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                You don't have to go home.
                </p>
        </li>
        `
    } else if (x == 9) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                Huh?
                </p>
        </li>
        `
    } else if (x == 10) {
        textContent = `
        <li class="textbox">
                <p>
                Click here to continue
                </p>
        </li>
        `
    }
}

// On launch
console.log("textboxId:", textboxId);
console.log("textContent:", textContent);