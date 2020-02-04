$(function(){
    $('.section-header').stick(200);
    $('.hamburger').click(function(){
        $('.mobile-nav').toggleClass('show');
        $('.hamburger').toggleClass('is-active');
    });
});