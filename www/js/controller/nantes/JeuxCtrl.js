/* DOCUMENTATION */

angular.module('starter.controllers')
.controller('JeuxCtrl',
	function ($scope, $stateParams, $timeout, $rootScope, $ionicPopup, $filter) {

	$scope.types_questions = ["tri normal","niveau enfant"];
	
	$scope.suffle = function (array, active_filters, returnSize) {
		
		var array_temp = [];
		// Pour toutes les questions
		for (var j=0; j<array.length; j++) {
			var question = array[j];
			var questionFilters = question.exclude_filters;
			// On ne doit pas prendre la question si active_filters correspond à un des éléments du filtre de la question
			var questionIsOk = true;
			for (var k=0; k<questionFilters.length; k++) {
				var questionFilter = questionFilters[k];
				indexEl = active_filters.indexOf(questionFilter);		
				if (indexEl>-1) {
					questionIsOk = false;
				}
			}
			if (questionIsOk) {
				array_temp.push(question);
			}
		}
		
		for (var i = array_temp.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array_temp[i];
			array_temp[i] = array_temp[j];
			array_temp[j] = temp;
		}
		var result = [];
		for (var i = 0; i < array_temp.length && i < returnSize; ++i) {
			result[i] = array_temp[i];
		}
		return result;
	}
	
	$scope.onSearchSubmit = function () {
		var selectedCode = $scope.formParam.type.code;
		// on modifie $scope.active_filters
		for (var i=0; i<$scope.active_filters.length; i++) {
			if (selectedCode=="niveau enfant" && ($scope.active_filters[i]=="niveau normal" || $scope.active_filters[i]=="niveau expert") ) { $scope.active_filters[i]="niveau enfant"; }
			else if (selectedCode=="niveau normal" && ($scope.active_filters[i]=="niveau enfant" || $scope.active_filters[i]=="niveau expert") ) { $scope.active_filters[i]="niveau normal"; }
			else if (selectedCode=="niveau expert" && ($scope.active_filters[i]=="niveau enfant" || $scope.active_filters[i]=="niveau normal") ) { $scope.active_filters[i]="niveau expert"; }
			else if (selectedCode=="tri normal" && $scope.active_filters[i]=="tri extension") { $scope.active_filters[i]="tri normal"; }
			else if (selectedCode=="tri extension" && $scope.active_filters[i]=="tri normal") { $scope.active_filters[i]="tri extension"; }
		}
		$scope.startANewAGame();
	};
	
	// Choix du type
	$scope.changeType = function (type) {
		var i = type;
		if (type=='niveau enfant') {
			$scope.temp = [{code:"niveau enfant",nom:"Enfant"},{code:"niveau normal",nom:"Normal"},{code:"niveau expert",nom:"Expert"}];
			$scope.descr = $scope.types_questions[1].descr;
		} else if (type=='tri normal') {
			$scope.temp = [{code:"tri normal",nom:"Tri normal"},{code:"tri extension",nom:"Tri extension (bac jaune, Nantes)"}];
			$scope.descr = $scope.types_questions[0].descr;
		}
		
		$ionicPopup.show({
			template: '<div ng-show="descr">{{descr}}</div><div ng-repeat="obj in temp"> <ion-radio ng-model="formParam.type" ng-value="obj">{{obj.nom}}</ion-radio> </div>',
			cssClass: 'popup-fiches',
			title: 'Option du quiz',
			scope: $scope,
			buttons: [{
					text: 'OK',
					type: 'button-positive',
					onTap: function (e) {
						$scope.onSearchSubmit();
					}
				}
			]
		});

	};
	
	$scope.startANewAGame = function () {
		$scope.result = "";
		$scope.advice = "";
		$scope.result_end = [];
		// = true après réponse à toutes les questions
		$scope.gameplay.gameEnd = "false";
		$scope.questions = $scope.suffle(_theGoodSortingData.questions, $scope.active_filters, 5);
		$scope.gameplay.goodAnswers = 0;
		$scope.gameplay.currentQuestionIndex = 0;
		//Question courante
		$scope.gameplay.currentQuestion = $scope.questions[0];
		// = false après la réponse à la première question
		$scope.gameplay.firstInit = true;
		$scope.temporaryHide = false; ;
	}

	/* DATA MODEL */
	angular.extend($scope, {
		gameplay: {
			//Délai avant affichage de la prochaine question suite à une réponse
			nextQuestionDelay: 1000
		}
	});
	$scope.questions = _theGoodSortingData.questions;
	$scope.reponses = _theGoodSortingData.reponses;
	$scope.types_questions = _theGoodSortingData.types_questions;
	$scope.active_filters = ["niveau enfant","tri normal"];
	
	//FORM MODEL : DEFAULTS
	$scope.formParam = {
		type: $scope.types_questions[0],
		searchkey: ''
	};

	$scope.startANewAGame();

	$scope.onDropComplete = function (data, evt, reponse_id) {

		console.log("drop success, data:", data);

		var index = data.reponses.indexOf(reponse_id);
		var reponseObject = findReponseById($scope.reponses, reponse_id);
		var timeNexQuestion = 1000;
		if (index > -1) {
			reponseObject.answerClass = 'good';
			$scope.result = 'good';
			$scope.gameplay.goodAnswers = $scope.gameplay.goodAnswers + 1;
		} else {
			reponseObject.answerClass = 'bad';
			$scope.result = 'bad';
			$scope.advice = data.advice;
			$scope.result_end.push(data.descr + " : " + data.advice);
			timeNexQuestion = 4000;
		}

		$scope.gameplay.firstInit = false;
		// TEMPORARY HIDE Drag object avant prochaine question
		$scope.temporaryHide = true;
		$timeout(nextQuestion, timeNexQuestion);

	}

	var findReponseById = function (reponses, id) {
		return reponses.find(function (item) {
			if (item.id == id)
				return true;
		});
	};

	$scope.startANewAGame();

	/* QUESTION SUIVANTE */
	var nextQuestion = function () {
		resetReponsesState();
		if ($scope.gameplay.currentQuestionIndex < $scope.questions.length - 1) {
			$scope.gameplay.currentQuestionIndex = $scope.gameplay.currentQuestionIndex + 1;
			$scope.gameplay.currentQuestion = $scope.questions[$scope.gameplay.currentQuestionIndex];
			//On fait apparaitre de nouveau le Drag object
			$scope.temporaryHide = false;
		}
		//FIN DU JEU
		else {
			endGame();
		}
	}

	var endGame = function () {
		$scope.gameplay.gameEnd = "true";
		//Affichage STARS SCORE
		var ratio = $scope.gameplay.goodAnswers / $scope.questions.length;
		var numstars = 0;
		if (ratio >= 0.3 && ratio < 0.5) {
			numstars = 1;
		} else if (ratio >= 0.5 && ratio < 0.7) {
			numstars = 2;
		} else if (ratio >= 0.7 && ratio < 0.8) {
			numstars = 3;
		} else if (ratio >= 0.8) {
			numstars = 4;
		}
		$scope.numstars = numstars;
	}

	var resetReponsesState = function () {
		$scope.result = "";
		$scope.advice = "";
		$scope.reponses.forEach(function (item) {
			item.answerClass = '';
		});
	}

});