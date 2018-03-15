var $navlist = $('#nav-list');

$('#menu-btn').click(function(){
	
	if($navlist.hasClass('show')){
		$navlist.slideUp(100);
		$navlist.removeClass('show');
	}else{
		$navlist.slideDown(100);
		$navlist.addClass('show');
	}
});