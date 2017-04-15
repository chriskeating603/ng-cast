angular.module('video-player')
// .controller('DataCtrl', function($scope) {
//   $scope.videos = window.exampleVideoData;

// })

.directive('app', function() {
  return {
    scope: {

    },
    restrict: 'E',  
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.selectVideo = () => {

      },
      this.searchResults = () => {

      },
      this.videos = window.exampleVideoData,
      this.currentVideo = this.videos[0],
      this.onClick = (index) => {
        // return this.videos[index].snippet.title
        this.currentVideo = window.exampleVideoData[index];
      };
    },
    templateUrl: 'src/templates/app.html'
  };
});
