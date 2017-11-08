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