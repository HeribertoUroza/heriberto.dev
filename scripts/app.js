

$(document).ready(function(){
    console.log('ready');

    $("a").on("click", function(event) {
        console.log(this.hash)
        event.preventDefault();
        
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    })
})