angular.module('Tasks').config(function($routeProvider) {

});

angular.module('Tasks')
	// Add default templates via $templateCache
	.run(['$templateCache','$interpolate',function($templateCache,$interpolate){
    
    	// get interpolation symbol (possible that someone may have changed it in their application instead of using '{{}}')
    	var startSym = $interpolate.startSymbol();
    	var endSym = $interpolate.endSymbol();
    
    	$templateCache.put(
    		'/dialogs/tasks/create.html',
    		'<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title"><span class="glyphicon glyphicon-star"></span> Custom Dialog 2</h4></div><div class="modal-body"><label class="control-label" for="customValue">Custom Value:</label><input type="text" class="form-control" id="customValue" ng-model="data.val" ng-keyup="hitEnter($event)"><span class="help-block">Using "dialogsProvider.useCopy(false)" in your applications config function will allow data passed to a custom dialog to retain its two-way binding with the scope of the calling controller.</span></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="done()"">Done</button></div></div></div>');
	}]); // end run / dialogs
