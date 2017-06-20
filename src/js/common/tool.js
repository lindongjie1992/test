var tool = (function () {

    function itemContentRadio(){
        $('.item-content.radio').on('click',function(e){
            $(this).find('input[type=radio]').prop('checked',true);
            return false;
        });
    }

    function tabs(){
        var aBtn = $('.buttons-tab .button');
        aBtn.on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            var id = $(this).attr('href');
            $(id).addClass('active').siblings().removeClass('active');
        });
    }
    return {
        itemContentRadio: itemContentRadio,
        tabs : tabs
    }
})();