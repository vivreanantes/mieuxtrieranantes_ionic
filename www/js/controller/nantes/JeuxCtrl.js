/* DOCUMENTATION */

angular.module('starter.controllers')
.controller('JeuxCtrl',
	function ($scope, $stateParams, $timeout, $rootScope) {


	$scope.suffle = function (array, returnSize) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		var result = [];
		for (var i = 0; i < array.length && i < returnSize; ++i) {
			result[i] = array[i];
		}
		return result;
	}

	$scope.changeType = function (type) {
		var i = type;
	}
	
	$scope.startANewAGame = function () {
		$scope.result = "";
		$scope.advice = "";
		$scope.result_end = [];
		// = true après réponse à toutes les questions
		$scope.gameplay.gameEnd = "false";
		$scope.questions = $scope.suffle(_theGoodSortingData.questions, 30);
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
			nextQuestionDelay: 800
		}
	});
	$scope.questions = _theGoodSortingData.questions;
	$scope.reponses = _theGoodSortingData.reponses;
	$scope.types_questions = _theGoodSortingData.types_questions;

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
			timeNexQuestion = 3000;
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