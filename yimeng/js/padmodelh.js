$(function() {
		$.ajax({
			url: 'https://www.topfix.cn/repair-api/business/queryserver',
			type: "POST",
			data: {
				pid: 102,
			},
			success: function(data) {
//				console.log(data)
				$("#all").html(template("tpl1", {
					data: data
				}));
				
				$("#all>#father").click(function() {
					var serviceid = $(this).context.dataset.serviceid
						//存储机型及对应id
					localStorage.setItem("model", $(this).context.dataset.model);
					localStorage.setItem("serviceid", $(this).context.dataset.serviceid);
					location.href = "faulth.html?" + "serviceid=" + serviceid;

				})
			}
		});

})