/* All utils have MIT license */
/* 1. Nifty Modals */
!function(){let t=$(".ap_overlay");$(".ap_trigger").each(function(o){let c="#"+$(this).attr("data-modal"),i=$(c+" .ap_close");function a(){$(c).removeClass("ap_show")}$(this).click(()=>{$(c).addClass("ap_show"),t.click(function(){a()})}),i.click(function(t){t.stopPropagation(),a()})})}();
/* 2. Essential Js -- Clear Input on "X" icon Click */
$(document).ready(function() {
    // Remove this if you don't want to clear input with "X" icon
    $('.element').on('keyup change', function () {
        $('#'+$(this).attr('data-target')).toggle($(this).val().length > 0);
    }).change();
    $('.clear').on('click', function() {
        $('#'+$(this).attr('data-target')).val('');
        $('#'+this.id).hide();
    });
});