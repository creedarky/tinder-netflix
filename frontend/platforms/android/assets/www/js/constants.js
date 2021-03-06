(function() {
  var AppConstants = function(FluxUtil) {
    return FluxUtil.defineConstants([
      'SET_CURRENT_USER',
      'FETCH_SHOWS', 'FETCH_LIKED_SHOWS',
      'LIKE_SHOW', 'DISLIKE_SHOW',
    ]);
  };

  var ApiConstants = function(FluxUtil) {
    return FluxUtil.defineConstants([
      'PENDING', 'ERROR'
    ]);
  };

  angular.module('app')
    .factory('AppConstants', AppConstants)
    .factory('ApiConstants', ApiConstants)
})();
