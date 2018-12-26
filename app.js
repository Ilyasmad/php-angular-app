var myApp = angular.module('crud', ["ngRoute"]);
myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/posts.html',
    controller: 'postsCtrl'
  })
  .when('/createPost', {
    templateUrl: 'templates/create.html',
    controller: 'createCtrl'
  })
  .when('/post/:id', {
    templateUrl: 'templates/view.html',
    controller: 'viewCtrl'
  })
  .when('/delete/:id', {
    templateUrl: 'templates/delete.html',
    controller: 'deleteCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });

});

// three ways of sending a request to an api endpoint: angular's shortcut $http, long-way $http, and ajax

myApp.controller('postsCtrl', function($scope, $http) {
  $http.get('http://localhost/spa-app/webservices/allPosts.php')
    .then(function(response) {
      $scope.posts = response.data.info;
    })
});

myApp.controller('createCtrl', function($scope, $http) {
  $("#submit").click(function () {
    var title = $('#title').val();
    var description = $('#description').val();
    var dataString = $("#myform").serialize();
    if (title == "" || description == "") {
      $("#msg").html("Please fill out details");
    } else {
      $.ajax({
        type: 'POST',
        url: 'http://localhost/spa-app/webservices/addPost.php',
        data: dataString,
        cache: false,
        success: function (result) {
          $("#msg").html(result);
          var title = $('#title').val("");
          var description = $('#description').val("");
        }
      });
    }
    return false;
  });
});

myApp.controller('viewCtrl', function($scope, $http, $routeParams) {
  $http({
    url: 'http://localhost/spa-app/webservices/getPost.php',
    params: {id: $routeParams.id},
    method: 'get'
  })
  .then(function (response) {
    $scope.posts = response.data;
  })
});

myApp.controller('deleteCtrl', function($scope, $http, $routeParams) {
  $http({
    url: 'http://localhost/spa-app/webservices/delete.php',
    params: {id: $routeParams.id},
    method: 'get'
  })
  .then(function (response) {
    $scope.posts = response.data;
    // $().html();
  })
});
