$(document).ready(function () {

    $("#myButton").click(function () {
        $(this).hide('slow')
    });


    // $("p").dblclick(function () {
    //     $(this).hide(700);
    // });

    $('p').click(function () {
        $(this).css({
            // "color": "red",
            "font-size": "3rem"
        }, 700);
    });



    $('.menu-icon').click(function () {
        $('.navbar').toggle('isActive');
    })

});


