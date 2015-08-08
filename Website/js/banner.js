var banners = [];
banners.push({
	background:"url('img/hero/ass.jpg')",
	tagline:"Don't be an ass."
});
banners.push({
	background:"url('img/hero/cat.jpg')",
	tagline:"Cat!"
});
banners.push({
	background:"url('img/hero/cookies.jpg')",
	tagline:"Cookies"
});

$(document).ready(function() {
	if(typeof(Cookies.get('lastImg')) == 'undefined') {
		var index = Math.floor(Math.random()*banners.length);
		Cookies.set('lastImg',index,{expires:365});
		setHero(banners[index].background,banners[index].tagline);
	}
	else {
		var oldIndex = parseInt(Cookies.get('lastImg'));
		var newIndex = oldIndex + 1;
		if(typeof(banners[newIndex]) == 'undefined') newIndex = 0;
		setHero(banners[newIndex].background,banners[newIndex].tagline);
		Cookies.set('lastImg',newIndex);
	}
});

function setHero(img,tagline) {
	$('.intro').css('background-image',img);
	$('.intro h1').html(tagline);
}
