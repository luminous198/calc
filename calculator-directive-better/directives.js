/*Create a custom directive */
myApp.directive('calculatorDirective', function() {
    return {
    // var dir = {};
        restrict   : 'E', /* restrict this directive to elements */
        controller : 'CalcuController', /* controller this directive function belongs */
       templateUrl : 'calculator.html' //
   };
    // return dir;
});
