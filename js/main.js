//顯示手機sidebar
$(".navbar-toggler").on("click", function (e) {
    e.preventDefault();
    document.querySelector('.phoneSidebar').style.width = "100%";
})

//隱藏手機sidebar
$(".hideSidebar").on("click", function (e) {
    e.preventDefault();
    document.querySelector('.phoneSidebar').style.width = "0";
})

//手機sidebar下滑選單
$(function () {
    $(".productList").click(function (e) {
        e.preventDefault();
        $(".listContent").slideToggle(400);
        $(".arrowDown").toggleClass("active");
    });
});

//結帳頁面詳細資料箭頭
$(function () {
    $(".productDetailCollapse").click(function (e) {
        e.preventDefault();
        $(".productDetailCollapse .arrowIcon").toggleClass("active");
        $(".totalSpan").toggleClass("active");
    });
});

//結帳頁面顧客資料確認
$(function () {
    $(".contactCard").click(function (e) {
        e.preventDefault();
        $(".contactCard .arrowIcon").toggleClass("active");
        $(".infoSpan").toggleClass("active");
    });
});

$(function () {
    $(".shipCard").click(function (e) {
        e.preventDefault();
        $(".shipCard .arrowIcon").toggleClass("active");
        $(".shipSpan").toggleClass("active");
    });
});