
// Function to increase the text area font size
function largeText() {
    var textArea = document.getElementById("input").style.fontSize = "2em";  //14pt is equivalent to 2em
}

// Function to display an alert when a radio button is selected and modifies the text style
function textStyles() {
    alert("The style of the text is changing!");

    var textArea = document.getElementById("input");
    var fancyRadio = document.getElementById("fancyRadio");
    
    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline"
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}
//Function that causing the text to be uppercase and adds a suffix of "-Moo" to the last word of each sentence
function mooStyle(){
    var textArea = document.getElementById("input");
    textArea.value = textArea.value.toUpperCase();

    var parts = textArea.value.split(". ");
    for(var i = 0; i < parts.length; i++){
        var separatedWords = parts[i].split(" ");
        if (separatedWords.length > 0) {
           separatedWords[separatedWords.length - 1] = separatedWords[separatedWords.length - 1] + "-Moo";
        }
        parts[i] = separatedWords.join(" ");
    }
    textArea.value = parts.join(".");

}

