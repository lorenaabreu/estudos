angular.module('estoqueServicos', ['ngResource'])
.factory('recursoProduto', function($resource){
	
	//resource não suporte put, por isso é necessário
	//criar o método de update
	return $resource('v1/fotos/:prodId', null, {
		'update': {
			method:'PUT'
		} 
	});
	
})
.factory('recursoGrupo', function($resource){
	return $resource('v1/grupos');
})
.factory('cadastroDeProdutos', function(recursoProduto, $q, $rootScope){
	
	//$q deixa criar promessas
	//é default e padrão do Angular
	
	var servico = {};
	var evento = 'produtoCadastrado';
	servico.cadastrar = function(produto){
		/*$q recebe como parâmetro uma função com resolve e reject
		 * onde o retorno disso tudo é uma promessa
		 * resolve é uma função onde o q for passado para ela
		 * vai ser disponível no 'then' (ou sucesso) da promessa
		 * e o reject é caso haja erro*/
		return $q(function (resolve, reject){
			if(produto._id){
				recursoProduto.update({prodId: produto._id}, produto, function(){
					/*Não é possível manipular o $scope dentro de um serviço
					 * tendo em vista que ele deve ser utilizado apenas nos Controllers
					 * por isso é utilizado o $rootScope, que é o scope raíz de todos
					 * os scopes dos controllers*/
					$rootScope.$broadcast(evento);
					resolve({
						mensagem: 'Produto '+ produto.titulo + ' alterado com sucesso.',
						inclusao: false
					});
				}, function(erro){
					console.log(erro);
					reject({
						mensagem: 'Erro ao alterar o produto '+ produto.titulo
					});
				})
			} else {
				recursoProduto.save(produto, function(){
					$rootScope.$broadcast(evento);
					resolve({
						mensagem: 'Produto '+produto.titulo+' inserido com sucesso',
						inclusao: true
					});
				}, function(erro){
					console.log(erro);
					reject({
						mensagem: 'Erro na inserção do produto.'
					});
				});
			};
		});
	};
	
	return servico;
	
});