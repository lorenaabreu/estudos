angular.module('estoqueDiretivas',[])
.directive('meuPainel', function() {
	//O nome da diretiva vai ser trocado por hifen
	//ou seja, para utilizar no html vira a tag
	//<meu-painel>
	
	//toda diretiva sempre retorna um DDO - Direct Definition Object
	
	var ddo = {};
	
	//precisa dizer qual a restrição de utilização do DDO
	//AE = Atribut and Element (a diretiva pode ser utilizada como 
	//atributo de uma tag ou um elemento
	ddo.restrict = 'AE';
	
	//scopo privado da diretiva para ela não interferir
	//na view. Esse escopo é apenas da diretiva e não
	//do controller
	
	ddo.scope = {
			titulo:'@'
	};
	
	//transclude = informar que vai manter os dados do filho q estiver
	//no html
	ddo.transclude = true;
	
	//template q vai ser substituido qd for encontrada
	//a tag no html. É possível colocar os códigos html
	//de cada template de diretiva dentro de um arquivo 
	//.html e apontar para o caminho dele.
	
	ddo.templateUrl = 'js/directives/meu-painel.html';
	
	return ddo;

	
})
.directive('minhaFoto', function(){
	
	var ddo = {};
	
	ddo.restrict = 'AE';
	
	ddo.scope ={
			url: '@',
			titulo: '@'
	
	}
	
	ddo.templateUrl = 'js/directives/minha-foto.html';
	
	return ddo;
	
});