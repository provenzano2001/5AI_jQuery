document.getElementById("h1").innerHTML = "ciao come stai";
var btn = document.createElement("button");
btn.innerHTML = "CLICCA";

var body = document.getElementsByTagName("body")[0];
body.append(btn);

btn.addEventListener("click", function() {
    document.getElementById("h1").innerHTML = "ciao come stai?";
});