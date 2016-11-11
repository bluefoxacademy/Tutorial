var myApp = angular.module('myApp', []);

myApp.controller('productController', function ($scope) {
    $scope.isAddOrEdit = false;
    $scope.products = [{ productId: 101, productName: 'Laptop', price: 1000 }, { productId: 102, productName: 'Mac', price: 2000 }];
    $scope.newProduct = {};

    $scope.addNew = function () {
        $scope.isAddOrEdit = true;
    }

    $scope.cancel = function () {
        $scope.isAddOrEdit = false;
    }

    $scope.saveProduct = function () {
        $scope.products.push($scope.newProduct);
        $scope.newProduct = {};
        $scope.cancel();
    }
});
