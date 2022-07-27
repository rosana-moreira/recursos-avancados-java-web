
 function testarExcecao(){
 valorInformado = $('#txtvalor').val();
 
	 $.ajax({
		method:"POST",
		url:"capturarExcecao",
		data :{valorParam : valorInformado}
	})
	.done(function(response){
		alert("Sucesso: "+response);
	})
	.fail(function(xhr, status, errorThrown){
		alert("Error: "+xhr.responseText);
	});
}