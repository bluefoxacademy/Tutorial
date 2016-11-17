var app = angular.module('app', ['ngRoute']);
app.run(function ($rootScope) {
    $rootScope.todayDate = (new Date()).getFullYear();
});

app.config(function ($routeProvider) {
    $routeProvider
   .when('/',
   {
       controller: 'homeController',
       templateUrl: 'App/Partials/default.html'
   })

        .when('/about',
   {
       controller: 'homeController',
       templateUrl: 'App/Partials/about.html'
   })
        .when('/contact',
   {
       controller: 'homeController',
       templateUrl: 'App/Partials/contact.html'
   }).when('/products', {
       controller: 'productsController',
       templateUrl:'App/Partials/productlist-template.html'
   }).when('/products/:id', {
       controller: 'productsController',
       templateUrl:'App/Partials/productDetails-template.html'
   }).when('/addNewProduct', {
       controller: 'productsController',
       templateUrl:'App/Partials/addNewProduct-template.html'
   }).when('/posts', {
       controller: 'postsController',
       templateUrl:'App/Partials/posts-template.html'
   }).when('/posts/:id', {
       controller: 'postsController',
       templateUrl:'App/Partials/postDetail-template.html'
   }).when('/myProducts', {
       controller: 'myProductsController',
       templateUrl:'App/Partials/myProductList-template.html'
   }).when('/myProducts/:id', {
       controller: 'myProductsController',
       templateUrl:'App/Partials/myProductDetail-template.html'
   }).when('/addMyProduct', {
       controller: 'myProductsController',
       templateUrl:'App/Partials/myNewProduct-template.html'
   }).when('/deleteProduct/:id', {
       controller: 'myProductsController',
       templateUrl: 'App/Partials/deleteProduct-template.html'
   })
        .when('/editProduct/:id', {
            controller: 'myProductsController',
            templateUrl: 'App/Partials/myNewProduct-template.html'
        })
        .otherwise({ redirectTo: '/' });
});