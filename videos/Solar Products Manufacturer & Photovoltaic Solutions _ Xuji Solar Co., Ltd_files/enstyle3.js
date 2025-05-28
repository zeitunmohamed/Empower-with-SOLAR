$(function() {
    $(".side ul li").hover(function() {
        var attr_name = $(this).attr('attr').toLowerCase()
        var isMobile = $(window).width() < 768;
        if(isMobile){
            return false;
        }
        var attr_desc = {
            facebook: '#425f9b',
            twitter: '#1da1f2',
            whatsapp:'#54cc61',
            skype:'#10bef2',
            email:'#f9b64b',
            instagram:'#a51e89',
            linkedin:'#007ebb',
            youtube:'#dd2a25',
            youtobe:'#dd2a25',
        }

        $(this).find(".sidebox").stop().animate({
            "width": "160px"
        }, 200).css({
            "opacity": "1",
            "filter": "Alpha(opacity=100)",
            "background": attr_desc[attr_name] ? attr_desc[attr_name] : "#30A6F0"
        })
    }, function() {
        $(this).find(".sidebox").stop().animate({
            "width": "50px"
        }, 200).css({
            "opacity": "0.8",
            "filter": "Alpha(opacity=80)",
            "background": "#000"
        })
    })
});

function goTop() {
    $("html,body").animate({
        "scrollTop": 0
    }, 300)
}

function messageStatistics(e) {
    var type = $(e).attr("attr");
    $.get("/?m=mine&a=message_consult", {
        "type": type
    }, function() {})
};