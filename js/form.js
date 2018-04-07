
function obtemPacienteDoFormulario(form)
{
	var paciente = {

		nome: form.nome.value,
   		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value,form.altura.value)

	}

	return paciente;

}


var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente (paciente);

    if (erros.length > 0 ) {

        exibeMensagensDeErro(erros);
        return;
    }


    adicionaPacienteNaTabela (paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela (paciente) {

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

}

function montaTr(paciente) {

	//cria a TR
	var pacienteTr = document.createElement("tr");

	//adiciona a class do css
	pacienteTr.classList.add("paciente");


	///Cria as TD's e a adiciona dentro da TR
	/*
	var nomeTd = montaTd(paciente.nome,"info-nome");
    var alturaTd = montaTd(paciente.altura,"info-altura");
    var pesoTd = montaTd(paciente.peso,"info-peso");
    var gorduraTd = montaTd(paciente.gordura,"info-gordura");
    var imcTd = montaTd(paciente.imc,"info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    */

    //Cria as TD's e a adiciona dentro da TR - 
    //MELHORADO

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild( montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));


    return pacienteTr;
}


function montaTd(dado,classe) {

	 var td = document.createElement("td");
	 td.classList.add(classe);
	 td.textContent = dado;

	 return td;
}

function validaPaciente (paciente) {

    var erros = [];

    if (!validaPeso(paciente.peso)) {
        erros.push ("Peso é invalido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é invalida");
    }

    if (paciente.nome.length==0) {
        erros.push ("Nome deve ser preenchido");
    }

    if (paciente.gordura.length==0) {
        erros.push ("Gordura deve ser preenchida");
    }

    if (paciente.altura.length==0) {
        erros.push ("Altura deve ser preenchida");
    }

    if (paciente.peso.length==0) {
        erros.push ("Peso deve ser preenchido");
    }

    return erros;

}

function exibeMensagensDeErro(erros) {

    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

