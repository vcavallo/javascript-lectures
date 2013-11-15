$(document).ready(function(){

    $('.fancybox').fancybox({
        helpers:  {
        title : {
            type : 'inside'
        },
        overlay : {
            css : {
                'background' : 'rgba(255,255,255,0.5)'
                }
            }
        }
    });

    $('#gallery img').fadeTo("fast", 0.20);

    function fadeUp(){
        $(this).fadeTo(100, 1);
    }

    function fadeDown(){
        $(this).fadeTo(350, 0.20);
    }

    $('#gallery img').hover(fadeUp, fadeDown);

});
