$(function() {
	var loc = location.href;
	var n1 = loc.substr(loc.indexOf('?') + 1);
	var n2 = n1.substr(n1.indexOf('=') + 1);
	
	if (n2 == "181") {
		$.ajax({
			url: 'https://www.topfix.cn/repair-api/business/queryserver',
			type: "POST",
			data: {
				pid: 181,
			},
			success: function(data) {
//				console.log(data)
				$("#all").html(template("tpl1", {
					data: data
				}));
				$("#androidPic").attr("src", data[0].serviceImg)
				$("#all>#father").click(function() {
					var serviceid = $(this).context.dataset.serviceid
						//存储机型及对应id
					localStorage.setItem("model", $(this).context.dataset.model);
					localStorage.setItem("serviceid", $(this).context.dataset.serviceid);
					location.href = "faulth.html?" + "serviceid=" + serviceid;
				})
			}
		});
	} else if (n2 == "183") {
		$.ajax({
			url: 'https://www.topfix.cn/repair-api/business/queryserver',
			type: "POST",
			data: {
				pid: 183,
			},
			success: function(data) {
//				console.log(data)
				$("#all").html(template("tpl1", {
					data: data
				}));
				$("#androidPic").attr("src", data[0].serviceImg)
				$("#all>#father").click(function() {
					var serviceid= $(this).context.dataset.serviceid
						//存储机型及对应id
					localStorage.setItem("model", $(this).context.dataset.model);
					localStorage.setItem("serviceid", $(this).context.dataset.serviceid);
					location.href = "faulth.html?" + "serviceid=" + serviceid;

				})
			}
		});
	}

})