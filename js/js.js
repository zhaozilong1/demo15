
$(window).scroll(function () {
    var a = $(window).scrollTop();
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



//获取轮播文字
$.ajax({
    url:"http://localhost:3000/item/hqlunboconcat",
    type:"POST",
    success:function (w) {
        for(var i in w){
            $(".carousel-caption").eq(i).append("<h2>"+w[i].title+"</h2>"+w[i].futitle+"<span></span>")
        }
    }
});
//获取轮播图片
$.ajax({
    url:"http://localhost:3000/item/hqlunbosrc",
    type:"POST",
    success:function (w) {
        for(var i in w){
            $(".item").eq(i).append("<img src='http://localhost:3000/"+w[i].imgsrc+"'>")
        }
    }
});


//产品介绍
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
//轮播
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

    $(".lunbo").css("height",height1 + "px");

//轮播获取
$.ajax({
    url:"http://localhost:3000/tdlb/tunaduihqlunbosrc",
    type:'POST',
    success:function (e) {
        $.ajax({
            url:"http://localhost:3000/tdlb/tuanduihqlunboconcat",
            type:"POST",
            success:function (w) {
                var str=""
                for(var i in e){
                    str+="<div class='td_tu'><img src='http://localhost:3000/"+e[i].imgsrc+"'><h4>"+w[i].name+"</h4><h5>"+w[i].jieshao+"</h5><p>"+w[i].xiangqing+"</p></div>"
                }
                $(".ull li").eq(0).append(str)
                $(".ull li").eq(1).append(str)
            }
        })

    }
})
$.ajax({
    url:"http://localhost:3000/item/hqxiaoshouconcat",
    type:"POST",
    success:function (e) {
        var str=""
        for(var i in e){
            str+="<li><div class=\"market-top\">"+e[i].val+"</div><div class=\"market-btm\">"+e[i].txt+"<span class='"+e[i].fontclass+"'></span></div></li>"
        }
        $(".mark").append(str)
    }
});

//项目展示
$.ajax({
    url: "http://localhost:3000/zhan/zhanshicount",
    type: "POST",
    data: {
        uid: 1
    },
    success: function (e) {
        for (var i in e) {
            $(".elect-btm").append("<li><img src='http://localhost:3000/" + e[i].imgsrc + "'><b></b></li>")

        }
    }
})
$(".elect-top a").click(function () {
    var uid=$(this).attr("th-id")
    $.ajax({
        url: "http://localhost:3000/zhan/zhanshicount",
        type: "POST",
        data: {
            uid:uid
        },
        success: function (e) {
            var str=""
            for (var i in e) {
                str+="<li><img src='http://localhost:3000/" + e[i].imgsrc + "'><b></b></li>"
            }
            $(".elect-btm").html(str)
        }
    })
})






































