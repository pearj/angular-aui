angular.module('angular-aui-examples', ['angular-aui'])
.controller('DatePickerCtrl', function() {})
.controller('InlineDialogCtrl', function($scope) {
    $scope.name = 'John Dou';
})
.controller('Select2Ctrl', function($scope) {
  $scope.countries = [{id: 'USA', text:'USA'}, {id: 'Ukraine', text:'Ukraine'}, {id: 'Austria', text:'Austria'}, {id: 'Thailand', text:'Thailand'}];
  $scope.selectedCountry = $scope.countries[0];
});