// Banner animation

var banner = $('#banner');
//var bannerImages = [$("#one"), $("#two"), $("#three")];
var bannerImages = ['url(images/banner1.jpg)', 'url(images/banner2.jpg)', 'url(images/banner3.jpg)', 'url(images/banner4.jpg)'];
var imgNum = 0;
var prevImg;


window.setInterval(changeBanner, 2000);

function changeBanner() {
	//var img = getImage();
	//banner.css('background-image', 'url(' + img + ')');
	prevImg = bannerImages[imgNum];
	imgNum += 1;
	if (imgNum > bannerImages.length - 1) {
		imgNum = 0;
	}	
	banner.css('background-image', bannerImages[imgNum]);
	/*setTimeout(function() {
		prevImg.hide(500);
	}, 500);*/
}

function getImage() {
	console.log(imgNum);
	console.log(bannerImages[imgNum]);
	var img = bannerImages[imgNum];
	imgNum += 1;
	if (imgNum > bannerImages.length - 1) {
		imgNum = 0;
	}
	return img;
}

$( document ).ready(function() {

	$('.swipebox').swipebox();
})