angular.module('starter.controllers')

.controller('AccueilCtrl', function($scope, $rootScope) {
	$scope.conferences = [];

	var salonimg = new Firebase('https://luminous-fire-9407.firebaseio.com/salon/');
	salonimg.on('value', function(snap)
	{
		console.log("salonimg.on");
		snap.forEach(function(conf)
		{
			$scope.$apply(function()
			{
				$scope.conferences.push({nom: conf.V.path.o[1]
					, name: conf.val().name
					, img: 'data:image/jpeg;base64, ' + conf.val().image});
			});
		});
	});

	var videocity = new Firebase('https://luminous-fire-9407.firebaseio.com/salon/videocity/')
	videocity.on('value', function(snap)
	{
		$scope.$apply(function()
		{
			$rootScope.vcitylogo = 'data:image/jpeg;base64, ' + snap.val().image
		})
	})

});
