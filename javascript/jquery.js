$(document).ready(function(){
	$("#headcolor").click(function(){
		$("h1").toggle();
		$("p").toggle();
		$("#middlemain").css("background-color", "red");
	});
	$("#topimg").click(function(){
		$("#middlemain").css("background-color", "blue");
	})
});
