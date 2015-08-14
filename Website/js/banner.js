var banners = [];
banners.push({
	background:"url('img/hero/ass.jpg')",
	tagline:"Don't be an ass.",
	punchline:"saddle up, take control of your website."

});
banners.push({
	background:"url('img/hero/cat.jpg')",
	tagline:"Cat got your tongue?",
	punchline:"Let us write for you."
});
banners.push({
	background:"url('img/hero/cookies.jpg')",
	tagline:"Our office has coffee and cookies.",
	punchline:"Seriously."
});
banners.push({
	background:"url('img/hero/guitarguy.jpg')",
	tagline:"Stop playing with yourself",
	punchline:"Let yourself be heard."
});
banners.push({
	background:"url('img/hero/otter.jpg')",
	tagline:"Leave the worrying to us.",
	punchline:"test"
});
banners.push({
	background:"url('img/hero/nuts.jpg')",
	tagline:"DIY is nuts.",
	punchline:"Lets us handle it."
});
banners.push({
	background:"url('img/hero/table.jpg')",
	tagline:"Eating alone?",
	punchline:"Maybe its your web presence."
});
banners.push({
	background:"url('img/hero/plane.jpg')",
	tagline:"Is your site a wreck?",
	punchline:"We can help."
});
banners.push({
	background:"url('img/hero/monkey.jpg')",
	tagline:"Don't monkey around.",
	punchline:"Your brand is important."
});

banners.push({
	background:"url('img/hero/snail.jpg')",
	tagline:"Is your brand slowing you down?",
	punchline:"let us speed it up."
});
banners.push({
	background:"url('img/hero/dog.jpg')",
	tagline:"Your dog is lonely.",
	punchline:"Let us do the work."
});
banners.push({
	background:"url('img/hero/monks.jpg')",
	tagline:"Thought about your presence lately?",
	punchline:"We can help revive it."
});
banners.push({
	background:"url('img/hero/gorilla.jpg')",
	tagline:"It's a jungle out there.",
	punchline:"Make your brand, King."
});
banners.push({
	background:"url('img/hero/stairs.jpg')",
	tagline:"Don't Trip.",
	punchline:"Step up your digital game."
});
banners.push({
	background:"url('img/hero/table.jpg')",
	tagline:"Eating alone?",
	punchline:"Maybe its your web presence."
});
banners.push({
	background:"url('img/hero/sheep.jpg')",
	tagline:"Fleeced by other developers?",
	punchline:"Don't let it happen again."
});
banners.push({
	background:"url('img/hero/table.jpg')",
	tagline:"Eating alone?",
	punchline:"Maybe its your web presence."
});
banners.push({
	background:"url('img/hero/meter.jpg')",
	tagline:"Time's Up.",
	punchline:"Tell your brand to get it together."
});
banners.push({
	background:"url('img/hero/feet.jpg')",
	tagline:"Take a leap of faith",
	punchline:"It might do you some good."
});

$(document).ready(function() {
	if(typeof(Cookies.get('lastImg')) == 'undefined') {
		var index = Math.floor(Math.random()*banners.length);
		Cookies.set('lastImg',index,{expires:365});
		setHero(banners[index].background,banners[index].tagline,banners[index].punchline);
	}
	else {
		var oldIndex = parseInt(Cookies.get('lastImg'));
		var newIndex = oldIndex + 1;
		if(typeof(banners[newIndex]) == 'undefined') newIndex = 0;
		setHero(banners[newIndex].background,banners[newIndex].tagline,banners[newIndex].punchline);
		Cookies.set('lastImg',newIndex);
	}
});

function setHero(img,tagline,punchline) {
	$('.intro').css('background-image',img);
	$('.intro h1').html(tagline);
	$('.intro p').html(punchline);

}
