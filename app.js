var App = angular.module('App', []);
var config = {headers: {
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, OPTIONS, HEAD"
  }
};
App.controller('choristes_ctrl', function ($scope, $http) {
  //$http.get('todos.json', config)
  $http.get('http://127.0.0.1:8080/camt/w/choristes', {
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  })
    .then(function (res) {
      $scope.choristes = res.data;
    });
});
