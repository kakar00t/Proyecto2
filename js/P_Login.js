$(document).ready(function(){
$(function(){

$('#formulario_login').submit(function() { 

	 alert("La caracteristica no esta disponible");
    console.log("La caracteristica no esta disponible");
	$.mobile.changePage("#MENU") ;

return false ;
})//fin $("#")


$("#Login").live("pageshow", function(prepage) {
	 alert("La caracteristica no esta disponible");
    console.log("La caracteristica no esta disponible");
	$.mobile.changePage("#MENU")


});//fin $("#")



//$("#mostrar_asignaturas").click(function(e) { e.preventDefault();
// $("#DIRECTORIO").live("pageshow", function(prepage) {
//        
//        var output = '';
//			output =$('#listadatoss');
//			output.empty(); // formatea al div antes de mostrar mas datos muy wena
//
//        $.ajax({
//            url:'http://afrodita.inf.ucv.cl/~cvargas/A_mostrar.php',
//            dataType: 'jsonp',
//            jsonp: 'jsoncallback',
//            timeout: 5000,
//            success: function(data, status){
//				var lista='';
//					// prepara el divisor
// 					lista += '<li data-role="list-divider" ><a >Despliega para actualizar datos</a></li>'; 
//		
//				if ( $.isEmptyObject(data)){// si retorna vacio
//					console.log("no hay asignaturas creadas, resp vacia ");
//					alert('Crear asistencia !');
//					lista += "<li data-role='list-divider'><a>No hay cursos creados</a></li>"	;	
//				}else{
//					
//					$.each(data, function(i,item2){ 
//					//sigla , nombre , creditos ,clave,objetivos ,contenidos
//					lista += "<div data-role='collapsible-set' data-content-theme='c'><div data-role='collapsible'>"
//								  + "<h3>" +item2.nombre+ " [" +item2.sigla + "]</h3>"
//								  + "<p>Clave " +item2.clave+ "</p><br>"
//								  + "<p>Objetivos " +item2.objetivos+ "</p><br>"
//								  + "<p>Contenidos " +item2.contenidos+ "</p>"
//							+ "</div>";
//					});
//				}
//				output.append(lista);
//				//output.listview().listview("refresh");
//				output.trigger("create").listview("refresh");
//            },
//            error: function(){
//               output.text('Cargando datos...'+e);
//            }
//        });	//fin ajax
//		
//});//fin $("#")

});// function PRINCIPAL
});