$(function() {
	var loc = location.href;
	var n1 = loc.substr(loc.indexOf('?') + 1);
	var n2 = n1.substr(n1.indexOf('=') + 1);
	if (n2 == "101") {
		$.ajax({
			url: 'https://www.topfix.cn/repair-api/business/queryserver',
			type: "POST",
			data: {
				pid: 101,
			},
			success: function(data) {
				$("#modelAll").html(template("tpl1", {
					data: data
				}));
				$("#modelAll>#modelBox").click(function() {
					var serviceid1 = $(this).context.dataset.serviceid
					localStorage.setItem("model", $(this).context.dataset.model);
					localStorage.setItem("serviceid", $(this).context.dataset.serviceid);
					localStorage.setItem("mpic", $(this).context.dataset.mpic);
					location.href = "phonefault.html?" + "serviceid1=" + serviceid1;
				})
			}
		});
	} else if (n2 == "102") {
		$.ajax({
			url: 'https://www.topfix.cn/repair-api/business/queryserver',
			type: "POST",
			data: {
				pid: 102,
			},
			success: function(data) {
				$("#modelAll").html(template("tpl1", {
					data: data
				}));
				$("#modelAll>#modelBox").click(function() {
					var serviceid2 = $(this).context.dataset.serviceid
					localStorage.setItem("model", $(this).context.dataset.model);
					localStorage.setItem("serviceid", $(this).context.dataset.serviceid);
					localStorage.setItem("mpic", $(this).context.dataset.mpic);
					location.href = "padfault.html?" + "serviceid2=" + serviceid2;
				})
			}
		});
	}

})