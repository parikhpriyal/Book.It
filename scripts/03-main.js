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
    windo = document.getElementById('slide-container');
    bulletLink = 0;

    links[bulletLink].classList.add('active');

    for(var i = 0; i< links.length; i++){
        var link = links[i];
        link.addEventListener('click', slideshow, false);        
        link.currentTarget = i;
    }

    //open how it works page using button
    button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', pageNew, false);

};