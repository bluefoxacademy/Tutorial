app.controller('contactsController', function ($scope, $location,$route,userFactory, telephoneFactory) {
    $scope.newContact = {};
    $scope.selectedUser = {};
    $scope.selectedContact = {};
    var init = function () {
       
        if (sessionStorage["loggedUsername"] != null && sessionStorage["loggedUsername"] != undefined) {
           
            var loggedUsername = sessionStorage["loggedUsername"];
          
            $scope.selectedUser = userFactory.getUserByName({ Username: loggedUsername });
            $scope.userContacts = telephoneFactory.getContactsByUserId($scope.selectedUser.Id);
        }
    }
    init();

    $scope.saveContact = function () {
        $scope.newContact.UserId = $scope.selectedUser.Id;
        telephoneFactory.addNewContact($scope.newContact);
        $location.path('/viewContacts');
    }
    $scope.cancelContact = function () {
        $location.path('/viewContacts');
    }
    $scope.setCurrentContact = function (userContact) {
        //$('#myModal').modal('show')
        $scope.selectedContact = userContact;
    }
    $scope.deleteContact = function () {
        telephoneFactory.deleteContact($scope.selectedContact);
        $scope.selectedContact = null;
        $route.reload();
        $('#myModal').modal('hide')
    }


    $scope.editContact = function (userContact) {
        //$('#myEditContactModal').modal('show')
        $scope.selectedContact = userContact;
    }
    $scope.viewContact = function (userContact) {
        //$('#myViewContactModal').modal('show')
        $scope.selectedContact = userContact;
    }
    $scope.updateContact = function () {
        telephoneFactory.updateContact($scope.selectedContact);
        $scope.selectedContact = null;
        $route.reload();
        $('#myEditContactModal').modal('hide')
    }
});