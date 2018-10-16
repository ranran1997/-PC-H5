//通过url截取serviceid
var faultLoc = location.href;
var n3 = faultLoc.substr(faultLoc.indexOf('?') + 1);
var faultserviceid = n3.substr(n3.indexOf('=') + 1);
$(function() {
	$("#mpic").attr("src", localStorage.getItem("mpic"))
	$("#infoText").html("型号：" + localStorage.getItem("model"))
	$.ajax({
		url: 'https://www.topfix.cn/repair-api/business/queryserver',
		type: "POST",
		data: {
			pid: faultserviceid,
		},
		success: function(data) {
			var datas = data;
			$("#chooseColor").html(template("tpl1", {
				datas: datas
			}));
			$("#chooseColor>#selColor").click(function() {
				$(this).children('img').css('display', 'block');
				$(this).siblings().children('img').css("display", "none");
				if ($(this).children('img').css("display") == "block") {
				}
			})
            $("#chooseColor>#selColor").eq(0).click(); 
		}
	});
	$.ajax({ 
		url: 'https://www.topfix.cn/repair-api/parts/queryserver',
		type: "POST",
		data: {
			PartsService: faultserviceid,
		},
		success: function(data) {
			console.log(data)
			$("#chooseFault").html(template("tpl2", {
				data: data
			}));
			$("#chooseFault>#selFault").click(function() {
				($(this).children('img').css("display") == "none") ? $(this).children('img').css('display', 'block'): $(this).children('img').css('display', 'none');
			    
			})
			$("#chooseFault>#selFault").eq(0).click();
		}
	});
	$("#next").click(function() {
		var moreFault = [];
		var moreFaultid = [];
		var priceAll = 0;
		$("#chooseFault>#selFault").each(function() {
			if ($(this).children('img').css("display") == "block") {
				var prices = parseInt($(this).children('p').children('#price').html())
				priceAll += prices
				moreFault.push($(this).children('span').html())
				moreFaultid.push($(this).children('span').attr("data-partsId"))
				localStorage.setItem('priceAll', priceAll);
				localStorage.setItem('moreFault', JSON.stringify(moreFault));
				localStorage.setItem('moreFaultid', JSON.stringify(moreFaultid));
			}
		});

		location.href = "information.html";

	})
})