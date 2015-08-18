app.controller('modalCtrl', function($scope, $modalInstance, words){
	$scope.words = words;

	$scope.close = function(){
		$modalInstance.close("I closed it!");
	}

	$scope.cancel = function(){
		$modalInstance.dismiss('cancel');
	}
})