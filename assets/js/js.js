var i = 0;
var txt = '> Site crée par Hitoki et Syhix';
var inputchar = '_';
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()

function newColor() {
  const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
  console.log("Secondary Color = " + randomColor)
  document.documentElement.style.setProperty('--color', randomColor);
}

newColor()