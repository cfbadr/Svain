angular.module('starter.controllers')

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
    });