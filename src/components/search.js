angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      result: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function () {
      
    },
    templateUrl: 'src/templates/search.html'
  };
});
