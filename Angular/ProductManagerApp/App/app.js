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
   }).otherwise({ redirectTo: '/' });
});