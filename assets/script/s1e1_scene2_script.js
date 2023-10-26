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
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                Wear what you want, just make sure
                to use this.
                </p>
        </li>
        `
    } else if (x == 2) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                Letting me stay here is already
                enough...
                </p>
        </li>
        `
    } else if (x == 3) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                Your face is going to dry up from
                crying... <br> ... if you don’t wash and moisturize.
                </p>
        </li>
        `
    } else if (x == 4) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                So, if you want to.
                </p>
        </li>
        `
    } else if (x == 5) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                Oh... <br> ...Yeah.
                </p>
        </li>
        `
    } else if (x == 6) {
        textContent = `
        <li class="textbox">
                <p>
                Jenn and Sam, sleeping in Sam's king-size bed
                </p>
        </li>
        `
    } else if (x == 7) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                You didn’t have to help me, you
                know... <br> ...I shouldn’t have stayed here.
                </p>
        </li>
        `
    } else if (x == 8) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                Did you not want to stay here?
                </p>
        </li>
        `
    } else if (x == 9) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                No, I do!
                </p>
        </li>
        `
    } else if (x == 10) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                Then why not?
                </p>
        </li>
        `
    } else if (x == 11) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                Why not?!
                </p>
        </li>
        `
    } else if (x == 12) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                Uh- Well, I could have been a
                dangerous person.
                </p>
        </li>
        `
    } else if (x == 13) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                You’re the one who followed me to a
                basement-
                </p>
        </li>
        `
    } else if (x == 14) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                Still!
                </p>
        </li>
        `
    } else if (x == 15) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                I know.
                </p>
        </li>
        `
    } else if (x == 16) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                Then why did you help me?
                </p>
        </li>
        `
    } else if (x == 17) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                I needed to.
                </p>
        </li>
        `
    } else if (x == 18) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                Why?
                </p>
        </li>
        `
    } else if (x == 19) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                I don’t know exactly... <br> ...You’re not being stupid though.
                </p>
        </li>
        `
    } else if (x == 20) {
        textContent = `
        <li class="textbox">
                <p>
                Jenn's phone gets a notification
                </p>
        </li>
        `
    } else if (x == 21) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                At least she knows I’m okay.
                </p>
        </li>
        `
    } else if (x == 22) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                That’s a relief. It wouldn’t have
                been good if we were up all night.
                </p>
        </li>
        `
    } else if (x == 23) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                It feels like all my energy left my
                body.
                </p>
        </li>
        `
    } else if (x == 24) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/sam_box_neutral_v1.png">
                <p>
                Goodnight.
                </p>
        </li>
        `
    } else if (x == 25) {
        textContent = `
        <li class="textbox">
                <img src="../the_good_samaritan/assets/images/textbox_card/jen_box_neutral.png">
                <p>
                You too.
                </p>
        </li>
        `
    } else if (x == 26) {
        textContent = `
        <li class="textbox">
        <a href="../the_good_samaritan/s1e1_scene3.html">Click here to continue</a>
        </li>
        `
    }
}

// On launch
console.log("textboxId:", textboxId);
console.log("textContent:", textContent);