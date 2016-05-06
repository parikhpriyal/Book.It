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
    // links = document.querySelector('#nav-links > ul');
    item = document.getElementById('slide-container');

    // for(bullet = 0; bullet < links.length; bullet++){
    //     // links[0].addEventListener('click', slideshow, false);
    //     bulletLinks[bullet] = links.querySelectorAll('li')[index];
    // }

    // for(bullet = 0; bullet < links.length; bullet++){
    //     // links[0].addEventListener('click', slideshow, false);
    //     bulletLinks[bullet].addEventListener('click', slideshow, false);
    // }



    // links[0].addEventListener('click', slideshow, false);
    // links[1].addEventListener('click', slideshow, false);
    // links[2].addEventListener('click', slideshow, false);

    // for(var i = 0; i < links.length; i++){
    //     if (0 === this.parentNode.compareDocumentPosition(links[i])) {
    //         links[0].addEventListener('click', slideshow(1), false);
    //     }else if (1 === this.parentNode.compareDocumentPosition(links[i])){
    //         links[0].addEventListener('click', slideshow(2), false);
    //     }else if (1 === this.parentNode.compareDocumentPosition(links[i])){
    //         links[0].addEventListener('click', slideshow(3), false);
    //     }
    // }
    
    links[0].addEventListener('click', slideshowOne, false);
    links[1].addEventListener('click', slideshowTwo, false);
    links[2].addEventListener('click', slideshowThree, false);

    // for(var i = 0; i < links.length; i++){
    //     links[i].addEventListener('click', slideshow, false);
    // }

    //open how it works page using button
    button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', pageNew, false);

};