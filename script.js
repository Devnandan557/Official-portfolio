$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass('sticky');
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    //typing animation

    var typed = new Typed(".typing",{
        strings:['blogger','Developer','Designer','Freelancer',"content writer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2",{
        strings:['blogger','Developer','Designer','Freelancer',"content writer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    //owl carousel script
    $('.carousel').owlCarousel({
        margin:20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    document.getElementById('more').addEventListener("click", myfun);
    function myfun(){
        var hide = document.getElementById('hide');
        var show = document.getElementById('show');
        var more = document.getElementById('more');
        if(hide.style.display === 'none'){
            hide.style.display = "inline";
            show.style.display = "none";
            more.innerHTML = "Read More";
        }
        else{
            hide.style.display = "none";
            show.style.display = "inline";
            more.innerHTML = "Read Less";
        }
    }
});


