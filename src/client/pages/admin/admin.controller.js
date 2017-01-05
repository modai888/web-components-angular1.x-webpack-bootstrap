'use strict';

module.exports = function AdminController() {
    'ngInject';

    var vm = this;
    vm.title = '管理后台';


    //
    vm.settings = {
        headerColor: ''
    };

    vm.toggleHeading = function () {
        vm.asideFolded = !vm.asideFolded;
    }

};