$(function() {
	$.ajax({
		url: 'https://www.topfix.cn/repair-api/business/queryserver',
//		async: false,
		type: "POST",
		data: {
			pid: 103,
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
					location.href = "macfault.html?" + "serviceid2=" + serviceid2;
				})
		}
	});

})