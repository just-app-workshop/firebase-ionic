(function() {
	'use strict';

	angular
		.module('supermodular.firebase', [
			'ionic',
			'supermodular.common'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.firebase-articles', {
					url: '/firebase-articles',
					views: {
						'menuContent': {
							templateUrl: 'scripts/firebase/firebase-articles.html',
							controller: 'FirebaseArticlesController as vm'
						}
					}
				})
				.state('app.firebase-article', {
					url: '/firebase-articles/:articleId',
					views: {
						'menuContent': {
							templateUrl: 'scripts/firebase/firebase-article.html',
							controller: 'FirebaseArticleController as vm'
						}
					}
				});
		});
})();
