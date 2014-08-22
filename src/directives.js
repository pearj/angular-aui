angular.module('angular-aui-directives', [])
.directive('auiDatePicker', [function() {
    function link(scope, element, attrs, ngModelCtrl) {
        AJS.$(element).datePicker({
          overrideBrowserDefault: true,
          onSelect: function(newValue) {
            scope.$apply(function() {
            // model doesn't get updates  when `overrideBrowserDefault` = true
                ngModelCtrl.$setViewValue(newValue);
            });
          }
        });
    }
    return {
        require: 'ngModel',
        link: link
    };
}])
.directive('auiInlineDialog', [function() {
    function link(scope, element, attrs) {
        AJS.InlineDialog(AJS.$(element), 1,
          function(content, trigger, showPopup) {
              content.css({"padding":"20px"}).html('<h2>Inline dialog</h2><p>The inline dialog is a wrapper for secondary content/controls to be displayed on user request. Consider this component as displayed in context to the triggering control with the dialog overlaying the page content.</p><button class="aui-button">Done</button></form>');
              showPopup();
              return false;
          }
      );
    }
    return {
        link: link
    };
}]);