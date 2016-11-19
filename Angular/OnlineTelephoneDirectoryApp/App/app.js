var app = angular.module('myApp', ['ngRoute']);
app.run(function ($rootScope) {
    $rootScope.IsAlreadyLogin = false;
});
app.config(function ($routeProvider) {
    $routeProvider
    .when('/',
    {
        controller: 'IndexController',
        templateUrl:'App/Partials/Home.html'
    })

         .when('/about',
    {
        controller: 'IndexController',
        templateUrl: 'App/Partials/About.html'
    })
         .when('/contact',
    {
        controller: 'IndexController',
        templateUrl: 'App/Partials/Contact.html'
    })
              .when('/login',
    {
        controller: 'UserController',
        templateUrl: 'App/Partials/login.html'
    })
              .when('/register',
    {
        controller: 'UserController',
        templateUrl: 'App/Partials/register.html'
    })
          .when('/welcome',
    {
        controller: 'UserController',
        templateUrl: 'App/Partials/welcome.html'
    })
          .when('/logout',
    {
        controller: 'UserController',
        templateUrl: 'App/Partials/logout.html'
    })
           .when('/viewContacts',
    {
        controller: 'contactsController',
        templateUrl: 'App/Partials/viewUserContacts.html'
    })
           .when('/addNewContact',
    {
        controller: 'contactsController',
        templateUrl: 'App/Partials/addNewContact.html'
    })
           .when('/editInfo',
    {
        controller: 'UserController',
        templateUrl: 'App/Partials/editInfo.html'
    }).when('/viewInfo',
    {
        controller: 'UserController',
        templateUrl: 'App/Partials/viewInfo.html'
    })
        .when('/resetPassword',
    {
        controller: 'UserController',
        templateUrl: 'App/Partials/resetPassword.html'
    })
    .otherwise({redirectTo:'/'});
});