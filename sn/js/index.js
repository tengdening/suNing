// 倒计时
var shibox=document.querySelector(".count-down .box .shi");
var fenbox=document.querySelector(".count-down .box .fen");
var miaobox=document.querySelector(".count-down .box .miao");

function djs(s,f,m){
var day=new Date();
var end=new Date();
end.setHours(s);
end.setMinutes(f);
end.setSeconds(m);
var daytiem=day.getTime();
var endtiem=end.getTime();
var time=endtiem-daytiem;
var shis=Math.floor(time/(1000*60*60));//除以1000毫秒*60秒*60分
var fens=Math.floor(time/(1000*60))%60;//除以1000毫秒*60秒，然后取余60，,剩下的就是分钟，
var miaos=Math.round(time/1000)%60;
shibox.innerHTML=shis<10?"0"+shis:shis;
fenbox.innerHTML=fens<10?"0"+fens:fens;
miaobox.innerHTML=miaos<10?"0"+miaos:miaos;
}
djs(23,30,0)
setInterval(function(){
	djs(23,30,0)
},1000)

// 获取宽度
var wc=document.documentElement.clientWidth;
var lootUl=document.querySelector(".loot-content-img-box");
var lootLi=document.querySelectorAll(".loot-content-img-box>li");
lootUl.style.width=wc*lootLi.length+"px";

