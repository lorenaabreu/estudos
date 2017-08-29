angular.module('estoque').controller('ProdutoController', function($scope, $http){
	
	$scope.produtos = [];
	$scope.filtro = '';

	
	$http.get('v1/fotos')
	.success(function(produtos){
		$scope.produtos = produtos;
	}).error(function(erro){
		console.log(erro);
	});
	
});