document.body.onkeypress = function(){document.body.classList.toggle('liked')}

setInterval(function(){
    //document.body.onkeypress = function(){document.body.classList.toggle('liked')}
    document.body.classList.toggle('liked');
},1000);