//首页事件的开始====================================================
var images = ["img/index-bg03.jpg", "img/index-bg02.jpg"];

$(".index").backstretch(images, {
  fade: 750,
  duration: 3000,
  preload: 1, //Use the lazy-loading functionality
  start: 2 //Optional - now starts with "dome.jpg"
});

$(".scrollA").click(function (event) {
  var target=$(this.hash)
  $("html").animate({
    //获取锚点对应元素距离页面顶部的距离，用作滑动距离
    scrollTop:target.offset().top
  },1000);
})

//首页事件的结束====================================================

//关于脚本的开始====================================================
//获取自定义属性用[]
//滚动监听，监听目标界面滑动，来切换导航
$('body').scrollspy({ target: '#mynavbar' })
delayShow();
//平滑滚动
$(".navbar a").click(function(event) {
  //this.hash获取的是锚点，即链接跳转的地址
  var target = $(this.hash);
  $("html").animate({
    //获取锚点对应元素距离页面顶部的距离，用作滑动距离
    scrollTop:target.offset().top
  },1000);

});

function delayShow() {
  if($("[data-animation-effect]").length>0){
    //遍历每个有自定义属性data-animation-effect的元素
    $("[data-animation-effect]").each(function(index, el) {
      var $this = $(this);
      //获取data-animation-effect对应的值
      var animationEffect = $this.attr("data-animation-effect");
      setTimeout(function(){
        //给当前元素添加删除指定的类
        $this.removeClass("object-non-visiable").addClass("object-visiable");
        //添加动画效果
        $this.addClass('animated '+ animationEffect);
      },400);
    });
  }
}

//图集 的开始====================================================
$(".filter li a").click(function(){
  var filterValue =  $(this).attr('data-filter');
  $(".isotope-container").isotope({ filter: filterValue });
  $(this).parent().addClass('active').siblings().removeClass('active');
  return false;
});

//图集 的结束====================================================
