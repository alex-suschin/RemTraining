import $ from "jquery";
import "./import/modules";
import "../../node_modules/bootstrap/js/dist/modal";
import "./import/jquery.nice-select.min";
import "./import/jquery.mask";

$(function() {


    $("input[type=tel]").mask("+7 (999) 999-9999");

    $('select').niceSelect();

    $('.scrollto').click(function() {
        var scroll_elem = $(this).attr('href');
        if ($(scroll_elem).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_elem).offset().top - 100
            }, 800);
            $('#hamburger-icon').removeClass('active');
            $('.mob-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
        return false;
    });

    $('#hamburger-icon').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mob-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.mob-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });

    $('.programms-btns a').click(function() {
        $('.programms-btns').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.programms-box').find('.programms-elem').hide();
        $('#' + $(this).data('switch')).show();
    });
});