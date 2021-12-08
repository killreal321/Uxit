
$(document).on("scroll", function(){
    if
        ($(document).scrollTop() > 27){
            $("header").addClass("scrolled");
        }
    else
    {
    $("header").removeClass("scrolled");
    }
    });


$(document).on("scroll", function(){
    if
        ($(document).scrollTop() > 27){
            $("ul li:last-child").addClass("scrolled-button");
        }
    else
    {
    $("ul li:last-child").removeClass("scrolled-button");
    }
    });


$(document).on("scroll", function(){
    if
        ($(document).scrollTop() > 27){
            $("ul li .link4").addClass("scrolled-text");
        }
    else
    {
    $("ul li .link4").removeClass("scrolled-text");
    }
    });

