angular.module('starter.controllers', [])


    .controller('YoutubeurCtrl', function($scope, $ionicPopup, $timeout)
    {
        $scope.users = [
            {nom: 'Dylan Del Rey', categorie: 'Humour', display:1},
            {nom: 'Canal bis', categorie: 'Humour', display:1},
            {nom: 'Normann', categorie: 'Humour', display:1},
            {nom: 'Cyprien', categorie: 'Humour', display:1},
            {nom: 'Beoriginalisbetter', categorie: 'Beauté', display:1},
            {nom: 'CarolineSafia', categorie: 'Beauté', display:1},
            {nom: 'EnjoyPhoenix', categorie: 'Beauté', display:1},
            {nom: 'PerfectHonesty', categorie: 'Beauté', display:1},
            {nom: 'Danaëmakeup', categorie: 'Beauté', display:1},
            {nom: 'CodJordan23', categorie: 'Gaming', display:1},
            {nom: 'Unsterbliicher', categorie: 'Gaming', display:1},
            {nom: 'Thaek | Look at me & smile', categorie: 'Gaming', display:1},
            {nom: 'SQUEEZIE', categorie: 'Gaming', display:1},
            {nom: 'Tibo InShape', categorie: 'Sport', display:1},
            {nom: 'Jean Onche Le Musclay', categorie: 'Sport', display:1},
            {nom: 'FromHumanToGod', categorie: 'Sport', display:1},
            {nom: 'Bodytime', categorie: 'Sport', display:1},
            {nom: 'Anjer', categorie: 'Musique', display:1},
            {nom: 'Cover Garden', categorie: 'Musique', display:1},
            {nom: 'Arden Channel', categorie: 'Musique', display:1},
            {nom: 'Tsuko G.', categorie: 'Musique', display: 1},
            {nom: 'Doc Seven', categorie: 'Education', display: 1},
            {nom: 'Poisson Fécond - Chris', categorie: 'Education', display: 1},
            {nom: 'Taupe10', categorie: 'Education', display: '1'},
            {nom: 'DidiChandouidoui', categorie: 'Education', display: 1}
        ];
        $scope.list = [];

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

            if ((posIndex = $scope.list.indexOf($nom)) === -1)
                $scope.list.push($nom);
            else
                $scope.list.splice(posIndex, 1);
        };
        $scope.showList = function(){
            var popUp = $ionicPopup.alert({
                title: 'Liste',
                template: $scope.list.join("<br/>")
            });
            $timeout(function() {
                popUp.close(); //close the popup after 3 seconds for some reason
            }, 10000);
        }
    })


.controller('AppCtrl', function($scope, $ionicModal, $timeout, InscriptionData) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

        $scope.inscriptionData = {};
        $scope.send = InscriptionData;
        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/inscription.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeinscription = function() {
            $scope.modal.hide();
        };

        $scope.inscription = function() {
            $scope.modal.show();
        };

        $scope.doinscription = function() {
            console.log("Je suis un test");
            $scope.send.$add({
                "User": $scope.inscriptionData,
            });
            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                $scope.closeinscription();
            }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Regga', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 },
      { title: 'Rai', id: 7 }
  ];
})

.controller('InfoCtrl', function($scope) {
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
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
        }).then(function(modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function() {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                $scope.closeLogin();
            }, 1000);
        };

    });