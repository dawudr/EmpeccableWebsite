'use strict';

var app = angular.module('app', []);
app.controller('MainController', MainController);

function MainController($location) {
    var vm = this;
    vm.domain = $location.host().split('.').reverse()[0];
    vm.sitename = "dawud.xyz";
}