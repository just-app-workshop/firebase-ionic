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
		
		function getArticle(guid) {
			// TODO: Fetch and display a particular article
			var article = {};
			var query = db.child('news/'+guid);
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
