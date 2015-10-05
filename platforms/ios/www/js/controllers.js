angular.module('starter.controllers', [])

.config(function($compileProvider){
	$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):|data:image\//);
})

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

	$scope.conferences = [];

	var salonimg = new Firebase('https://luminous-fire-9407.firebaseio.com/salon/');
	salonimg.on('value', function(snap)
	{
		snap.forEach(function(conf)
		{
			$scope.$apply(function()
			{
				$scope.conferences.push({nom: conf.V.path.o[1], name: conf.val().name, img: 'data:image/jpeg;base64, ' + conf.val().image});
			});
		});
	});

var test = new Firebase('https://luminous-fire-9407.firebaseio.com/salon/videocity/')
test.on('value', function(snap)
{
	$scope.$apply(function()
	{
		$rootScope.yolo = 'data:image/jpeg;base64, ' + snap.val().image
	})
})

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

		if ((posIndex = $rootScope.list.indexOf($nom)) === -1) {
			$rootScope.list.push($nom);
		}
		else
			$rootScope.list.splice(posIndex, 1);
	};

	$scope.getIndex = function(user){
		return $scope.users.indexOf(user);
	}
})


.controller('AppCtrl', function($scope, $ionicModal, $ionicPopup, $ionicActionSheet, $timeout, $rootScope)
{

	$scope.showList = function(){
	// if (ref.getAuth() == null)
	// {
	// 	$ionicPopup.alert({
	// 		title: 'Eweuw maggle',
	// 		template: "Sois pas teubé stp si t'es pas co tu peux pas voir tes Youtubeur"
	// 	});
	// 	return;
	// }
	var popUp = $ionicPopup.alert({
		title: 'Exposant sélectionner',
		// template: '<div class="list"><a class="item item-avatar" href="#"><img src="../img/Anjer.jpg"><h2>YOLO</h2></a></div>'
		template: $rootScope.list.join('<br/>')
		// <div class="list"><a class="item item-avatar" href="#"><img src="../img/Anjer.jpg"><h2>YOLO</h2></a></div>
	});
	$timeout(function() {
			popUp.close(); //close the popup after 3 seconds for some reason
		}, 10000);
	};

	var ref = new Firebase("https://luminous-fire-9407.firebaseio.com/");

	function strcmp(a, b)
	{
		return (a<b?-1:(a>b?1:0));
	}
	$scope.inscriptionData = {};
	$scope.log = 0;
	$ionicModal.fromTemplateUrl('templates/inscription.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal1 = modal;
	});
	$scope.closeinscription = function() {
		$scope.modal1.hide();
	};
	$scope.inscription = function() {
		$scope.closeLogin();
		$scope.modal1.show();
	};
	$scope.doinscription = function() {
	if ($scope.inscriptionData.password.length  < 6) {
		$ionicPopup.alert({
			title: 'Erreur',
			template: "Mot de passe trop court nigga'"
		});
		return ;
	}
	else if (strcmp($scope.inscriptionData.password, $scope.inscriptionData.password_verif) != 0)
	{
		$ionicPopup.alert({
			title: 'Erreur',
			template: "Ahri donne moi le même mot de passe !"
		});
		return ;
	}
	ref.createUser($scope.inscriptionData, function(error, userData) {
		if (error) {
			switch (error.code) {
				case "EMAIL_TAKEN":
				$ionicPopup.alert({
					title: 'Erreur',
					template: "Un compte existe déjà avec cette Email"
				});
				break;
				case "INVALID_EMAIL":
				$ionicPopup.alert({
					title: 'Erreur',
					template: "Il nout faut un email renois !"
				});
				break;
				default:
				$ionicPopup.alert({
					title: 'Erreur',
					template: "Y a une erreur mais j'ai la flemme de trouver quoi demerde toi :)"
			});
			}
		} else {
			console.log("Successfully created user account with uid:", userData.uid);
			var ref = new Firebase("https://luminous-fire-9407.firebaseio.com/");
			var usersRef = ref.child("users");
			$ionicUser.identify({
				user_id: '0',
				name: 'Test User',
				message: 'I come from planet Ion'
			});
			usersRef.child(userData.uid).set({
				date_of_birth: "",
				full_name: $scope.inscriptionData.nom,
				Profile_image: "",
				Follow_list: "",
				statut: "User"
			});

		}
		$scope.modal1.hide();
	});
};

$scope.loginData = {};

$ionicModal.fromTemplateUrl('templates/login.html', {
	scope: $scope
}).then(function(modal) {
	$scope.modal2 = modal;
});

$scope.closeLogin = function() {
	$scope.modal2.hide();
};

$scope.login = function() {
	$scope.modal2.show();
};

$scope.doLogin = function()
{
	ref.authWithPassword({
		"email": $scope.loginData.email,
		"password": $scope.loginData.password
	}, function(error, authData) {
		if (error) {
			$ionicPopup.alert({
				title: "Erreur",
				template: "Ouaai mais non ce compte existe pas ou tu sais pas mettre un mdp kassos"
			})
		} else {
			$scope.log = 1;
			console.log("Authenticated successfully with payload:", authData);
			$scope.modal3.show();
		}
	})
	$scope.modal2.hide();
};

$ionicModal.fromTemplateUrl('templates/show_user.html', {
	scope: $scope
}).then(function(modal) {
	$scope.modal3 = modal;
});

$scope.closeShow_user = function() {
	$scope.modal3.hide();
};

$scope.show_user = function() {
	if (ref.getAuth() == null)
	{
		 var alertPopup = $ionicPopup.alert({
			title: 'Erreur ma gueule',
			template: "Sois pas teubé stp si ta pas de compte tu peux pas trop le voir boloss"
		});
		alertPopup.then(function(res) {
			$scope.login();

			console.log('Thank you for not eating my delicious ice cream cone');
		});
	}
	else
		$scope.modal3.show();
};

$scope.deconnexion = function(){
	ref.unauth();
	$scope.log = 0;
	$scope.modal3.hide();
};
$scope.changePassword = function() {
	$scope.data = {}

			// An elaborate, custom popup
			var myPopup = $ionicPopup.show({
				template: '<input type="password" ng-model="data.password"></br><input type="password" ng-model="data.passwordConfirm">',
				title: 'Entrez votre nouveau mot de passe',
				subTitle:'<ul><li>Minimum 6 caractères</li><li>Mettez bien le même mot de passe</li></ul>',
				scope: $scope,
				buttons: [
				{ text: 'Annuler' },
				{
					text: '<b>Valider</b>',
					type: 'button-positive',
					onTap: function(e) {
						if (!$scope.data.wifi || !$scope.data.passwordConfirm || $scope.data.password.length < 6 || $scope.data.passwordConfirm.length < 6 || strcmp($scope.passwordConfirm, $scope.passwordConfirm)) {
							e.preventDefault();
						} else {

						}
					}
				}
				]
			});
			myPopup.then(function(res) {
				console.log('Tapped!', res);
			});
			$timeout(function() {
				myPopup.close(); //close the popup after 3 seconds for some reason
			}, 100000);
		};
		$scope.manage_account = function(){
			$ionicActionSheet.show({
				buttons: [
				{text: "Déconnexion"},
				{text: "Changer de mot de passe"}
				],
				destructiveText: 'Delete',
				titleText: '',
				cancelText: 'Cancel',
				cancel: function () {
					;
				},
				buttonClicked: function (index) {
					if (index === 0)
						$scope.deconnexion();
					if (index === 1)
						$scope.changePassword();
				}
			});
		}
	})

.controller('InfoCtrl', function($scope) {
})

.controller('AccueilCtrl', function($scope) {

})

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
})

.controller('InscriptionCtrl', function($scope, $ionicModal, $timeout) {
		// Form data for the login modal
		$scope.loginData = {};

		// Create the login modal that we will use later
		$ionicModal.fromTemplateUrl('templates/login.html', {
			scope: $scope
		}).then(function (modal) {
			$scope.modal = modal;
		});

		// Triggered in the login modal to close it
		$scope.closeLogin = function () {
			$scope.modal.hide();
		};

		// Open the login modal
		$scope.login = function () {
			$scope.modal.show();
		};

		// Perform the login action when the user submits the login form
		$scope.doLogin = function () {
			console.log('Doing login', $scope.loginData);

			// Simulate a login delay. Remove this and replace with your login
			// code if using a login system
			$timeout(function () {
				$scope.closeLogin();
			}, 1000);
		};
	})

.controller('GalerieCtrl', function($scope,$ionicActionSheet, $timeout, Camera) {
		// Triggered on a button click, or some other target
		$scope.showPhoto = function () {
			$ionicPopup.alert({
				title: 'Liste',
				template: "smb"
			})
			$timeout(function() {
				popUp.close(); //close the popup after 3 seconds for some reason
			}, 10000);
			$scope.activeSlide = index;
			$scope.showModal('templates/image-popover.html');
		}
		$scope.showModal = function (templateUrl) {
			$ionicModal.fromTemplateUrl(templateUrl, {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.modal = modal;
				$scope.modal.show();
			});
		}

		// Close the modal
		$scope.closeModal = function () {
			$scope.modal.hide();
			$scope.modal.remove()
		}

		$scope.Photos = [];
		$scope.showPanel = function () {

			// Show the action sheet
			var hideSheet = $ionicActionSheet.show({
				buttons: [
				{text: "Prendre une photo"},
				{text: "Ajouter une photo"},
				],
				destructiveText: 'Supprimer votre Compte',
				titleText: '',
				cancelText: 'Annuler',
				cancel: function () {
					;
				},
				buttonClicked: function (index) {
					if (index === 0)
						$scope.getPhoto();
				}
			});
			$scope.getPhoto = function () {
				Camera.getPicture().then(function (imageURI) {
					console.log(imageURI);
					$scope.Photos.push(imageURI);
				}, function (err) {
					console.err(err);
				}, {
					quality: 75,
					targetWidth: 320,
					targetHeight: 320,
					saveToPhotoAlbum: false
				});
			};
		}
	})

.controller('ShowUserCtrl', function($scope){
	$scope.jeclick = function(){
		console.log("Je suis un test");
	}
})
