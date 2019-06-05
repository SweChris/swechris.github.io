
console.clear()

var londonModel = document.querySelector('#london'),
		kyivModel = document.querySelector('#kyiv'),
		rotateBtn = $(".rotate"),
		scaleBtn = $(".scale"),
		switchBtn = $(".switch"),
		gotitBtn = $(".gotit"); 


gotitBtn.click(function(){
	gotitBtn.parent().css({
		display: "none"
	});
});


rotateBtn.click(function(){
	if (rotateBtn.hasClass("rotate_fade")){
		londonModel.emit('endRotate');
		kyivModel.emit('endRotate');
		rotateBtn.removeClass("rotate_fade");
	} else {
		londonModel.emit('rotate');
		kyivModel.emit('rotate');
		rotateBtn.addClass("rotate_fade");
	}
});

var scaleFlag = 0,
		kyivFlag = false;

scaleBtn.click(function(){
	if (scaleFlag == 0){
		scaleFlag = 1;
		londonModel.setAttribute("scale", scale="0.010 0.010 0.010");
		kyivModel.setAttribute("scale", scale="0.02 0.02 0.02");
		scaleBtn.addClass("scale_one");
	} else if (scaleFlag == 1) {
		scaleFlag = 2;
		londonModel.setAttribute("scale", scale="0.015 0.015 0.015");
		kyivModel.setAttribute("scale", scale="0.03 0.03 0.03");
		scaleBtn.addClass("scale_two");
		scaleBtn.removeClass("scale_one");
	} else if (scaleFlag == 2) {
		scaleFlag = 0;
		londonModel.setAttribute("scale", scale="0.009 0.009 0.009");
		kyivModel.setAttribute("scale", scale="0.01 0.01 0.01");
		scaleBtn.removeClass("scale_two");
	}
});

//This is a pen developed from Pavel Laptev code pen: https://codepen.io/PavelLaptev/pen/gXrQKg