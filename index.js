function home(){
    document.getElementById('home').style.display = 'block';
    document.getElementById('programme').style.display = 'none';
    document.getElementById('art').style.display = 'none';
    document.getElementById('impressum').style.display = 'none'; 
}
function it(){
    document.getElementById('programme').style.display = 'block';
    document.getElementById('art').style.display = 'none';
    document.getElementById('home').style.display = 'none';
}
function art(){
    document.getElementById('art').style.display = 'block';
    document.getElementById('programme').style.display = 'none';
    document.getElementById('home').style.display = 'none';
}
function impressum(){
    document.getElementById('impressum').style.display = 'block';
    document.getElementById('art').style.display = 'none';
    document.getElementById('programme').style.display = 'none';
}