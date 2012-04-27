

//图片延迟加载
$("#list_img img").lazyload({ effect: "show",threshold : 200});
//对齐列
$(function(){
	$('#list_img').masonry({ singleMode: true });
});
function mm_load(){
	var str = $("#count_str").val();
	if(str==false){
		str =50;
	}
	str = parseInt(str);
	var total = $("#count_str").attr("t");
	var t = $("#bt_load").html();
	var eid = $("#count_str").attr("eid");
	
	if(t=="载入更多图片…"){
		var r = new Date();
		$("#bt_load").html("<img src='http://img1.ooopic.cn/image/loading.gif'>载入中…");
		$.get("index.php?a=load&r="+r+"&eid="+eid,function(d){
			var arr = d.split("_|_");
			if(arr[0]==false){
				$("#bt_load").hide();
				$("#bt_nodata").show();
			}else{
				$("#count_str").attr("eid",arr[1]);
				$("#list_img").append(arr[0]);
				$('#list_img').masonry('reload');
				
				str += 50;
				$("#count_str").val(str);
				
				$("#bt_load").html("载入更多图片…");
				if(str>=total){
					$("#bt_load").hide();
					$("#bt_nodata").show();
				}
			}	
		});
	}
	
}
var w = document.body.clientWidth;
	 if(parseInt(w)<1200){
	 	$("#b_right").hide();
	 }
