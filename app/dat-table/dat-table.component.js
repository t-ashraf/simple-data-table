'use strict';

angular.module('datTable').
  component('datTable', {
    templateUrl: 'dat-table/dat-table.template.html',
    controller: ['$scope', 'DataService', function DatTableController($scope, DataService) {
        $scope.myData = DataService.customers;
        console.log(DataService.customers);
      }
    ]
  });


console.log('dat-table component loaded');