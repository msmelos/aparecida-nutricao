
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {

	var pacientes = document.querySelectorAll(".paciente");

	for (var i=0; i < pacientes.length; i++)
	{
		var paciente = pacientes[i];

		var pacienteTD = paciente.querySelector(".info-nome");

		var nome = pacienteTD.textContent;

		var expressao = new RegExp(this.value, "i"); // O modificador "i" é para indicar que estamos buscando por case-insensitive (maiuscula e minusculas)


		if (expressao.test(nome)) {  //testa se o nome do usuário bate com o que foi digitado. Para isto, vamos utilizar sua função .test
			paciente.classList.remove("invisivel");

		} else {

			paciente.classList.add("invisivel");
		}

	}

});




