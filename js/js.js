
$(window).scroll(function () {
    var a = $(window).scrollTop();
    console.log(a)
    if(a > 50 && a < 100){
        $("nav").css({background:" transparent"})
        $("nav").hide()
    }else{
        $("nav").css({background:"rgba(0,0,0,.5)"})
        $("nav").slideDown()
    }
    if(a <= 100){
        $("nav").css({background:" transparent"})
    }
});




$.ajax({
    url:"http://localhost:3000/item/hqlunboconcat",
    type:"POST",
    success:function (w) {
        for(var i in w){
            $(".carousel-caption").eq(i).append("<h2>"+w[i].title+"</h2>"+w[i].futitle+"<span></span>")
        }
    }
})
$.ajax({
    url:"http://localhost:3000/item/hqmobanconcat",
    type:"POST",
    success:function (w) {
        var str = "";
        for(var i in w){
           str += "<li><div class=\"temp-img\"><span class=\"glyphicon glyphicon-qrcode\" style=\"font-size:40px\"></span></div><div class=\"temp-tet\"><h5>"+w[i].title+"</h5><b>"+w[i].concat+"</b></div></li>"
        }
        $(".template-message ul").append(str)
    }
})

    var n=0;
    var w = 1170
//            下一个
    $('.td-xi').click(function(){
        n++
        if(n==2){
            n=0;
        }
        $('.ull').animate({
            "left":-w * n+'px'
        },500)
    })

    //上一个
    $('.td-sh').click(function(){
        n--
        if(n==-1){
            n=1;
        }
        $('.ull').animate({
            "left":-w * n+'px'
        },500)

    });
    var height1 = document.documentElement.clientHeight
// console.log(height1)
    // .plate,.plate2,.plate4,.plate5,.plate6,.plate7,.plate8,.plate9
    $(".lunbo").css("height",height1 + "px");

$(".right span").click(function () {
    $(this).css("background","#ff5100").siblings().css("background","rgba(0,0,0,.8)")
})




