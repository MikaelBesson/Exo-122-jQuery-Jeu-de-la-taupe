const holes = $(".hole");// utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "hole";
const scoreBoard = $(".score");//utiliser la méthode jquery appropriée pour selectionner l'élément ayant pour classe "score";
const moles = $(".mole");// utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "mole";
let run = true;


//Le jeu commence lorque l'utilisateur clique sur le bouton start
// La fonction demarrant le jeu s'appellera startGame()
// Le joueur aura 10 secondes par partie

$("#startGame").click(function () {
    timer();
    cache();
    clearGame();
})

function clearGame() {
    setTimeout(function () {
        $(".hole").removeClass("up");
        run = false;
    }, 5000);
}

//tant que le temps n'est pas écoulé, votre programme selectionnera un trou au hasard
// une taupe doit apparaitre dans le trou selectionné, vous ajouterez la classe "up" en utilisant la méthode
// jquery approprié à l'élément ayant pour classe "hole" selectionné.

function randomHole() {
    let getHole = Math.floor(Math.random() * holes.length);
    $($(".hole").get(getHole)).addClass("up");
    console.log(getHole);
}

// La taupe doit apparaitre durant un intervale de temps compris entre 200 millisecondes et 1 seconde

function timer() {
    if (run) {
        setTimeout(function () {
            randomHole();
            timer();
        }, Math.floor(Math.random() * 800) + 200);
    }
}

function cache() {
    setTimeout(function () {
        $(".hole").removeClass("up");
        cache();
    }, 1000);
}

//A chaque fois qu'une taupe est clickée par l'utilisateur, vous augmenterez le score de celui ci de 1 point,
// vous ferrez disparaitre la taupe en retirant la classe "up" à l'élément approprié


moles.click(function () {
    $(".holes").removeClass("up");
    scoreBoard.html(parseInt(scoreBoard.html()) + 1);
})

















