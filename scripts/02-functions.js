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
function slideshowOne(){
    items[0].style.marginLeft = '0px';
    items[1].style.marginLeft = '720px';
    items[2].style.marginLeft = '1440px';
}

function slideshowTwo(){
    items[0].style.marginLeft = '-720px';
    items[1].style.marginLeft = '0px';
    items[2].style.marginLeft = '720px';   
}

function slideshowThree(){
    items[0].style.marginLeft = '-1440px';
    items[1].style.marginLeft = '-720px';
    items[2].style.marginLeft = '0px';
}

// function slideshow(){
//     if(links[0].clicked == true){
//         items[0].style.marginLeft = '0px';
//         items[1].style.marginLeft = '721px';
//         items[2].style.marginLeft = '1441px';
//     }else if (links[1].clicked == true){
//         items[0].style.marginLeft = '-720px';
//         items[1].style.marginLeft = '0px';
//         items[2].style.marginLeft = '720px';
//     }else if (links[2].clicked == true){
//         items[0].style.marginLeft = '-1440px';
//         items[1].style.marginLeft = '-720px';
//         items[2].style.marginLeft = '0px';
//     }
// }

// open how.html in new window on button click
function pageNew(){
    window.open('how.html', '_self', false);
}