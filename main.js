document.addEventListener('DOMContentLoaded', function () { //initier la fonction

    //Fonction 

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

    //Fonction affichage menu mobile

    const hamburgerMobileMenuToggle = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeIconMenu = document.querySelector('.close-icon');

    hamburgerMobileMenuToggle.addEventListener('click', function () {

        mobileMenu.classList.toggle('active')
    });

    closeIconMenu.addEventListener('click', function () {

        mobileMenu.classList.toggle('active')
    });





});


