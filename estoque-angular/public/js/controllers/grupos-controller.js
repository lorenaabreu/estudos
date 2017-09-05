angular.module('estoque').controller('GruposController', function($scope, recursoGrupo){
	
	$scope.grupos = [];
	$scope.mensagem = '';
	
	recursoGrupo.query(function(grupos){
		$scope.grupos = grupos;
	}, function(erro){
		console.log(erro);
	});	
	
});