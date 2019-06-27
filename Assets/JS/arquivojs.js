/*pagina inicio*/
function mensagem() {
	alert("Site indisponível no momento.");
}

/*pagina projeto*/
function imagem2() {
	document.getElementById("trocarimg").src="Assets/IMG/SiteRafa1.png";
}

function imagem1() {
	document.getElementById("trocarimg").src="Assets/IMG/logo1.jpg";
}

/*pagina contato*/
function validar() {
	var nome = formu.nome.value;
	var email = formu.email.value;
	var assunto = formu.assunto.value;
	var mensagem = formu.mensagem.value;

	if ((nome == null) || (nome == "")) {
	alert("Preencha todos os campos.");
	formu.nome.value();
	return false;
	}

	if ((email == null) || (email == "")) {
	alert("Preencha todos os campos.");
	formu.email.value();
	return false;
	}

	if ((assunto == null) || (assunto == "")) {
	alert("Preencha todos os campos.");
	formu.assunto.value();
	return false;
	}

	if ((mensagem == null) || (mensagem == "")) {
	alert("Preencha todos os campos.");
	formu.mensagem.value();
	return false;
	}
}