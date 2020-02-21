document.addEventListener("DOMContentLoaded", function() {
    // Debut de mon code javascript
    var pac = document.getElementById("pacman");
    var posX = pac.offsetLeft;
    var posY = pac.offsetTop;
    var audio = new Audio('0477.wav');
    var deplacement = 2;

    function pacman() {
        var mc = new Hammer(game);
        mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        mc.on("panleft panright panup pandown", function(event) {
            console.log(event.type);
            switch (event.type) {
                case "panright": // droite
                    //detection des bords
                    if (posX >= 900) {
                        //audio.play();
                    } else {
                        //deplacement du pacman
                        posX += deplacement;
                        pac.style.left = posX + "px";
                    }
                    break;
                case "panleft":
                    // gauche
                    if (posX == 0) {
                        //audio.play();
                    } else {
                        posX -= deplacement;
                        pac.style.left = posX + "px";
                    }
                    break;
                case "panup":
                    // haut
                    if (posY == 0) {
                        //audio.play();
                    } else {
                        posY -= deplacement;
                        pac.style.top = posY + "px";
                    }
                    break;
                case "pandown":
                    // bas
                    if (posY >= 400) {
                        //audio.play();
                    } else {
                        posY += deplacement;
                        pac.style.top = posY + "px";
                    }
                    break;
                default:
                    break;
            }
        })
    }
    pacman();


    // fin de mon code javascript
});