// VARIABLES
const tieColor = document.getElementById('tieColor');
const titles = document.querySelectorAll('#page');
const arrColors = [ "url('https://images.unsplash.com/photo-1500349812227-3264f5f54181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')", 
                    "url('https://images.unsplash.com/photo-1571028634586-ae87c1a42432?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')", 
                    "url('https://images.unsplash.com/photo-1580298323453-15d7e7323c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')", 
                    "url('https://images.unsplash.com/photo-1580236244970-2adb498f47da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')" 
                ];

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

// TIE COLOR CHANGE
const options = {
    threshold: 0.7,
};

const pageCheck = entries => {
    entries.forEach( entry => {
        console.log('page', entry.isIntersecting)
    
        if(entry.isIntersecting){
            tieColor.style.backgroundImage = "url('https://images.unsplash.com/photo-1500349812227-3264f5f54181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"
        }
    })
};

let observer = new IntersectionObserver(pageCheck, options);

titles.forEach( title => {
    observer.observe(title);
})

console.log('titles',titles)
