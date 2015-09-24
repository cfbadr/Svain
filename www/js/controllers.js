angular.module('starter.controllers', [])

.config(function($compileProvider){
	$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('YoutubeurCtrl', function($scope, $ionicPopup, $timeout, $rootScope)
{
	$scope.changeColorPeople = function (user) {
		if (user.color == 'white') {
			user.color = 'red';
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

	$scope.users = [
	{nom: 'Adele ta cherie d\'amour', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Akim Omiri', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Anthonin', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Bapt & Gael', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Brice Duan', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Canal bis', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Cyprien', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Dylan Del Rey', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Elle Mady', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Florian Nguyen', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Gonzague Tv', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Golden Moustache', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Hugo tout Seul', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'HugoPosay', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Jimmy fait le con', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Jojo Bernard', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'John Rachid', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Kevin Razy by Barney Gold', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Norman', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'La chaine de Jérémy', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Le Jimmy labeeu', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Le Rire Jaune', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Les clichés de Jigmé', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Les Kassos', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Math podcast', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Mademoiselle Gloria', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Monsieur Poulpe', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Monsieur Fun', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Nad Rich\' Hard', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Natoo', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Nicolasagne', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Pat la Realisation', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Ro et Cut TV', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Seb la Frite', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Studio Bagel', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Studio Vrac', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Sundy Jules', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Serhat More', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Theo Gordy', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Tim Official Videos', categorie: 'Humour', display:1, color:'white', clr:'black'},
	{nom: 'Un panda moqueur', categorie: 'Humour', display:1, color:'white', clr:'black'},

	{nom: 'Audrey Marshmaloo', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Camille Witt', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Caroline & Safia', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Clara Channel', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Chake Up', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Danaëmakeup', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'EnjoyPhoenix', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Emy Ltr', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Elsa Make up', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Emma Cakecup', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'EmmaAnyone', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Georgia Secrets', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Kayehhey', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Lea Choue', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'PerfectHonesty', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Rose Carpet', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Style Tonic', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Sweetie', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'Yoko-NailArt', categorie: 'Beauté', display:1, color:'white', clr:'black'},
	{nom: 'WomenSouls', categorie: 'Beauté', display:1, color:'white', clr:'black'},

	{nom: 'Amixem', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Aypierre', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Azn Dark Production', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'By Sankah Officiel', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'CodJordan23', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Cyprien Gaming', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Furious Jumper', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Frigiel', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'ItsHeavenFox', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Lasalle', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Mr Lev 12', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'No Pain No Game', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Skyyart et Chelxie', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Squeezie', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Sup3r Konar !', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Thaek | Look at me & smile', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Unsterbliicher', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Vinsky', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Wartek Gaming', categorie: 'Gaming', display:1, color:'white', clr:'black'},
	{nom: 'Zerator', categorie: 'Gaming', display:1, color:'white', clr:'black'},

	{nom: 'Arden Channel', categorie: 'Musique', display:1, color:'white', clr:'black'},
	{nom: 'Anjer', categorie: 'Musique', display:1, color:'white', clr:'black'},
	{nom: 'Cover Garden', categorie: 'Musique', display:1, color:'white', clr:'black'},
	{nom: 'Tsuko G.', categorie: 'Musique', display:1, color:'white', clr:'black'},

	{nom: 'Bodytime', categorie: 'Sport', display:1, color:'white', clr:'black'},
	{nom: 'FromHumanToGod', categorie: 'Sport', display:1, color:'white', clr:'black'},
	{nom: 'Jean Onche Le Musclay', categorie: 'Sport', display:1, color:'white', clr:'black'},
	{nom: 'Rudy Coia', categorie: 'Sport', display:1, color:'white', clr:'black'},
	{nom: 'Tibo InShape', categorie: 'Sport', display:1, color:'white', clr:'black'},

	{nom: 'Cyrus North', categorie: 'Education', display:1, color:'white', clr:'black'},
	{nom: 'Doc Seven', categorie: 'Education', display:1, color:'white', clr:'black'},
	{nom: 'Sean Garnier', categorie: 'Sport', display:1, color:'white', clr:'black'},
	{nom: 'Dr. Nozman', categorie: 'Education', display:1, color:'white', clr:'black'},
	{nom: 'DidiChandouidoui', categorie: 'Education', display:1, color:'white', clr:'black'},
	{nom: 'JunkFood Factory', categorie: 'Education', display:1, color:'white', clr:'black'},
	{nom: 'Le Grand JD', categorie: 'Education', display:1, color:'white', clr:'black'},
	{nom: 'Le Masuyuki', categorie: 'Education', display:1, color:'white', clr:'black'},
	{nom: 'Les Topovaures', categorie: 'Education', display:1, color:'white', clr:'black'},
	{nom: 'Les Express\'ions', categorie: 'Education', display:1, color:'white', clr:'black'},
	{nom: 'Les Questions Cons', categorie: 'Education', display:1, color:'white', clr:'black'},
	{nom: 'Nota Bene', categorie: 'Education', display:1, color:'white', clr:'black'},
	{nom: 'Poisson Fécond - Chris', categorie: 'Education', display:1, color:'white', clr:'black'},
	{nom: 'RougeVertBleu', categorie: 'Education', display:1, color:'white', clr:'black'},
	{nom: 'Taupe10', categorie: 'Education', display:1, color:'white', clr:'black'},
	{nom: 'Tea time !', categorie: 'Education', display:1, color:'white', clr:'black'}

	];
	$rootScope.list = [];

	$scope.random = function() {
		return 0.5 - Math.random();
	}

	$scope.Tous = function(){
		$scope.users.forEach(function(users)
		{
			users.display =1;
		})
	};
	$scope.humour = function(){
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
			if (users.categorie == "Beauté")
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
		if (ref.getAuth() == null)
		{
			$ionicPopup.alert({
				title: 'Eweuw maggle',
				template: "Sois pas teubé stp si t'es pas co tu peux pas voir tes Youtubeur"
			});
			return;
		}
		var popUp = $ionicPopup.alert({
			title: 'Tes Youtubeurs préféré ',
			// template: '<div class="list"><a class="item item-avatar" href="#"><img src="../img/Anjer.jpg"><h2>YOLO</h2></a></div>'
			template: $rootScope.list.join('<div class="list"><a class="item item-avatar" href="#"><img src="../img/Anjer.jpg"><h2>YOLO</h2></a></div><br/>')
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
		$ionicPopup.alert({
			title: 'Erreur ma gueule',
			template: "Sois pas teubé stp si ta pas de compte tu peux pas trop le voir boloss"
		});
		return;
	}
	$scope.modal3.show();
};

$scope.deconnection = function(){
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
				{text: "Deconnection"},
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
						$scope.deconnection();
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
				destructiveText: 'Delete',
				titleText: '',
				cancelText: 'Cancel',
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
