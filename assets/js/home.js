$(document).ready(function () {

    //Navbar fixed
    $(window).scroll(function () {
        var header = $('#navbar'),
            scroll = $(window).scrollTop();
        let logoImg = $(".logo img")
        let loginRegister = $(".login-register")
        if (scroll >= 150) {
            header.css({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'right': '0',
                'z-index': '99999',
                'background-color': 'white',
                'box-shadow': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                'backdrop-filter':'blur(10px)',
                'background':'transparent'
            });
            logoImg.css({
                'margin-top': '26px'
            })
            loginRegister.css({
                'background-color': 'white'
            })
        } else {
            header.css({
                'position': 'relative',
                'box-shadow': 'none'
            });
            logoImg.css({
                'margin-top': '40px'
            })
        }
    });

    
})