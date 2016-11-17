app.controller('myProductsController', function ($scope, $http, $routeParams, $location,$route,dataService) {
    $scope.products = [];
    $scope.selectedProduct = null;
    $scope.baseUrl = 'http://localhost:49613/api/Products';
    $scope.categories = ["Mobile", "Laptop", "Hardware"];
    $scope.newProductModel = {};
    var init = function () {
        //$http.get($scope.baseUrl).then(function (response) {
        //    $scope.products = response.data;
        //});
        dataService.processGet('products').then(function (response) {
            $scope.products = response.data;
        });
        if ($routeParams.id != null && $routeParams.id != undefined) {
            $http.get($scope.baseUrl + "/" + $routeParams.id).then(function (response) {
                $scope.selectedProduct = response.data;
                $scope.newProductModel = response.data;
            });
        }
    }

    init();

    $scope.saveProduct = function () {
        if ($scope.newProductModel.Id != null && $scope.newProductModel.Id != undefined && $scope.newProductModel.Id > 0) {
            $http.put($scope.baseUrl + "/" + $scope.newProductModel.Id, JSON.stringify($scope.newProductModel)).then(function (response) {
                $route.reload();
            });
        } else {
            $http.post($scope.baseUrl, JSON.stringify($scope.newProductModel)).then(function (response) {
                $route.reload();
                //init();
            });
        }
       
        $location.path('/myProducts');
    }

    $scope.deleteProduct = function () {
        $http.delete($scope.baseUrl + "/" + $scope.selectedProduct.Id).then(function (response) {
            //alert(JSON.stringify(response));
            $route.reload();
        }, function (response) {
            alert(JSON.stringify(response.data.Message));
        });
        //$route.reload();
        $location.path('/myProducts');
    }
});