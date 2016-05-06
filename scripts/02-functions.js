//open modal for sign in
function popup(){
    frame.style.visibility = 'visible';
    frame.style.marginTop = '72px';
    frame.style.transition = 'all 500ms ease-in-out';
}

//close signin modal
function closeup(){
    frame.style.visibility = 'hidden';
    frame.style.marginTop = '-100%';
    frame.style.transition = 'all 500ms ease-in-out';   
}

function loadnew(){
    name =  document.getElementById('username').value;
    password =  document.getElementById('pass').value;
    if(name == 'priyal' && password == 'test123')
        document.myform.action = 'sign.html';
    else{
        frame.style.display = 'block';
        document.getElementById('false').innerHTML = 'Invalid username or password';
        password.value = '';
    }

}

//content slider
// function slideshow(){
//     for(bullet = 0; bullet < links.length; bullet++){
//         if (0 === this.parentNode.compareDocumentPosition(bulletLinks[bullet])) {
//             item.style.marginLeft = '0px';
//             // index = bullet;
//             console.log(bullet);
//         }
//     }

//     // switch (index){
//     //     case 0:
//     //         item.style.marginLeft = '0px';
//     //         break;
//     //     case 1:
//     //         item.style.marginLeft = '-720px';
//     //         break;
//     //     case 2:
//     //         item.style.marginLeft = '-1440px';   
//     //         break;
//     //     default:
//     //         item.style.marginLeft = '0px';
//     // }

//     // if(links[0].clicked == true){
//     //     item.style.marginLeft = '0px';
//     // }else if (links[1].clicked == true){
//     //     item.style.marginLeft = '-720px';
//     // }else if (links[2].clicked == true){
//     //     item.style.marginLeft = '-1440px';
//     // }
// }

function slideshowOne(){
    item.style.marginLeft = '0px';
    // items[0].style.marginLeft = '0px';
    // items[1].style.marginLeft = '720px';
    // items[2].style.marginLeft = '1440px';
}

function slideshowTwo(){
    item.style.marginLeft = '-720px';
    // items[0].style.marginLeft = '-720px';
    // items[1].style.marginLeft = '0px';
    // items[2].style.marginLeft = '720px';   
}

function slideshowThree(){
    item.style.marginLeft = '-1440px';
    // items[0].style.marginLeft = '-1440px';
    // items[1].style.marginLeft = '-720px';
    // items[2].style.marginLeft = '0px';
}



// open how.html in new window on button click
function pageNew(){
    window.open('how.html', '_self', false);
}