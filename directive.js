app.directive('highlightGrabber', function(){
	return {
		link: function(scope, elem, attrs){
			elem.on('mouseup', function(){
				var start = elem[0].selectionStart;
				var end = elem[0].selectionEnd;
				console.log('start: ', start);
				console.log('end: ', end);
				scope.highlighted = elem[0].value.substring(start, end);
				scope.openModal();
				scope.$apply();
			})
		}
	}
});

// app.directive('watchSelection', function() {
//         return function(scope, elem) {
//             console.log(elem);
//             elem.on('mouseup', function() {
//                 var start = elem.selectionStart;
//                 var end = elem[0].selectionEnd;
//                 scope.selected = elem[0].value.substring(start, end);
//                 scope.$apply();
//             });
//         }; 
//     });


