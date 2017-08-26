/* DOCUMENTATION */

angular.module('starter.controllers')
.controller('LeBonTriCtrl',
	function ($scope, $stateParams) {
	
	$scope.result = 0;
    $scope.listItems = [{
      name: "some name",
      title: "title1",
	  id:"id1"
    }, {
      name: "some name2",
      title: "title2"
    }, {
      name: "some name3",
      title: "title3"
    }, ];
  $scope.listItems2 = [{
      name: "some name4",
      title: "title4"
    }, {
      name: "some name5",
      title: "title5"
    }, {
      name: "some name6",
      title: "title6"
    }, ];
    $scope.droppedObjects = [];
	
    $scope.onDragComplete = function(data, evt) {
	  console.log("drag success, data:", data);
	  var index = $scope.droppedObjects.indexOf(data);
      if (index > -1) {
        $scope.droppedObjects.splice(index, 1);
      }
    }
    
    $scope.onDropComplete = function(data, evt) {
	  console.log("drop success, data:", data);
	  if (data.id=="id1") {
		  $scope.result = 2;
	  } else {
		  $scope.result = -1;
	  }
      var index = $scope.droppedObjects.indexOf(data);
      if (index == -1)
        $scope.droppedObjects.push(data);
    }
    
   /* $scope.onDropCompleteInput = function(data, evt) {
      console.log("drop on input success, data:", data);
      $scope.input = data;
    }*/
    
    /*$scope.onDropCompleteRemove = function(data, evt, idList) {
	  var droppedObjects = $scope.selectList(idList);
      console.log("drop success - remove, data:", data);
      var index = droppedObjects.indexOf(data);
      if (index != -1)
        droppedObjects.splice(index);
    */

    var onDraggableEvent = function(evt, data) {
      console.log("128", "onDraggableEvent", evt, data);
    }
    $scope.$on('draggable:start', onDraggableEvent);
    //$scope.$on('draggable:move', onDraggableEvent);
    $scope.$on('draggable:end', onDraggableEvent);
	
});
