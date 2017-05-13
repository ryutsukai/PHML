$(function(){
	$("space").each(function(data){
		var size = $(this).attr("size");
		var html = "<div style='height:"+size+"px;'></div>";
		if(size!==undefined){
			$(this).replaceWith(html);
		}
	});
	$("separator").each(function(data){
		var height = $(this).attr("height");
		var space = $(this).attr("space");
		if(space==undefined){
			space = 5;
		}
		var html = "<span style='display:inline-block;height:"+height+"px;width:0px;border:0px;vertical-align:middle;border-left:1px #ddd solid;margin:0px "+space+"px;'></span>";
		if(height!==undefined){
			$(this).replaceWith(html);
		}
	});
	$("nicovideo").each(function(data){
		var video = $(this).attr("video");
		var width = $(this).attr("width");
		var height = $(this).attr("height");
		if(width == undefined){
			width=640;
		}
		if(height == undefined){
			height=360;
		}
		var html = "<iframe src='http://code.phinja.org/nicovideo/"+video+"' width='"+width+"' height='"+height+"' frameborder='0' allowfullscreen></iframe>";
		if(video!==undefined){
			$(this).replaceWith(html);
		}
	});
	$("youtube").each(function(data){
		var video = $(this).attr("video");
		var width = $(this).attr("width");
		var height = $(this).attr("height");
		if(width == undefined){
			width=640;
		}
		if(height == undefined){
			height=360;
		}
		var html = "<iframe src='https://www.youtube.com/embed/"+video+"' width='"+width+"' height='"+height+"' frameborder='0' allowfullscreen></iframe>";
		if(video!==undefined){
			$(this).replaceWith(html);
		}
	});
	$("vimeo").each(function(data){
		var video = $(this).attr("video");
		var width = $(this).attr("width");
		var height = $(this).attr("height");
		if(width == undefined){
			width=640;
		}
		if(height == undefined){
			height=360;
		}
		var html = "<iframe src='https://player.vimeo.com/video/"+video+"' width='"+width+"' height='"+height+"' frameborder='0' allowfullscreen></iframe>";
		if(video!==undefined){
			$(this).replaceWith(html);
		}
	});
});
