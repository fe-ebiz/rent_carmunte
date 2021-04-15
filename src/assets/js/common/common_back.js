//input 자동완성 기능끄기
$('input').attr('autocomplete','off');


$(document).ready(function(){
    //메뉴 관련
    let anchorOn = false;
    let anchorList = $(".header .main-menu-ul>li>a");
    anchorList.on("click", function(e){
        
        let anchorName = $(this).data('move-anchor');
        if(anchorName == undefined){
            return false;
        }
        let correctPos = 83;
        if(window.innerWidth <= 900){
            correctPos = 0;
        }

        anchorOn = true;
        let anchorBox = document.getElementsByClassName(anchorName);
        let anchorTop = $(anchorBox).offset().top - correctPos;
        $('html').animate({
            scrollTop: anchorTop
        },600,
        function(){
            // setMenuActiveCheck();
            anchorOn = false;
        });
    });


});


/*스크롤 업*/
$(document).ready(function(){
    $(".fn-up-wrap").hide();
    $(".fn-up-wrap").css("oparcity","0");
    $(window).on("scroll", function(){
        // console.log((window.scrollY > 600));
        if(window.scrollY > 700){
            $(".fn-up-wrap").show();
            $(".fn-up-wrap").stop().animate({ "opacity": '1'},200);
        }
        else{
            $(".fn-up-wrap").stop().animate({ "opacity": '0'}, 200,
            function(){
                $(".fn-up-wrap").hide();
            });
        }
    });

    $(".fn-scroll-up").on("click", function(){
        $('html, body').animate( { scrollTop : '0' }, 300);
    });
});

/*모바일일 때 적용(팝업버튼이 견적이동 버튼으로)*/
$(document).ready(function(){
    let winW = window.outerWidth;
    if(winW <= 900){
        let = shopBtn = $(".sect-shoping .car-info-box .btn-quote");
        shopBtn.removeClass("btn-open-consult");
        shopBtn.addClass("btn-move-quote");

        let = headerBtn = $(".header .main-menu-ul .btn-open-consult");
        headerBtn.removeClass("btn-open-consult");
        headerBtn.addClass("btn-move-quote");
    }
});


/*가기버튼*/
$(document).ready(function(){
    $(".btn-bottom-sect .btn-estimate").removeAttr("href");
    $(".btn-move-quote").on("click", function(){
        let quoteBox = $(".sect-quote")
        if(quoteBox == undefined){
            return false;
        }
        let correctPos = 83;
        if(window.innerWidth <= 900){
            correctPos = 0;
        }
        
        let anchorTop = quoteBox.offset().top - correctPos;
        $('html').animate({
            scrollTop: anchorTop
        },600,
        function(){
        
        });
    });
});



/*테슬러용*/
$(document).ready(function(){
    let txt_origin_pc = $(".modal-complete-request .message-main .txt-pc").html();
    let txt_origin_m = $(".modal-complete-request .message-main .txt-pc").html();

    $(".btn-tsla").on("click", function () {
        $(".modal-complete-request .message-main .txt-pc").html("<span class='mark'>테슬러<br>상담요청이 완료되었습니다.</span>");
        $(".modal-complete-request .message-main .txt-mobile").html("테슬러<br>상담요청완료!");
    });
    $(".modal-complete-request .btn-close-complete").on("click", function () {
        $(".modal-complete-request .message-main .txt-pc").html(txt_origin_pc);
        $(".modal-complete-request .message-main .txt-mobile").html(txt_origin_m);
    });

    $(".modal-complete-request .btn-go-complte").on("click", function () {
        $(".modal-complete-request .message-main .txt-pc").html(txt_origin_pc);
        $(".modal-complete-request .message-main .txt-mobile").html(txt_origin_m);
    });

    $(".modal-complete-request .btn-close-pop").on("click", function () {
        $(".modal-complete-request .message-main .txt-pc").html(txt_origin_pc);
        $(".modal-complete-request .message-main .txt-mobile").html(txt_origin_m);
    });

});