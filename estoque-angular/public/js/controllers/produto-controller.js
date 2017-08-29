angular.module('estoque').controller('ProdutoController', function($scope){
	$scope.produtos = [{
			titulo: 'Uni baby',
			url: 'https://i.pinimg.com/736x/73/61/98/736198596b99b1b519098fed4000c3f5--baby-unicorn-chibi-unicorn.jpg'
	}
	
	,{
			titulo: 'Uni color',
			url: 'https://i.pinimg.com/736x/97/4d/4b/974d4bb3eddb20a6236a6c66fbf3122b--kawaii-drawings-cute-drawings.jpg'
	}
	
	, {
			titulo: 'Uni lindo',
			url: 'https://s-media-cache-ak0.pinimg.com/736x/5e/a8/ed/5ea8edb51d682a67612144c8f48d568b--baby-unicorn-unicorn-art.jpg'
	}]
});