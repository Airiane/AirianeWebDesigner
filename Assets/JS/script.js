$(document).ready(function(){
	$("article").load('home.html');

	$("#home").click(function(){
		$("article").load('home.html');
	});
	$("#sobre").click(function(){
		$("article").load('Sobre.html');
	});
	$("#contatos").click(function(){
		$("article").load('Contatos.html');
	});
	$("#projetos").click(function(){
		$("article").load('Projetos.html');
	});
});