'use strict';

app.directive('navbar', function ($state, $location, Auth) {
	return {
		restrict: 'E',
		templateUrl: '/browser/components/navbar/navbar.html',
		link: function (scope) {
			scope.pathStartsWithStatePath = function (state) {
				var partial = $state.href(state);
				var path = $location.path();
				return path.startsWith(partial);
			};

			// Auth.logout();
			scope.logout = function() { 
				Auth.logout()
					.then( function() {
						$state.go('home');
					}).then( null, console.error );
			};
		}
	}
});