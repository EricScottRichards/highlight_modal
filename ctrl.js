app.controller('mainCtrl', function($scope, $modal){
	$scope.test = "hey fella";
	$scope.highlighted = "";

	$scope.howdy = function(){
		alert('howdy')
	}

	$scope.lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


	$scope.openModal = function(){
		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'modalTmpl.html',
			controller: 'modalCtrl',
			resolve: {
				words: function(){
					return $scope.highlighted;
				}
			}
		});

		modalInstance.result.then(function(result){
			console.log(result)
			alert('yaaaaaay', result);
		});
	}



})