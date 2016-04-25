(function() {
	'use strict';
	
	angular
	.module('supermodular.firebase')
	.controller('FirebaseArticleController', FirebaseArticleController);
	
	FirebaseArticleController.$inject = ['$stateParams', 'firebaseService'];
	
	/* @ngInject */
	function FirebaseArticleController($stateParams, firebaseService) {
		var articleId = $stateParams.articleId;
		
		var vm = angular.extend(this, {
			article: null,
		});
		
		function activate() {
			loadArticle();
		}
		activate();
		
		// ********************************************************************
		
		function loadArticle() {
			firebaseService.getArticle(articleId)
			.then(function(article) {
				vm.article = article;
			});
		}
	}
})();
