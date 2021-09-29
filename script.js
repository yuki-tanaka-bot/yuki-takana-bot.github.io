function file_get_contents( url ) {	// Reads entire file into a string
	// 
	// +   original by: Legaev Andrey
	// %		note 1: This function uses XmlHttpRequest and cannot retrieve resource from different domain.

	var req = null;
	try { req = new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {
		try { req = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {
			try { req = new XMLHttpRequest(); } catch(e) {}
		}
	}
	if (req == null) throw new Error('XMLHttpRequest not supported');

	req.open("GET", url, false);
	req.send(null);

	return req.responseText;
}


var docs_en = file_get_contents("./docs/docs_en.md");
var docs_ru = file_get_contents("./docs/docs_ru.md");
var docs_de = file_get_contents("./docs/docs_de.md");

$('.doc-content').html(marked(docs_en));
$('.doc-title').html('Documentation');

$('#btn-ru').click(function(){
	$('.doc-content').html(marked(docs_ru));
	$('.doc-title').html('Документация');
});

$('#btn-en').click(function(){
	$('.doc-content').html(marked(docs_en));
	$('.doc-title').html('Documentation');
});

$('#btn-de').click(function(){
	$('.doc-content').html(marked(docs_de));
	$('.doc-title').html('Dokumentation');
});

$('.documentation').focus(function() {
	alert( "Handler for .focus() called." );
});