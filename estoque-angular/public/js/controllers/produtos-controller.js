angular.module('estoque').controller('ProdutosController', function($scope, $http){
	
	$scope.produtos = [];
	$scope.filtro = '';
	$scope.mensagem ='';

	
	$http.get('v1/fotos')
	.success(function(produtos){
		$scope.produtos = produtos;
	}).error(function(erro){
		console.log(erro);
	});
	
	
	$scope.remover = function(produto){
		$http.delete('v1/fotos/' + produto._id)
		.success(function(){
			var indexProduto = $scope.produtos.indexOf(produto);
			$scope.produtos.splice(indexProduto, 1);
			$scope.mensagem = 'Produto ' + produto.titulo + ' foi removido com sucesso.';
			
		})
		.error(function(erro){
			console.log(erro)
			$scope.mensagem = 'Erro ao remover o Produto '+ produto.titulo;
		});
		
	};
	
});