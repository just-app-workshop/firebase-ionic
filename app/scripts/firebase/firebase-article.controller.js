(function() {
	'use strict';

	angular
		.module('supermodular.firebase')
		.controller('FirebaseArticleController', FirebaseArticleController);

	FirebaseArticleController.$inject = ['$stateParams', 'firebaseService'];

	/* @ngInject */
	function FirebaseArticleController($stateParams, firebaseService) {
		var articleId = parseInt($stateParams.articleId, 10);

		var vm = angular.extend(this, {
			article: null,
		});

		function activate() {
			loadArticle();
		}
		activate();

		// ********************************************************************

		function loadArticle() {
			// firebaseService.getArticle(articleId)
			// 	.then(function(article) {
			// 		vm.article = article;
			// 	});
		}
	}
})();
