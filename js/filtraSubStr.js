
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {

	var pacientes = document.querySelectorAll(".paciente");

	for (var i=0; i < pacientes.length; i++)
	{
		var paciente = pacientes[i];

		var pacienteTD = paciente.querySelector(".info-nome");

		var nome = pacienteTD.textContent;


		var resultado = nome.substr(0, this.value.length);

		var resultadoMinusculo = resultado.toLowerCase();
		var nomeMinusculo = this.value.toLowerCase();

		if (resultadoMinusculo==nomeMinusculo) {  
			paciente.classList.remove("invisivel");

		} else {

			paciente.classList.add("invisivel");
		}

	}

});




