/**
 * Created by arpate on 11/2/16.
 */
// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope','$http', function ($scope,$http) {
    $scope.hidethis= true;
    // $scope.name='Alpesh';
    // $scope.occupation='sw';
    // console.log($scope);

    $scope.citylist= ["Apache" ,"Cochise" ,"Coconino" ,"Gila" ,"Graham" ,"Greenlee" ,"La Paz" ,"Maricopa"
        ,"Mohave" ,"Navajo" ,"Pima" ,"Pinal" ,"Santa Cruz" ,"Yavapai" ,"Yuma"];

    $scope.city="";



    $scope.complete=function(string) {
        $scope.hidethis = false;
        var output=[];
        angular.forEach($scope.citylist, function(city){
            if(city.toLowerCase().indexOf(string.toLowerCase())>= 0){
                output.push(city);
            }
        });
        $scope.filterCity = output;
    }

    $scope.fillTextBox = function(string)
    {
        $scope.city = string;
        $scope.hidethis= true;



        $http({method: 'GET', url: 'http://localhost:8081/wis-api/school/list',
            headers:{
                'Content-Type':'application/json'
            }})
            .success(function(data){ console.log(data)})
            .error(function(err){ console.log(err) });

    }




}]);



