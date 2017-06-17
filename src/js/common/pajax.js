(function ($) {
    NProgress.configure({ showSpinner: false });
    $(document).pjax('a[data-pjax]', '#page-main', {
        fragment: "#page-main",
        timeout: 8000
    });
    
    $(document).on('pjax:start', function (a) {
        NProgress.start();
    });
    $(document).on('pjax:end', function () {
        NProgress.done();
    });
})(jQuery);

