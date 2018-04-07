
var botaoPacientes = document.querySelector("#buscar-pacientes");

botaoPacientes.addEventListener("click", function() {

	//Para executarmos requisições com o Javascript, precisamos de um objeto especialista nisso, que é o XMLHttpRequest
	var xhr = new XMLHttpRequest();

	// XMLHttpRequest precisa ser configurado, para dizer qual método HTTP queremos utilizar na requisição,
	// e para qual servidor vamos enviá-la. Para configurar o XMLHttpRequest utilizamos a função .open()
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");


	//Para pegarmos a resposta quando a requisiçao HTTP voltar precisamos colocar um escutador de evento no próprio XMLHttpRequest, escutando o evento de load:
	xhr.addEventListener("load", function() {


			var erroAjax = document.querySelector("#erro-ajax");

			//- Para detectarmos se ocorreu algo, devemos utilizar o código de status da requisição HTTP, 
			//que pode ser obtido através da propriedade .status do XMLHttpRequest. Vamos testar se o código é 200, que significa que a requisição foi OK,

			if (xhr.status==200) {

				erroAjax.classList.add("invisivel");

				//- Se você observar o que é impresso no console, você vai ver que o servidor nos retorna um JSON, um formato de texto muito comum hoje em dia na web.
		        var resposta =  xhr.responseText;

		        //console.log(resposta);  

		        //Como converter JSON para um objeto Javascript com a função JSON.parse()
		        var pacientes = JSON.parse(resposta);

		       // console.log (pacientes);

		      for (var i=0; i < pacientes.length; i++)
		      {
		      		var paciente = pacientes[i];
		      		adicionaPacienteNaTabela (paciente);
		      }




			} else {

				erroAjax.classList.remove("invisivel");

			}

	});

	//Por último , para enviar a requisição precisamos chamar o método .send():
	xhr.send();

});