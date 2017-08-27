/* DOCUMENTATION */

angular.module('starter.controllers')
.controller('TheGoodSortingCtrl',
	function ($scope, $stateParams/*, $ionicSideMenuDelegate*/) {

	//$ionicSideMenuDelegate.canDragContent(false);
	$scope.resultat_text="";
	$scope.result = 0;
    $scope.droppedObjects = [];
	$scope.questions = [
		{name:'nounours',descr:"nounours",image:"nounours.jpg",reponses:["poubelle"]},
		{name:'arrosoir',descr:"arrosoir",image:"arrosoir.png",reponses:["poubelle","decheterie"]},
		{name:'peau_banane',descr:"peau de banane",image:"peau_banane.jpg",reponses:["composteur"]}];
	$scope.reponses = [
		{id:"decheterie",descr:'Déchèterie',image:"decheterie.jpg"},
		{id:"composteur",descr:'Composteur',image:"composteur.jpg"},
		{id:"poubelle",descr:'Poubelle',image:"bac_sac_bleu.jpg"}];
	
    $scope.onDragComplete = function(data, evt) {
	  console.log("drag success, data:", data);
    }
    
    $scope.onDropComplete = function(data, evt, reponse_id) {
	  console.log("drop success, data:", data);
	  var index = data.reponses.indexOf(reponse_id);
      if (index > -1) {
		$scope.resultat_text="bravo";
      } else {
		$scope.resultat_text="dommage";
      }
    }

    var onDraggableEvent = function(evt, data) {
      console.log("128", "onDraggableEvent", evt, data);
    }
    $scope.$on('draggable:start', onDraggableEvent);
    //$scope.$on('draggable:move', onDraggableEvent);
    $scope.$on('draggable:end', onDraggableEvent);

});
