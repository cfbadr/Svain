angular.module('starter.controllers')

.controller('ProfileCtrl', function ($rootScope, ngFB) {
	ngFB.api({
		path: '/me',
		params: {fields: 'id,name'}
	}).then(
		function (user) {
			$rootScope.user = user;
		},
		function (error) {
			alert('Facebook error: ' + error.error_description);
		});
});
