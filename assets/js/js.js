var i = 0;
var y = 0;
var ii = 0;
var txt = '> Site crée par Hitoki et Syhix';
var inputchar = '_';
var speed = 70;
var logo =   [" *@@                                             @@  \n",
              " *@@@@                                        *@@@@  \n",
              " *@, @@@               @     @               @@  @@  \n",
              " *@,   #@@              @   @             /@@    @@  \n",
              " *@,@@@. /@@.   &@@@@@@@@@@@@@@@@@@@    @@@   @@.@@  \n",
              " *@*@% (@@@@@@@@&                   @@@@@@@@@  @@@@  \n",
              " *@@@                                          .@@@  \n",
              " *@@                                            @@@  \n",
              " *@@                                             @@  \n",
              " *@@                                             @@  \n",
              " *@@         @@                       @@         @@  \n",
              " *@(          @@                    .@@          @@  \n",
              " @@            @@                  @@@            @@ \n",
              "@@/             @@                &@&             @@,\n",
              "  @@@@.                                       (@@@@  \n",
              "      @@@@(                               &@@@@      \n",
              "          @@@@*                       @@@@@          \n",
              "              @@@@@               @@@@@              \n",
              "                  @@@@         @@@#                  \n",
              "                     %@@@#@ @@@                      \n",
              "                        *@@@                         \n"]



function typeWriter2() {
  if (ii < txt.length) {
      document.getElementById("credit").innerHTML += txt.charAt(ii);
      ii++;
      setTimeout(typeWriter2, speed);
    }
  }

typeWriter2()


function typeWriter() {
  if (i < logo.length+1) {
    while (y < 55) {
      document.getElementById("demo").innerHTML += logo[i].charAt(y);
      console.log(i + " " + y)
      y++;
    }
    i++;
    y=0;
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