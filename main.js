document.addEventListener('DOMContentLoaded', function () { //initier la fonction

    const hamburgerIcon = document.querySelector('.hamburger-button'); //déclarer les variables
    const closeIcon = document.querySelector('.close-icon');

    hamburgerIcon.addEventListener('click', function () {  //première fonction quand je clique sur l'icone hamburger

        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function () { //deuxième fonction quand je clique sur l'icon close

        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });

});