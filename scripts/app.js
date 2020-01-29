// VARIABLES
const tieColor = document.getElementById('tieColor')

// SMOOTH SCROLLING
$(document).ready(function(){
    
    $("a").on("click", function(event) {
        
        if(this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            if(hash === '#about-me'){
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function () {
                    window.location.hash = hash;
                });
            } 
            
            if (hash === '#projects') {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1300, function () {
                    window.location.hash = hash;
                });
            } 

            if (hash === '#resume') {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1700, function () {
                    window.location.hash = hash;
                });
            } 

            if (hash === '#contact-me') {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 2100, function () {
                    window.location.hash = hash;
                });
            } 

        };
        
    });
});