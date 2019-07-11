$('.tab-title li').mousemove(function(){
	$(this).addClass('active').siblings('li').removeClass('active');
	var dijige = $(this).index();
	//alert(dijige);
	$(this).closest('.tab_box').find('.tab-item').eq(dijige).show().siblings('.tab-item').hide();
});
 //var mypcas = new PCAS("myprovince","mycity","myarea");

// 移动端根据设备屏幕宽度动态设置html根元素的font-size，使用rem做单位
//(function(){
//var deviceWidth = "",
//d = document.documentElement;
//window.onresize = setFont;
//setFont();
//function setFont(){
//  deviceWidth = Math.min(750, window.innerWidth, d.clientWidth);
//  d.style.fontSize = deviceWidth / 7.5 + "px";
//};
//})();

//swiper轮播
  /* ========
    Debugger plugin, simple demo plugin to console.log some of callbacks
    ======== */
    var myPlugin = {
      name: 'debugger',
      params: {
        debugger: false,
      },
      on: {
        init: function () {
          if (!this.params.debugger) return;
          console.log('init');
        },
        click: function (e) {
          if (!this.params.debugger) return;
          console.log('click');
        },
        tap: function (e) {
          if (!this.params.debugger) return;
          console.log('tap');
        },
        doubleTap: function (e) {
          if (!this.params.debugger) return;
          console.log('doubleTap');
        },
        sliderMove: function (e) {
          if (!this.params.debugger) return;
          console.log('sliderMove');
        },
        slideChange: function () {
          if (!this.params.debugger) return;
          console.log('slideChange', this.previousIndex, '->', this.activeIndex);
        },
        slideChangeTransitionStart: function () {
          if (!this.params.debugger) return;
          console.log('slideChangeTransitionStart');
        },
        slideChangeTransitionEnd: function () {
          if (!this.params.debugger) return;
          console.log('slideChangeTransitionEnd');
        },
        transitionStart: function () {
          if (!this.params.debugger) return;
          console.log('transitionStart');
        },
        transitionEnd: function () {
          if (!this.params.debugger) return;
          console.log('transitionEnd');
        },
        fromEdge: function () {
          if (!this.params.debugger) return;
          console.log('fromEdge');
        },
        reachBeginning: function () {
          if (!this.params.debugger) return;
          console.log('reachBeginning');
        },
        reachEnd: function () {
          if (!this.params.debugger) return;
          console.log('reachEnd');
        },
      },
    };




$('#menu-btn').click(function(){
	if($('#nav-box:visible').length == 0){
		$('#nav-box').slideDown(500);
	}else{
		$('#nav-box').slideUp(500);
	}
});

$('#nav-search').click(function(){
	$('.search-form').stop().slideToggle();
});

$('.win-homepage').click(function(){
	if(document.all){
		document.body.style.behavior='url(#default#homepage)';
		document.body.setHomePage(document.URL);
	}else{
		alert('设置首页失败，请手动设置！')
	}
});

$('.win-favorite').click(function(){
	var sURL=document.URL;var sTitle=document.title;
	try{
		window.external.addFavorite(sURL,sTitle);
	}catch(e){
		try{
			window.sidebar.addPanel(sTitle,sURL,'')
		}catch(e){
			alert('加入收藏失败，请使用Ctrl+D进行添加')
		}
	}
});

$('.win-forward').click(function(){
	window.history.forward(1);
});
$('.win-back').click(function(){
	window.history.back(-1);
});
$('.win-backtop').click(function(){
	$('body,html').animate({scrollTop:0},1000);
	return false;
});
$('.win-refresh').click(function(){
	window.location.reload();
});
$('.win-print').click(function(){
	window.print();
});
$('.win-close').click(function(){
	window.close();
});




// 所有class=“layer”超的链接点击使用layer弹窗显示
//$('.layer').click(function(event){
//	var w = $(this).data('width');
//	var h = $(this).data('height');
//	w = w ? w:'800';h = h ? h:'500';
//	w = w + 'px';h = h + 'px';
//	event.preventDefault();
//	layer.open({
//		type:2,
//		title:$(this).data('title'),
//		content:[$(this).data('href')],
//		area:[w,h],
//	})
//});
$(window).scroll(function(){
	var winHeight = $(window).height();
	var scrollTop  = $(document).scrollTop();

	if(scrollTop >= winHeight-500){
		$('#scrollTopA').show();
	}else{
		$('#scrollTopA').hide();
	}
})
$('#scrollTopA').click(function(){
	$('body').animate({'scrollTop':'0'},1000);
})


$('#nav-box li').hover(
	function(){
		$(this).addClass('active');$(this).children('.submenu').slideDown(300);
	},
	function(){
		$(this).removeClass('active');$(this).children('.submenu').slideUp(300);
	}
);



