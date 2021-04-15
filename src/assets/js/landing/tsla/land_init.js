//input 자동완성 기능끄기
$('input').attr('autocomplete','off');


// /*가기버튼*/
// $(document).ready(function(){
//     $(".btn-bottom-sect .btn-estimate").removeAttr("href");
//     $(".btn-move-quote").on("click", function(){
//         let quoteBox = $(".m-consult-wrap-tsla .bg")
//         if(quoteBox == undefined){
//             return false;
//         }
//         let correctPos = 0;
//         if(window.innerWidth <= 900){
//             correctPos = 0;
//         }
        
//         let anchorTop = quoteBox.offset().top - correctPos;
//         $('html').animate({
//             scrollTop: 0
//         },600,
//         function(){
        
//         });
//     });
// });

/*테슬라용 완료박스(상단문구만 변경)*/
// $(document).ready(function(){
//     let txt_origin_pc = $(".modal-complete-request .message-main .txt-pc").html();
//     let txt_origin_m = $(".modal-complete-request .message-main .txt-pc").html();

//     $(".btn-tsla").on("click", function () {
//         $(".modal-complete-request .message-main .txt-pc").html("<span class='mark'>테슬러<br>상담요청이 완료되었습니다.</span>");
//         $(".modal-complete-request .message-main .txt-mobile").html("테슬러<br>상담요청완료!");
//     });
//     $(".modal-complete-request .btn-close-complete").on("click", function () {
//         $(".modal-complete-request .message-main .txt-pc").html(txt_origin_pc);
//         $(".modal-complete-request .message-main .txt-mobile").html(txt_origin_m);
//     });

//     $(".modal-complete-request .btn-go-complte").on("click", function () {
//         $(".modal-complete-request .message-main .txt-pc").html(txt_origin_pc);
//         $(".modal-complete-request .message-main .txt-mobile").html(txt_origin_m);
//     });

//     $(".modal-complete-request .btn-close-pop").on("click", function () {
//         $(".modal-complete-request .message-main .txt-pc").html(txt_origin_pc);
//         $(".modal-complete-request .message-main .txt-mobile").html(txt_origin_m);
//     });

// });

