

//EDIT THESE LINES
//Title of the blog
var TITLE = "Lector de noticias rss2 ";
//RSS url
//var RSS = "http://www.omicrono.com/feed";
var RSS = "http://www.inf.ucv.cl/feed";
//http://www.inf.ucv.cl/feed/
//Stores entries
var entries = [];
var selectedEntry = "";

//listen for detail links
$(".contentLink").live("click", function() {
	selectedEntry = $(this).data("entryid");

});

function renderEntries(entries) {
    var s = '';
    $.each(entries, function(i, v) {
        s += '<li><a href="#CONTENIDO_FEEDS" data-rel="dialog"   data-transition="pop" class="contentLink" data-entryid="'+i+'">' + v.title + '</a></li>';
    });
    $("#linksList").html(s);
    $("#linksList").listview("refresh");
}

//Listen for Google's library to load
function initialize() {
	console.log('listo para usar google');
	var feed = new google.feeds.Feed(RSS);
	feed.setNumEntries(15);
	$.mobile.showPageLoadingMsg();
	feed.load(function(result) {
		$.mobile.hidePageLoadingMsg();
		console.dir(result);
		if(!result.error) {
			entries = result.feed.entries;
			localStorage["entries"] = JSON.stringify(entries);
			renderEntries(entries);
		} else {
			console.log("Error - "+result.error.message);
			if(localStorage["entries"]) {
				$("#status").html("Utilizando la versión almacenada en caché...");
				entries = JSON.parse(localStorage["entries"]);
				renderEntries(entries);
			} else {
				$("#status").html("Upss, error al obtener el RSS , no hay caché.");
			}
		}
	});
}

//Listen for main page
$("#MENU").live("pageinit", function() {
	//Set the title
	//$("h1", this).text(TITLE);
		try{
			google.load("feeds", "1",{callback:initialize});
		}catch(ex){
			alert("Necesitas conexión a internet");
			console.log(ex);
			//navigator.notification.alert('Necesitas estar conectado a una red de datos',null,'Aplicacion', 'Aceptar');
		}
	
});

$("#MENU").live("pagebeforeshow", function(event,data) {
	if(data.prevPage.length) {
		$("h1", data.prevPage).text("");
		$("#entryText", data.prevPage).html("");
	};
});

//Listen for the content page to load
$("#CONTENIDO_FEEDS").live("pageshow", function(prepage) {
	//Set the title
    $("h1", this).text(entries[selectedEntry].title);
    //$("#sitio").spam('hrefCONTENIDO_FEEDS' );
    
	var contentHTML = "";
	contentHTML += entries[selectedEntry].content;
	contentHTML += '<p/><a href="'+entries[selectedEntry].link + '" id="sitio" >Ir al sitio</a>';
    //contentHTML += '<p/>';
	$("#entryText",this).html(contentHTML);
    // 
    
   
});
	
