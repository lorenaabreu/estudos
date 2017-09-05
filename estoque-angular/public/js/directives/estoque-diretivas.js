angular.module('estoqueDiretivas',['estoqueServicos'])
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
	
})
.directive('meuBotaoPerigo', function(){
	var ddo = {};
	
	ddo.restrict = 'E'
		
	//utiliza-se o '&' quando deseja passar uma expressão para a diretiva
	//uma vez que o '@' obtem a string literal
	ddo.scope={
			acao:'&',
			nome:'@'
	}
	
	ddo.templateUrl = 'js/directives/meu-botao-perigo.html'
	return ddo;
})
.directive('meuFocus', function(){
	var ddo = {};
	
	ddo.restrict = 'A';
	
	/*O '=' permite uma comunicação bidirecional
	 * para que tanto o controller saiba quando a diretiva
	 * estiver alterando o valor e vice-versa*/
	/*ddo.scope = {
			focado: '='
	};*/
	
	
	/* Toda compilação no angular retorna uma função de link que dá acesso ao escopo da diretiva 
	 * ao elemento do dom que se quer trabalhar. É somente na fase link q pode utilizar watchers (escutadores)*/
	ddo.link = function(scope, element){
		/*$watch vai ficar escutando um elemento (primeiro parametro) para que, sempre q ele for alterado
		 * seja executado o código dentro.
		 * */
		/*scope.$watch('focado', function(){
			if(scope.focado){
				/*O angular utiliza o JQLite e não o JQuery, por tanto, para obter a função de focus precisa ir ao elemento DOM
				 * que está encapsulado no elemento JQLite. Esse elemento DOM é o primeiro do array, por isso o índice 0.
				 * Se fosse com JQuery seria possível fazer diretamente element.focus();*/
			/*	element[0].focus();
				scope.focado = false;
			}
		});*/
		/*Essa propriedade é para escutar o evento disparado pelo controller
		 * em substituição do watch, pois este último é muito custoso.
		 * Acaba nem precisando mais do scope privado da diretiva, pois
		 * vai escutar evento e não mais a propriedade privada de focado*/
		scope.$on('produtoCadastrado', function(){
			element[0].focus();
		});
	};
	return ddo;
})
.directive('meusTitulos', function(){
	var ddo = {};
	
	ddo.restrict = 'E';
	
	ddo.scope = {
			
	};
	
	ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>'; 
	
	/*propriedade da diretiva q simula um controller e, portanto
	 * é possível obter $scopo e tudo o mais que um controller
	 * obtém*/
	ddo.controller = function($scope, recursoProduto){
		recursoProduto.query(function(produtos){
			$scope.titulos = produtos.map(function(produto){
				return produto.titulo;
			});
		}, function(erro){
			console.log(erro);
		});
	}
	
	
	return ddo;
});
