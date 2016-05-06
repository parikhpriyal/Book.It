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
function slideshow(e){
    for(var i = 0; i < links.length; i++){
        links[i].classList.remove('active');
    }

    var clickedLink = e.target;
    bulletLink = clickedLink.currentTarget;

    clickedLink.classList.add('active');
    
    if(0 === bulletLink){
        windo.style.marginLeft = '0px';
    }else if (1 === bulletLink){
        windo.style.marginLeft = '-720px';
    }else{
        windo.style.marginLeft = '-1440px';
    }
}

// open how.html in new window on button click
function pageNew(){
    window.open('how.html', '_self', false);
}