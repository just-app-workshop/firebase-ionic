(function() {
	'use strict';
	
	angular
	.module('supermodular.firebase')
	.controller('FirebaseArticlesController', FirebaseArticlesController);
	
	FirebaseArticlesController.$inject = ['$state', 'firebaseService'];
	
	/* @ngInject */
	function FirebaseArticlesController($state, firebaseService) {
		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate
		});
		
		function activate() {
			getArticles();
		}
		activate();
		
		// ********************************************************************
		
		function getArticles() {
			firebaseService.getArticles()
			.then(function(articles) {
				vm.articles = articles;
			});
		}
		
		function navigate(articleId) {
			$state.go('app.firebase-article', { articleId: articleId });
		}
	}
})();
