$(function() {
	$("#confirm").click(function() {
        localStorage.setItem("model", "苹果电脑系统安装");
		localStorage.setItem("serviceid", "104");
		localStorage.setItem('priceAll', "180");
		localStorage.setItem('moreFault', JSON.stringify(""));
		localStorage.setItem('moreFaultid', '["35"]');
		location.href = "informationh.html";
	})
})