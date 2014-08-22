angular.module('angular-aui-directives', [])
.directive('auiDatePicker', [function() {
    function link($scope, element, attrs, ngModelCtrl) {
        AJS.$(element).datePicker({
          overrideBrowserDefault: true,
          onSelect: function(newValue) {
            $scope.$apply(function() {
            // model doesn't get updates  when `overrideBrowserDefault` = true
                ngModelCtrl.$setViewValue(newValue);
            });
          }
        });
        return function() {};
    }
    return {
        require: 'ngModel',
        link: link
    };
}]);