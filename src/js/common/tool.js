var tool = (function () {
    // tool.checkbox(function (flag) {
    //     console.log(flag);
    // });
    function checkbox(callback) {
        var checkbox = $('input[type=checkbox]');
        checkbox.each(function () {
            if ($(this).is(":checked")) {
                $(this).parent().addClass('checked');
            }
        });
        checkbox.on('click', function () {
            if (checkbox.is(":checked")) {
                $(this).parent().addClass('checked');
            } else {
                $(this).parent().removeClass('checked');
            }
            callback && callback(checkbox.is(":checked") ? true : false);
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
        checkbox: checkbox,
        tabs : tabs
    }
})();