// :') j'adore les :) c'est trop :D !


btn = document.getElementById("mod-btn");
btn.addEventListener('click', beautify);

// var smiley1 = ":')";
// var smiley2 = ":)";
// var smiley3 = ":D";
//
// function beautify() {
//   modTxt = document.getElementById('mod-txt').value;
//   var modif = modTxt.replace(smiley1, "--");
//   modif = modif.replace(smiley2, "--");
//   modif = modif.replace(smiley3, "--");
//   console.log(modif);
//
//   result = document.getElementById('result');
//   result.innerText = modif;
// }

var smiley = [":')", ":)", ":D"];

function beautify() {
  modTxt = document.getElementById('mod-txt').value;
  for (var i = 0; i < smiley.length; i++) {
    modTxt = modTxt.replace(smiley[i], "--");
    console.log(modTxt);
  }
  result = document.getElementById('result');
  result.innerText = modTxt;
}
