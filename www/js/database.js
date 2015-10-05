angular.module('starter.controllers')

.controller("DatabaseCtrl", function($scope, Items) {
	$scope.items = Items;
	$scope.addItem = function() {
		var name = prompt("What do you need to buy?");
		if (name) {
			$scope.items.$add({
				"name": "fdddssd"
			});
		}
	};
});
