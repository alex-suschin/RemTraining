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
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
        return false;
    });


});