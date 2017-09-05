angular.module('estoque').controller('ProdutoController', function($scope, cadastroDeProdutos, recursoProduto, $routeParams){
	
	$scope.produto = {};
	$scope.mensagem ='';
	$scope.url = '';
	
	
	
	if($routeParams.prodId){
		$scope.editar = true;
		$scope.inclusao = false;
		recursoProduto.get({prodId: $routeParams.prodId}, function(produto){
			$scope.produto = produto;
		}, function(erro){
			console.log(erro);
			$scope.mensagem = 'Não foi possível encontrar o produto de ID '+ $routeParams.prodId;
		});
	} else{
		$scope.editar = false;
		$scope.inclusao = true;
	};
	
	$scope.submeter = function(){
		if($scope.formProd.$valid){
			
			cadastroDeProdutos.cadastrar($scope.produto)
			.then(function(retorno){
				$scope.mensagem = retorno.mensagem;
				if (retorno.inclusao) $scope.limpar();
			})
			.catch(function(erro){
				$scope.mensagem = erro.mensagem;
			});
			
		};
		
	};
	
	
	$scope.limparEdit = function(){
		$scope.formProd.$submitted = false;
		$scope.mensagem = '';
		$scope.produto = {};
	
		$scope.url = '/produtos/cadastro';
			
	};
	
	$scope.limpar = function(){
		$scope.formProd.$submitted = false;
		//$scope.mensagem = '';
		$scope.produto = {};
	
	};
	
});