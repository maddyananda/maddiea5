// Function to make the text bigger
function makeTextBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

// Function to apply fancy styling to the text area
function applyFancyStyle() {
    const textArea = document.getElementById("textInput");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

// Function to apply boring styling to the text area
function applyBoringStyle() {
    const textArea = document.getElementById("textInput");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

// Function to add 'Moo' to the end of each sentence and make text uppercase
function addMoo() {
    const textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase();
    const sentences = text.split(".");
    text = sentences.map(sentence => sentence.trim() + "-Moo").join(". ");
    textArea.value = text;
}
