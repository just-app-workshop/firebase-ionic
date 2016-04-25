(function() {
	'use strict';
	
	angular
	.module('supermodular.firebase')
	// DB service
	.factory('db', [function() {
		return new Firebase('https://business-directory.firebaseio.com/');
	}])
	// Firebase service
	.factory('firebaseService', firebaseService);
	
	firebaseService.$inject = ['db', '$firebaseArray', '$firebaseObject'];
	
	/* @ngInject */
	function firebaseService(db, $firebaseArray, $firebaseObject) {
		
		var service = {
			getArticles: getArticles,
			getArticle: getArticle
		};
		return service;
		
		////////////////
		
		function getArticles() {
			var query = db.child('news');
			return $firebaseArray(query).$loaded().then(initArray);
		}
		
		function getArticle(articleId) {
			// TODO: Fetch and display a particular article
			var article = {};
			console.log('artice id is '+articleId);
			var query = db.child('news/'+articleId);
			return $firebaseObject(query).$loaded();
		}
		
		function initItem(item) {
			return angular.extend({}, item, {
				guid: item.$id
			});
		}
		
		function initArray(array) {
			return _.map(array, initItem);
		}
	}
})();
