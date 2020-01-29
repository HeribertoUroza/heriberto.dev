

$(document).ready(function(){
    console.log('ready');

    $("a").on("click", function(event) {
        console.log(this.hash)
        
    })
})