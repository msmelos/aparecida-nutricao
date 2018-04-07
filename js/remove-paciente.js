

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    
    var alvoEvento = event.target; // foi clicado (célula)

    if(alvoEvento.tagName=="TD")  { //opcional esta linha só para ter certeza de que estamos eliminando a linha
		var paiDoAlvo = alvoEvento.parentNode;  //tr do paciente

		paiDoAlvo.classList.add("fadeOut"); //realiza a animação ao remover

		//aguardar antes de remover:
		setTimeout(function() {
			paiDoAlvo.remove();
		 }, 500);

	}	

});


