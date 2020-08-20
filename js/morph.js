
function morph(){

document.getElementById('everything').style.display = 'none';
document.getElementById('item').style.display = 'none';
document.getElementById('item2').style.display = 'block';
document.getElementById('sub').style.display = 'none';
document.getElementById('unSub').style.display = 'block';
document.getElementById('nav-linkp').style.display = 'none';
document.getElementById('header1').style.height = '80%';
document.getElementById('chat1').style.display = 'none';
document.getElementById('nav-linko').innerHTML = '<a class="nav-link active" href="mailto:info@woodandmortar.com?Subject=Hello%20again&body=If%20GMAIL%20didnt%20open%20please%20send%20a%20gmail%20message%20to%20my%20sender%20address">Create Account</a>';
document.getElementById('nav-linkp').innerHTML = '<a class="nav-link"><div class="g-signin2" data-onsuccess="onSignIn"></div></a>';

}

function unMorph(){

document.getElementById('everything').style.display = 'block';
document.getElementById('item').style.display = 'block';
document.getElementById('item2').style.display = 'none';
document.getElementById('sub').style.display = 'block';
document.getElementById('unSub').style.display = 'none';
document.getElementById('nav-linkp').style.display = 'block';
document.getElementById('header1').style.height = '100%';
document.getElementById('chat1').style.display = 'block';
document.getElementById('nav-linko').innerHTML = '<a class="nav-link" href="https://www.facebook.com/woodmortar" target="_blank" >Book Now</a>';
document.getElementById('nav-linkp').innerHTML = '<a class="nav-link" href="mailto:info@woodandmortar.com?Subject=General%20Inquiry&body=Place%20message%20here%20please" target="_blank" >Contact</a>';

}
