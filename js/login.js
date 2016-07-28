mui.init();

mui.plusReady(function() {

	
})



function requestLogin() {
		mui.ajax('http://123.56.176.67:8080/contractor/appRequest/appInfo.do?methodName=loginbgt', {
			data: {
				jsonString: {
					username: "18201162099",
					password: "21218CCA77804D2BA1922C33E0151105"
				}

			},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			success: function(data) {
				console.log("返回数据", data);
			},
			error: function(xhr, type, errorThrown) {
				//异常处理；
				console.log(type);
			}
		});

	}