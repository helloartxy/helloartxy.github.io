$(function(){
    setWrapperHt();
});

$(window).resize(function(){
    setWrapperHt();
});

function setWrapperHt(){
    var windowHt = $(window).innerHeight(), wrapper = $(".wrapper");
    wrapper.css("height", windowHt+"px");
}
