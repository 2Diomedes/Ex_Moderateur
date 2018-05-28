// :') j'adore les :) c'est trop :D !


btn = document.getElementById("mod-btn");
btn.addEventListener('click', beautify);

var smiley1 = ":')";
var smiley2 = ":)";
var smiley3 = ":D";

function beautify() {
  modTxt = document.getElementById('mod-txt').value;
  var modif = modTxt.replace(smiley1, "--");
  modif = modif.replace(smiley2, "--");
  modif = modif.replace(smiley3, "--");
  console.log(modif);

  result = document.getElementById('result');
  result.innerText = modif;
}
