var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 500){
        $(".header-section-fixed").addClass("fixed-active")
    }
    if(500 > scrolled){
        $(".header-section-fixed").removeClass("fixed-active")         
    }
}