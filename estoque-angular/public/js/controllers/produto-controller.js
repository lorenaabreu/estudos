angular.module('estoque').controller('ProdutoController', function($scope, $http, $routeParams){
	
	$scope.produto = {};
	$scope.mensagem ='';
	
	if($routeParams.prodId){
		$http.get('v1/fotos/'+ $routeParams.prodId)
		.success(function(produto){
			$scope.produto = produto;
		})
		.error(function(erro){
			console.log(erro);
			$scope.mensagem = 'Não foi possível encontrar o produto de ID '+ $routeParams.prodId;
		});
	};
	
	$scope.submeter = function(){
		if($scope.formProd.$valid){
			if($scope.produto._id){
				$http.put('v1/fotos/'+ $scope.produto._id, $scope.produto)
				.success(function(){
					$scope.mensagem = 'Produto '+ $scope.produto.titulo + ' alterado com sucesso.';
				})
				.error(function(erro){
					console.log(erro);
					$scope.mensagem = 'Erro ao alterar o produto '+ $scope.produto.titulo;
				})
			} else{
				$http.post('v1/fotos', $scope.produto)
				.success(function(){
					$scope.mensagem = 'Produto inserido com sucesso';
				})
				.error(function(erro){
					$scope.mensagem = 'Erro na inserção do produto.';
					console.log(erro);
				});	
				
			};
			
		};
		
	};
	
	
	$scope.limpar = function(){
		$scope.formProd.$submitted = false;
		$scope.mensagem = '';
		$scope.produto = {
				url: '',
				titulo:''
		};
	};
	
});