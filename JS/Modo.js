btn = document.getElementById("mod-btn");
btn.addEventListener('click', beautify);

// var smiley = [":')", ":)", ":D"];
//
// for (var i = 0; i < smiley.length; i++) {
//   console.log("smiley["+ i + "] = " + smiley[i]);
// }

var smiley = ":)";

function beautify(){
  modTxt = document.getElementById('mod-txt').value;
  var n = modTxt.search(smiley);
  console.log(n);
}
