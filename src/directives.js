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
.directive('auiInlineDialog', ['$compile', function($compile) {
    var dialogContent;
    function link(scope, element, attrs) {
        var dialog = AJS.InlineDialog(AJS.$(element), 1,
          function(content, trigger, showPopup) {
            content.html(dialogContent);
            showPopup();
            return false;
        }, scope.$eval(attrs.options));
        scope.$hide = dialog.hide.bind(dialog);
        scope.$refresh = dialog.refresh.bind(dialog);
        scope.$show = dialog.show.bind(dialog);
    }
    function controller($scope) {
        this.drawContent = function(html) {
            dialogContent = $compile(html)($scope);
        };
    }
    return {
        controller: controller,
        link: link
    };
}])
.directive('auiInlineDialogContent', ['$timeout', function($timeout) {
    function link(scope, element, attrs, inlineDialogCtrl) {
        inlineDialogCtrl.drawContent(element[0].innerHTML);
        element.css('display', 'none');
    }
    return {
        require: '^auiInlineDialog',
        link: link
    };
}])
.directive('auiSelect2', [function() {
    function link($scope, element, attrs) {
        AJS.$(element).auiSelect2();
    }
    return {
        link: link
    };
}]);