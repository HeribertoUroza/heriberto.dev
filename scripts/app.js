// VARIABLES
const tieColor = document.getElementById('tieColor');
const titles = document.querySelectorAll('#page');
const arrColors = ["url('https://images.unsplash.com/photo-1559142382-6fe8aaed14c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')", 
                    "url('https://images.unsplash.com/photo-1506143925201-0252c51780b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')", 
                    "url('https://images.unsplash.com/photo-1514575619841-1a3d949d3277?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')", 
                    "url('https://images.unsplash.com/photo-1553532434-5ab5b6b84993?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')",
                    "url('https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
                    "url('https://images.unsplash.com/photo-1515387784663-e2e29a23f69e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
                    "url('https://images.unsplash.com/photo-1541415534056-fad380cd68a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
                    "url('https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
                    "url('https://images.unsplash.com/photo-1559644705-15d30e582900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')", 
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
    
        if(entry.isIntersecting){
            tieColor.style.backgroundImage = randomTieImage();
        }
    })
};

const randomTieImage = () => {
    return arrColors[Math.floor(Math.random() * arrColors.length)];
}

let observer = new IntersectionObserver(pageCheck, options);

titles.forEach( title => {
    observer.observe(title);
})

