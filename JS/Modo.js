btn = document.getElementById("mod-btn");
btn.addEventListener('click', beautify);

// var smiley = [":')", ":)", ":D"];
//
// for (var i = 0; i < smiley.length; i++) {
//   console.log("smiley["+ i + "] = " + smiley[i]);
// }

// function beautify(){
//   modTxt = document.getElementById('mod-txt').value;
//   for (var i = 0; i < smiley.length; i++) {
//     console.log("smiley["+ i + "] = " + smiley[i]);
//     var n = modTxt.replace(smiley[i], "-");
//     console.log(n);
//   }
//
// }

var smiley1 = ":')";
var smiley2 = ":)";
var smiley3 = ":D";

function beautify() {
  modTxt = document.getElementById('mod-txt').value;
  var n = modTxt.replace(/smiley1|smiley2|smiley3/, "--");
  console.log(n);

}
