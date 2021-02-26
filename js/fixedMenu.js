// var scrolled;
// window.onscroll = function() {
//     scrolled = window.pageYOffset || document.documentElement.scrollTop;
//     if(scrolled > 500){
//         $(".header-section-fixed").addClass("fixed-active")
//     }
//     if(500 > scrolled){
//         $(".header-section-fixed").removeClass("fixed-active")         
//     }
//     if(scrolled > 7380){
//         $(".header-section-fixed").removeClass("fixed-active")         
//     }
// }

if(document.documentElement.clientWidth > 1600){
    var scrolled;
    window.onscroll = function() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 500){
            $(".header-section-fixed").addClass("fixed-active")
        }
        if(500 > scrolled){
            $(".header-section-fixed").removeClass("fixed-active")         
        }
        if(scrolled > 7400){
            $(".header-section-fixed").removeClass("fixed-active")         
        }
    }
}

if(document.documentElement.clientWidth > 1400){
    var scrolled;
    window.onscroll = function() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 500){
            $(".header-section-fixed").addClass("fixed-active")
        }
        if(500 > scrolled){
            $(".header-section-fixed").removeClass("fixed-active")         
        }
        if(scrolled > 7500){
            $(".header-section-fixed").removeClass("fixed-active")         
        }
    }
}

if(document.documentElement.clientWidth > 1000){
    var scrolled;
    window.onscroll = function() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 500){
            $(".header-section-fixed").addClass("fixed-active")
        }
        if(500 > scrolled){
            $(".header-section-fixed").removeClass("fixed-active")         
        }
        if(scrolled > 8050){
            $(".header-section-fixed").removeClass("fixed-active")         
        }
    }
}

if(document.documentElement.clientWidth > 320){
    var scrolled;
    window.onscroll = function() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 500){
            $(".header-section-fixed").addClass("fixed-active")
        }
        if(500 > scrolled){
            $(".header-section-fixed").removeClass("fixed-active")         
        }
        if(scrolled > 10000){
            $(".header-section-fixed").removeClass("fixed-active")         
        }
    }
}