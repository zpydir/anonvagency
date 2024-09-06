/*

    SellDrop
    ------------
    Version 0.1.24

*/

function navbar(){

    let element = document.getElementById("navbarNav");
    element.classList.toggle("navbar__links--active");

}

$('.shop__category').click(function () {
    if(!$(this).hasClass('active')) {
        $('.shop__category').removeClass('active');
        $(this).addClass('active');
        $('.shop__cards').fadeOut();
        $('#category-'+$(this).data('category-index')).fadeIn();
    }
});