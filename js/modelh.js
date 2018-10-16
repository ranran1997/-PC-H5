$(function() {
		$.ajax({
			url: 'https://www.topfix.cn/repair-api/business/queryserver',
			type: "POST",
			data: {
				pid: 101,
			},
			success: function(data) {
//				console.log(data)
				$("#container").html(template("tpl1", {
					data: data
				}));
				$("#container>#father").click(function() {
					var serviceid = $(this).context.dataset.serviceid
						//存储机型及对应id
					localStorage.setItem("model", $(this).context.dataset.model);
					localStorage.setItem("serviceid", $(this).context.dataset.serviceid);
					location.href = "phonefaulth.html?" + "serviceid=" + serviceid;
				})
			}
		});

})