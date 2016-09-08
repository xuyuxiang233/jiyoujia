$.ajax({
	url:"http://www.ikindness.cn/api/test/getProduct"
}).done(function(data){
	var _data = data.data;
	var dataLen = _data.length;
	for (var i = 0; i < dataLen; i++) {
		var product;
		product = [];

		product.push(

			"<a class=\"imgBox\">"
			+"<img src=\"https:"+_data[i].image+"\" width\"220px\" height=\"220px\" />"
			+"</a>"
			+"<div class=\"jiaGe\">"
			+"<span>¥</span>"
			+"<span class=\"howMuch\">" +_data[i].price+ "</span>"
			+"<div class=\"baoYou\">包邮</div>"
			+"</div>"
			+"<div class=\"introduce\">"+ _data[i].name +"</div>"
			+"<div class=\"threeGan\"></div>"
			+"<div class=\"bottomBox\">"
			+"<label class=\"USM\">"+_data[i].owner+"</label>"
			+"<label class=\"place\">"+_data[i].location+"</label>"
			+"<div class=\"Buy\">"
			+"<input type=\"button\" value=\"购买\" />"
			+"</div>"
			+"</div>"
			+"<div class=\"footBox\">"
			+"<div class=\"icon1\">"
			+"<img src=\"./img/1.png\" />"
			+"</div>"
			+"<div class=\"icon2\">"
			+"<img src=\"./img/2.png\" />"
			+"</div>"
			+"</div>"
			);
			var container = "<div class=\"inner_box\">" + product.join(" ")+"<div>";
			$container = $(".inner");
			$container.append(container);
		};
})