angular.module('estoque').controller('ProdutosController', function($scope, recursoProduto){
	
	$scope.produtos = [];
	$scope.filtro = '';
	$scope.mensagem ='';
	
	recursoProduto.query(function(produtos){
		$scope.produtos = produtos;
	}, function(erro){
		console.log(erro);
	});
	
	
	$scope.remover = function(produto){
		
		recursoProduto.delete({prodId: produto._id}, function(){
			var indexProduto = $scope.produtos.indexOf(produto);
			$scope.produtos.splice(indexProduto, 1);
			$scope.mensagem = 'Produto ' + produto.titulo + ' foi removido com sucesso.';
			
		}, function(erro){
			console.log(erro);
			$scope.mensagem = 'Erro ao remover o Produto '+ produto.titulo;
		});
		
	};
	
});