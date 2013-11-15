$(document).ready(function(){
    //slide function for first image
    function slideAway(){
        $(this).find('#kitten1').slideToggle("fast");
    }
    $('#hover1').hover(slideAway);

    //opacity function for second image
    function fadeAway(){
        $(this).find('img').fadeTo("fast", .19);
    }
    function fadeBack(){
        $(this).find('img').fadeTo("fast", 1);
    }
    $('#hover2').hover(fadeAway, fadeBack);

    //slideup function for third image
    function comeOnUp(){
        $(this).find('.bottom').animate({bottom:"233px"},500);
    }
    function goBackDown(){
        $(this).find('.bottom').animate({bottom:"0px"},500);
    }
    $('#hover3').hover(comeOnUp,goBackDown);

    //same function can basically be used for next one
    function comeUpLess(){
        $(this).find('.bottom').animate({bottom:"125px"},500);
    }
    function goBackDown(){
        $(this).find('.bottom').animate({bottom:"0px"},500);
    }
    $('#hover4').hover(comeUpLess,goBackDown);
});
