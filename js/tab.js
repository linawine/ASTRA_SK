$(document).ready(function () {
	$("#tabs").tabs();
});

$(".tabs-up .tabs__item a").click(function () {
	var index = $(this).parent().index();
	$(".tabs-up .tabs__list").prepend($(this).closest("li"));
	$(".tabs-up").tabs("option", "active", index);
});


