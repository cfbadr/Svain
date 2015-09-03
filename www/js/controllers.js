angular.module('starter.controllers', [])

    .config(function($compileProvider){
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .controller('YoutubeurCtrl', function($scope, $ionicPopup, $timeout)
    {
        $scope.users = [
            {nom: 'Anthonin', categorie: 'Humour', display:1},
            {nom: 'Akim Omiri', categorie: 'Humour', display:1},
            {nom: 'Audrey Marshmaloo', categorie: 'Beauté', display:1},
            {nom: 'Aypierre', categorie: 'Gaming', display:1},
            {nom: 'Azn Dark Production', categorie: 'Gaming', display:1},
            {nom: 'Arden Channel', categorie: 'Musique', display:1},
            {nom: 'Anjer', categorie: 'Musique', display:1},
            {nom: 'Bapt & Gael', categorie: 'Humour', display:1},
            {nom: 'Brice Duan', categorie: 'Humour', display:1},
            {nom: 'By Sankah Officiel', categorie: 'Gaming', display:1},
            {nom: 'Bodytime', categorie: 'Sport', display:1},
            {nom: 'Canal bis', categorie: 'Humour', display:1},
            {nom: 'Cyprien', categorie: 'Humour', display:1},
            {nom: 'Caroline & Safia', categorie: 'Beauté', display:1},
            {nom: 'Clara Channel', categorie: 'Beauté', display:1},
            {nom: 'Chake Up', categorie: 'Beauté', display:1},
            {nom: 'CodJordan23', categorie: 'Gaming', display:1},
            {nom: 'Cyprien Gaming', categorie: 'Gaming', display:1},
            {nom: 'Cyrus North', categorie: 'Education', display: 1},
            {nom: 'Cover Garden', categorie: 'Musique', display:1},
            {nom: 'Dylan Del Rey', categorie: 'Humour', display:1},
            {nom: 'Danaëmakeup', categorie: 'Beauté', display:1},
            {nom: 'Doc Seven', categorie: 'Education', display: 1},
            {nom: 'Dr. Nozman', categorie: 'Education', display: 1},
            {nom: 'DidiChandouidoui', categorie: 'Education', display: 1},
            {nom: 'Elle Mady', categorie: 'Humour', display:1},
            {nom: 'EnjoyPhoenix', categorie: 'Beauté', display:1},
            {nom: 'Emy Ltr', categorie: 'Beauté', display:1},
            {nom: 'Elsa Make up', categorie: 'Beauté', display:1},
            {nom: 'Emma Cakecup', categorie: 'Beauté', display:1},
            {nom: 'Florian Nguyen', categorie: 'Humour', display:1},
            {nom: 'Furious Jumper', categorie: 'Gaming', display:1},
            {nom: 'Frigiel', categorie: 'Gaming', display:1},
            {nom: 'FromHumanToGod', categorie: 'Sport', display:1},
            {nom: 'Gonzague Tv', categorie: 'Humour', display:1},
            {nom: 'Golden Moustache', categorie: 'Humour', display:1},
            {nom: 'Georgia Secrets', categorie: 'Beauté', display:1},
            {nom: 'Hugo tout Seul', categorie: 'Humour', display:1},
            {nom: 'Jimmy fait le con', categorie: 'Humour', display:1},
            {nom: 'John Rachid', categorie: 'Humour', display:1},
            {nom: 'Jean Onche Le Musclay', categorie: 'Sport', display:1},
            {nom: 'Kevin Razy by Barney Gold', categorie: 'Humour', display:1},
            {nom: 'Kayehhey', categorie: 'Beauté', display:1},
            {nom: 'Norman', categorie: 'Humour', display:1},
            {nom: 'Les clichés de Jigmé', categorie: 'Humour', display:1},
            {nom: 'Le Jimmy labeeu', categorie: 'Humour', display:1},
            {nom: 'Le Rire Jaune', categorie: 'Humour', display:1},
            {nom: 'Les Kassos', categorie: 'Humour', display:1},
            {nom: 'Lasalle', categorie: 'Gaming', display:1},
            {nom: 'Les Topovaures', categorie: 'Education', display: 1},
            {nom: 'Le Masuyuki', categorie: 'Education', display: 1},
            {nom: 'Les Express\'ions', categorie: 'Education', display: 1},
            {nom: 'Le Grand JD', categorie: 'Education', display: 1},
            {nom: 'Les Questions Cons', categorie: 'Education', display: 1},
            {nom: 'Math podcast', categorie: 'Humour', display:1},
            {nom: 'Mademoiselle Gloria', categorie: 'Humour', display:1},
            {nom: 'Monsieur Poulpe', categorie: 'Humour', display:1},
            {nom: 'Mr Lev 12', categorie: 'Gaming', display:1},
            {nom: 'Monsieur Fun', categorie: 'Humour', display:1},
            {nom: 'Nad Rich\' Hard', categorie: 'Humour', display:1},
            {nom: 'Natoo', categorie: 'Humour', display:1},
            {nom: 'Nicolasagne', categorie: 'Humour', display:1},
            {nom: 'Nota Bene', categorie: 'Education', display: 1},
            {nom: 'No Pain No Game', categorie: 'Gaming', display:1},
            {nom: 'Pat la Realisation', categorie: 'Humour', display:1},
            {nom: 'PerfectHonesty', categorie: 'Beauté', display:1},
            {nom: 'Poisson Fécond - Chris', categorie: 'Education', display: 1},
            {nom: 'Ro et Cut TV', categorie: 'Humour', display:1},
            {nom: 'Rose Carpet', categorie: 'Beauté', display:1},
            {nom: 'RougeVertBleu', categorie: 'Education', display: 1},
            {nom: 'Rudy Coia', categorie: 'Sport', display:1},
            {nom: 'Studio Bagel', categorie: 'Humour', display:1},
            {nom: 'Seb la Frite', categorie: 'Humour', display:1},
            {nom: 'Squeezie', categorie: 'Gaming', display:1},
            {nom: 'Sweetie', categorie: 'Beauté', display:1},
            {nom: 'Sundy Jules', categorie: 'Humour', display:1},
            {nom: 'Sup3r Konar !', categorie: 'Gaming', display:1},
            {nom: 'Serhat More', categorie: 'Humour', display:1},
            {nom: 'Theo Gordy', categorie: 'Humour', display:1},
            {nom: 'Tim Official Videos', categorie: 'Humour', display:1},
            {nom: 'Thaek | Look at me & smile', categorie: 'Gaming', display:1},
            {nom: 'Tibo InShape', categorie: 'Sport', display:1},
            {nom: 'Tsuko G.', categorie: 'Musique', display: 1},
            {nom: 'Taupe10', categorie: 'Education', display: '1'},
            {nom: 'Tea time !', categorie: 'Education', display: 1},
            {nom: 'Un panda moqueur', categorie: 'Humour', display:1},
            {nom: 'Unsterbliicher', categorie: 'Gaming', display:1},
            {nom: 'Vinsky', categorie: 'Gaming', display:1},
            {nom: 'Zerator', categorie: 'Gaming', display:1}
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

            if ((posIndex = $scope.list.indexOf($nom)) === -1) {
                $scope.list.push($nom);
                var elmt = document.getElementById("box");
                elmt.style.border = "solid red 3px";
            }
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
        };
        $scope.getIndex = function(user){
            return $scope.users.indexOf(user);
        }
    })


.controller('AppCtrl', function($scope, $ionicModal, $ionicPopup) {

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
            var ref = new Firebase("https://luminous-fire-9407.firebaseio.com/");
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
            var ref = new Firebase("https://luminous-fire-9407.firebaseio.com/");
            ref.authWithPassword({
                "email": $scope.loginData.email,
                "password": $scope.loginData.password
            }, function(error, authData) {
                if (error) {
                    $ionicPopup.alert({
                        title: "Erreur",
                        template: "Ouaai mais non ce compte existe pas ou tu sais pas mettre un mdp kassos"
                    })
                    console.log("Login Failed!", error);
                } else {
                    $scope.log = 1;
                    console.log("Authenticated successfully with payload:", authData);
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
            console.log($scope.log);
            if ($scope.log == 0)
            {
                $ionicPopup.alert({
                    title: 'Erreur ma gueule',
                    template: "Sois pas teubé stp si ta pas de compte tu peux pas trop le voir boloss"
                });
                return;
            }
            $scope.modal3.show();
        };
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
            })
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
    });