window.onload = function () {
    'use strict';

    //sign up modal show
    frame = document.getElementById('frame');
    signin = document.getElementById('sign'); 
    close = document.getElementById('close');
    submit = document.getElementById('submit');

    signin.addEventListener('click', popup, false);
    close.addEventListener('click', closeup, false);
    submit.addEventListener('click', loadnew, false);

    //content slider
    links = document.querySelectorAll('#nav-links > ul > li');
    items = document.querySelectorAll('#slider > div');

    // links[0].addEventListener('click', slideshow, false);
    // links[1].addEventListener('click', slideshow, false);
    // links[2].addEventListener('click', slideshow, false);

    links[0].addEventListener('click', slideshowOne, false);
    links[1].addEventListener('click', slideshowTwo, false);
    links[2].addEventListener('click', slideshowThree, false);

    //open how it works page using button
    button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', pageNew, false);

};