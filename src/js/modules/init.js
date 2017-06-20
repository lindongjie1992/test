document.body.addEventListener('touchstart', function (){});

+function($){

    //处理表单基本操作
    var cancelWarp =  $('.item-content .cancel'),
        cancelBtn = cancelWarp.find('.item-cancel'),
        input = cancelWarp.find('.item-input input'),
        sPass = $('.item-content').find('.item-spass')
        
    cancelBtn.on('click',function(){
        $(this).siblings('.item-input').find('input').val('');
        checkEmpty($(this).parents('.item-content'));
    });

    input.on('input',function(){
        checkEmpty($(this).parents('.item-content'));
    });

    input.on('focus',function(){
        var thisItemContent = $(this).parents('.item-content');
        if(thisItemContent.find('input').val() != ''){
            thisItemContent.find('.item-cancel').show();
        }
    });

    input.on('blur',function(){
        $(this).parents('.item-content').find('.item-cancel').hide();
    });

    sPass.on('click',function(){
        var thisInput = $(this).siblings('.item-input').find('input');
        $(this).toggleClass('show');
        if($(this).hasClass('show')){
            thisInput.attr('type','text');
        } else {
            thisInput.attr('type','password');
        }
    });

    function checkEmpty(obj){
        obj.each(function(){
            var thisCancel = $(this).find('.item-cancel');
            if($(this).find('.item-input input').val() != ""){
                thisCancel.show();
            } else {
                thisCancel.hide();
            }
        });
    }
    checkEmpty(cancelWarp);

    
    
    //初始化radio
    tool.itemContentRadio();
    //初始化tabs
    tool.tabs();
}(jQuery);