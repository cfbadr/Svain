angular.module('starter.controllers')

.controller('YoutubeurCtrl', function($scope, $ionicPopup, $timeout, $rootScope)
{
	$scope.changeColorPeople = function (user) {
		if (user.color == 'white') {
			user.color = '#ef473a';
		}
		else {
			user.color = 'white';
		}
		if (user.clr == 'black') {
			user.clr = 'white';
		}
		else {
			user.clr = 'black';
		}
	}

	$rootScope.list = [];
	$scope.users = [];

	$scope.test = "YOLO";

	var videxpo = new Firebase('https://luminous-fire-9407.firebaseio.com/salon/videocity/exposants/');
	videxpo.on('value', function(snap)
	{
		snap.forEach( function(user)
		{
			$scope.$apply(function()
			{
				$scope.users.push({nom: user.V.path.o[3]
					, categorie: user.val().categorie
					, display: 1
					, color: 'white'
					, clr: 'black'
					, img: 'data:image/jpeg;base64, ' + user.val().image});
			});
		});
	});

	$scope.random = function() {
		return 0.5 - Math.random();
	}

	$scope.Tous = function(){
		$scope.users.forEach(function(users)
		{
			users.display =1;
		})
	};

	$scope.Humour = function(){
		$scope.users.forEach(function(users)
		{
			if (users.categorie == "Humour")
				users.display =1;
			else
				users.display=0;
		})
	};

	$scope.Beaute = function(){
		$scope.users.forEach(function(users)
		{
			if (users.categorie == "Beaute")
				users.display =1;
			else
				users.display=0;
		})
	};

	$scope.Gaming = function(){
		$scope.users.forEach(function(users)
		{
			if (users.categorie == "Gaming")
				users.display =1;
			else
				users.display=0;
		})
	};

	$scope.Sport = function(){
		$scope.users.forEach(function(users)
		{
			if (users.categorie == "Sport")
				users.display =1;
			else
				users.display=0;
		})
	};

	$scope.Musique = function(){
		$scope.users.forEach(function(users)
		{
			if (users.categorie == "Musique")
				users.display =1;
			else
				users.display=0;
		})
	};

	$scope.Education = function(){
		$scope.users.forEach(function(users)
		{
			if (users.categorie == "Education")
				users.display =1;
			else
				users.display=0;
		})
	};

	$scope.modifyList = function($nom){
		var posIndex;

		if ((posIndex = $scope.list.indexOf($nom)) === -1) {
			$scope.list.push($nom);
		}
		else
			$scope.list.splice(posIndex, 1);
	};

	$scope.getIndex = function(user){
		return $scope.users.indexOf(user);
	}
});
