// function slide(e){
//     removeActiveLinks();
//     clickedLink = e.target; 
//     activeLink = clickedLink.itemID;

//     changePosition(clickedLink);
// }

// function removeActiveLinks(){
//     for(var i = 0; i < links.length; i++){
//         links[i].classList.remove('active');
//     }
// }

// function changePosition(link){
//     position = link.getAttribute('data-pos');

//     translateValue = 'translate3d(' + position + ', Opx, 0)';
//     slider.style[transformProperty] = translateValue;

//     link.classList.add('active');
// }

// function getSupportedPropertyName(properties) {
//     for (var i = 0; i < properties.length; i++) {
//         if (typeof document.body.style[properties[i]] != 'undefined') {
//             return properties[i];
//         }
//     }
//     return null;
// }
