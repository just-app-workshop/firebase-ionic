(function() {
	'use strict';

	angular
		.module('supermodular.firebase')
		.factory('firebaseService', firebaseService);

	firebaseService.$inject = [];

	/* @ngInject */
	function firebaseService() {

		var service = {
			getArticles: getArticles,
			getArticle: getArticle
		};
		return service;

		////////////////

		function getArticles() {
			var articles = [];
			return articles;
		}

		function getArticle(articleId) {
			var article = {};
			return article;
		}
	}
})();
