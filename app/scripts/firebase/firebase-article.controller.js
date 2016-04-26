(function() {
	'use strict';
	
	angular
	.module('supermodular.firebase')
	.controller('FirebaseArticleController', FirebaseArticleController);
	
	FirebaseArticleController.$inject = ['$stateParams', 'firebaseService'];
	
	/* @ngInject */
	function FirebaseArticleController($stateParams, firebaseService) {
		var guid = $stateParams.guid;
		
		var vm = angular.extend(this, {
			article: null,
		});
		
		function activate() {
			loadArticle();
		}
		activate();
		
		// ********************************************************************
		
		function loadArticle() {
			firebaseService.getArticle(guid)
			.then(function(article) {
				vm.article = article;
			});
		}
	}
})();
