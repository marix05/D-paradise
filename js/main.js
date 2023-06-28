$(document).ready(function(){

    //nav header
    function mediaquery(media) {
        if (media.matches) {
            if ($("#navbar-toggler").hasClass('collapsed') === false) {
                $("#navbar-toggler").addClass("collapsed");   
                $("#sidebar-toggler").removeAttr("aria-expanded");
                $("#sidebar-toggler").attr("aria-expanded", "false");
                $(".navbar-collapse").removeClass("show");
                $('#click-collapse').addClass('d-none')
            }
            
            $(window).on('scroll', function(){
                if ($(this).width() > 992) {
                    if($(this).scrollTop() > 5) {
                        $('#nav-header').addClass('fixed-top navbar-light bg-light');
                        $('#nav-header').removeClass('gradient navbar-dark');
                        $('.reservation-btn').addClass('btn-warning');
                        $('.reservation-btn').removeClass('btn-outline-warning');
                    }
                    else{
                        $('#nav-header').addClass('gradient navbar-dark');
                        $('#nav-header').removeClass('fixed-top navbar-light bg-light');
                        $('.reservation-btn').addClass('btn-outline-warning');
                        $('.reservation-btn').removeClass('btn-warning');
                    }    
                }
            });
        } 
        else {
            $('.reservation-btn').addClass('btn-outline-warning');
            $('.reservation-btn').removeClass('btn-warning');
            $('#nav-header').addClass('gradient navbar-dark');
            $('#nav-header').removeClass('fixed-top navbar-light bg-light');

            $("#navbar-toggler").click(function(){
                if($(this).hasClass('collapsed') === false) {
                    $('#nav-header').addClass('navbar-light bg-light');
                    $('#nav-header').removeClass('gradient navbar-dark');
                    $('.reservation-btn').addClass('btn-warning');
                    $('.reservation-btn').removeClass('btn-outline-warning');
                    $('#click-collapse').removeClass('d-none')
                }
                else{
                    $('#nav-header').addClass('gradient navbar-dark');
                    $('#nav-header').removeClass('navbar-light bg-light');
                    $('.reservation-btn').addClass('btn-outline-warning');
                    $('.reservation-btn').removeClass('btn-warning');
                    $('#click-collapse').addClass('d-none')
                }
            });
        }
    }

    const media = window.matchMedia("(min-width: 992px)")
    mediaquery(media);
    media.addListener(mediaquery);

    document.onclick = function(click){
        //nav-menu click collapsed
        if (click.target.id == 'nav-item' || click.target.id == 'click-collapse') {
            $("#navbar-toggler").addClass("collapsed");   
            $("#sidebar-toggler").removeAttr("aria-expanded");
            $("#sidebar-toggler").attr("aria-expanded", "false");
            $(".navbar-collapse").removeClass("show");
            $('#nav-header').addClass('gradient navbar-dark');
            $('#nav-header').removeClass('fixed-top navbar-light bg-light');
            $('.reservation-btn').addClass('btn-outline-warning');
            $('.reservation-btn').removeClass('btn-warning');
            $('#click-collapse').addClass('d-none')
        }
    }

    //counter up
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });

    //arange date picker
    $('.pick-calendar').daterangepicker({
        "singleDatePicker": true,
        "showDropdowns": true,
        locale: {
            format: 'DD/MM/YYYY'
        },
    });

    var isClick = 0;

    $(window).on('click',function(){ 
        isClick = 0;
    });

    $('.pick-calendar').on('apply.daterangepicker',function(){ 
        isClick = 0;
    });

    $('.btn-calendar').on('click',function(e){ 
        e.stopPropagation();

        if(isClick == 1){
            isClick = 0;   
        } 
        else if(isClick == 0){
            isClick = 1;
        } 
        
        if (isClick == 1) {
            $('.pick-calendar').focus();
        }
    });

    $('.pick-calendar').on('click',function(e){ 
        e.stopPropagation();
        isClick = 1;
    });

    $('.daterangepicker').on('click',function(e){ 
        e.stopPropagation();
    });

    //scroll reveal
    ScrollReveal().reveal('.l', {delay:250, duration:500, distance: '300px', origin: 'left', reset:'true'})
    ScrollReveal().reveal('.r', {delay:250, duration:500, distance: '300px', origin: 'right', reset:'true'})
    ScrollReveal().reveal('.t', {delay:250, duration:500, distance: '300px', origin: 'top', reset:'true'})
    ScrollReveal().reveal('.b', {delay:250, duration:500, distance: '300px', origin: 'bottom', reset:'true'})
});

