window.onscroll = function () {
    window.scrollLeft = 0;
}
setTimeout(function() {
    $('#S').animate({opacity:"1"});
}, 2000)
    
setTimeout(function() {
    $('#T').animate({opacity:"1"});
}, 2500)
    
setTimeout(function() {
    $('#E').animate({opacity:"1"});
}, 3000)
    
setTimeout(function() {
    $('#P').animate({opacity:"1"});
}, 3500)
    
setTimeout(function() {
    $('#H').animate({opacity:"1"});
}, 4000)
    
setTimeout(function() {
    $('#E2').animate({opacity:"1"});
}, 4500)
    
setTimeout(function() {
    $('#N').animate({opacity:"1"});
}, 5000)
    
setTimeout(function() {
    $('#P2').animate({opacity:"1"});
}, 5500)
    
setTimeout(function() {
    $('#dot').animate({opacity:"1"});
}, 6000)
    
setTimeout(function() {
    $('.opening_icon').animate({bottom:"0px"});
}, 6500)
    
setTimeout(function(){
    $('.opening_icon').attr('src','images/opening.gif');
}, 6900)

setTimeout(function() {
    let i = 0;
    let txt = 'Hello there, welcome to my site!';
    let speed = 50;
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("opening_header").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter,speed);
        }
    }
    typeWriter();
}, 7500)

setTimeout(function() {
    $('#S').animate({right:"1000px"});
    $('#T').animate({right:"1000px"});
    $('#E').animate({right:"1000px"});
    $('#P').animate({right:"1000px"});
    $('#H').animate({right:"1000px"});
    $('#E2').animate({right:"1000px"});
    $('#N').animate({right:"1000px"});
    $('.leftdoor').animate({right:"3000px"});

    $('.rightdoor').animate({left:"3000px"});
    $('#P2').animate({left:"1000px"});
    $('#dot').animate({left:"1000px"});
    $('.opening_icon').animate({left:"3000px"});
    $('#opening_header').animate({left:"3000px"})
}, 10000)

setTimeout(function() {
    $('.leftdoor').css('z-index','-100');
    $('.rightdoor').css('z-index','-100');
    $('.leftdoor').css('background-color','black');
    $('.rightdoor').css('background-color','black');
    $('.name').css('z-index','-100');
    $('.flex_container').css('z-index','-100')
    document.getElementsByClassName("name")[0].innerHTML = "";
    document.getElementById("opening_header").innerHTML = "";
},11000)




function openAbout() {
    $()
}