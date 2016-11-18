app.controller('productsController', function ($scope, $routeParams, $location, productFactory, logService,$http) {
    $scope.products = [];
    $scope.selectedProduct = null;
    $scope.newProductModel = {};
    $scope.submitted = false;
    var init = function () {
        //productFactory.testMethod();
      
        $scope.products = productFactory.getProducts();

        if ($routeParams.id != null && $routeParams.id != undefined) {
            $scope.selectedProduct = productFactory.getProductById($routeParams.id);
        }
    }
    init();

    $scope.saveProduct = function () {

        if ($scope.prodForm.$valid) {
            $scope.submitted = false;
            productFactory.addProduct($scope.newProductModel);
            logService.logMe('Product is Saved...');
            $location.path('/products');
        } else {
            $scope.submitted = true;
        }
      
    }
});