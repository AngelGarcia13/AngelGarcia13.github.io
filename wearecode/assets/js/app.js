 $(document).ready(function () {
	var logo = $('#logo');

    $(window).scroll(function () {
        var y = $(window).scrollTop();
        
        if (y > 100) {
            logo.removeClass('logo-big').addClass("logo-small");//.animate({ height: "30px" }, "fast");
        }

        else{
            logo.removeClass('logo-small').addClass("logo-big");//.animate({ height: "70px" }, "fast");
        }
    });
 //smoothscroll
    $('#header a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	}); 	
 });
