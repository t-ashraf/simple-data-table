'use strict';

angular.module('datTable').
  component('datTable', {
    templateUrl: 'dat-table/dat-table.template.html',
    controller: ['$scope', function DatTableController($scope) {
        $scope.myData = [
            {
                "firstName": "Cox",
                "lastName": "Carney",
                "company": "Enormo",
                "employed": true
            },
            {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            },
            {
                "firstName": "Nancy",
                "lastName": "Waters",
                "company": "Fuelton",
                "employed": false
            }
        ];
      }
    ]
  });


console.log('dat-table component loaded');