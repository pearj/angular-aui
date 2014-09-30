angular.module('angular-aui-examples', ['angular-aui'])
.controller('DatePickerCtrl', function() {})
.controller('InlineDialogCtrl', function($scope) {
    $scope.name = 'John Dou';
})
.controller('Select2Ctrl', function($scope) {
  $scope.cities = ['Ukraine', 'USA', 'Austria', 'Thailand'];
  $scope.selectedCity = $scope.cities[0];
});