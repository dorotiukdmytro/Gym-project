$(function () {

    var $doc = $(document);
    var $headerMain = $('.header-main');

    $doc.scroll(function () {

        const scrollPosition = $doc.scrollTop();
        const headerMainHeight = $headerMain.outerHeight();

        if (scrollPosition > headerMainHeight * 0.2) {
            $('.nav-main').addClass('light-bg');
        } else {
            $('.nav-main').removeClass('light-bg');
        }
    });

    $(document).on('click', 'a', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });

    $('.menu-icon').on('click', function () {
        $('.nav-main').toggleClass('show');
    })

});
