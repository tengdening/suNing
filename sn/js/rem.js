var designWidth= 750;   //设计稿宽度。
function resize(){
	var width = document.documentElement.clientWidth;
	var fontSize=width/designWidth * 100;
	document.documentElement.style.fontSize= fontSize+"px";
}
resize();
window.onresize = resize;