/*$.ajax({
	url: "https://top.gg/api/bots/882648343564652544/stats",
	method: "GET",
	dataType: "json",
	crossDomain: true,
	cache: false,
	beforeSend: function (xhr) {
		xhr.setRequestHeader("Authorization", config.TOKEN);
	},
	success: function (data) {
		$('.server-count').html("Active servers: " + data.server_count);
	},
	error: function (jqXHR, textStatus, errorThrown) {
		alert(errorThrown);
	}
});*/

$('.documentation').focus();

$('#btn-ru').click(function(){
	$('.doc-content').html('ru');
	$('.doc-title').html('Документация');
});

$('#btn-en').click(function(){
	$('.doc-content').html('en');
	$('.doc-title').html('Documentation');
});

$('#btn-esp').click(function(){
	$('.doc-content').html('esp');
	$('.doc-title').html('Dokumentado ');
});