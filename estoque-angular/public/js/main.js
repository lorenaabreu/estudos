angular.module('estoque', ['estoqueDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider){
	//Configuração de rotas, informando 
	//qual a palavra chave com o controller correspondente
	//através de um objeto JS
	
	$routeProvider.when('/produtos', {
		templateUrl: 'partials/principal.html',
		controller: 'ProdutosController'
	});
	
	$routeProvider.when('/produtos/cadastro', {
		templateUrl: 'partials/cadastro-produto.html',
		controller: 'ProdutoController'
	});
	
	$routeProvider.when('/produtos/editar/:prodId', {
		templateUrl: 'partials/cadastro-produto.html',
		controller: 'ProdutoController'
	});
	
	$routeProvider.otherwise({ redirectTo: '/produtos' });
	
	//Habilitar a utilização do HTML5
	//desde que o server esteja preparado para utiliza-lo
	//serve para deixarmos de utilizar o '#' e utilizar apenas
	//o caminho da rota em si
	
	$locationProvider.html5Mode(true);
});