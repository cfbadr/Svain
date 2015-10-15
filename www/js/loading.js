angular.module('starter.controllers', [])

.controller('LoadingCtrl', function($scope, $ionicLoading) {
	$scope.show = function() {
		$ionicLoading.show({
			templateUrl: 'templates/loading.html'
		});
	};
	$scope.hide = function(){
		$ionicLoading.hide();
	};
});
