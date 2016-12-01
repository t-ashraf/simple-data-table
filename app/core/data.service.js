'use strict';

angular.
  module('core.data').
  service('DataService', [
    function() {
        this.customers = 
            [
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
  ]);

console.log('data.service loaded');