/* DOCUMENTATION */

angular.module('starter.controllers')
.controller('JeuxCtrl',
	function ($scope, $stateParams, $timeout, $rootScope, $ionicPopup, $filter) {

	$scope.num_questions = 10;
	$scope.max_stars = 4;
	// $scope.types_questions = [{code:"tri_normal",descr:"tri normal"},{code:"tri_extension",descr:"niveau enfant"}];
	
	
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
				for (var l=0; l<active_filters.length; l++) {
					if (active_filters[l].value==questionFilter) {
						questionIsOk = false;
					}
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
		var selectedCode = $scope.formParam.type.value;
		var selectedType = $scope.formParam.code; // "tri" ou "niveau"
		if (typeof selectedCode !== 'undefined')  {
			// on modifie $scope.types_questions
			for (var i=0; i<$scope.types_options.length; i++) {
				if (selectedType=="tri") { $scope.active_filters[0]=$scope.formParam.type; }
				else if (selectedType=="niveau") { $scope.active_filters[1]=$scope.formParam.type; }
			}
			$scope.startANewAGame();
		}
	};
	
	// Choix du type
	$scope.changeType = function (type) {
		var i = type;
		$scope.formParam.code=type.code;
		if (type.code=='niveau') {
			$scope.temp = [{value:"niveau_enfant",descr:"enfant",code:"niveau"},{value:"niveau_normal",descr:"normal",code:"niveau"},{value:"niveau_expert",descr:"expert",code:"niveau"}];
			$scope.descr = $scope.types_options[1].descr;
		} else if (type.code=='tri') {
			$scope.temp = [{value:"tri_normal",descr:"tri normal",code:"tri"},{value:"tri extension",descr:"tri extension",code:"tri"}];
			$scope.descr = $scope.types_options[0].descr;
		}
		$ionicPopup.show({
			template: '<div ng-show="descr">{{descr}}</div><div ng-repeat="obj in temp"> <ion-radio ng-model="formParam.type" ng-value="obj">{{obj.descr}}</ion-radio></div>',
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
		$scope.types_options = _theGoodSortingData.types_options,
		$scope.questions = $scope.suffle(_theGoodSortingData.questions, $scope.active_filters, $scope.num_questions);
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
	$scope.types_options = _theGoodSortingData.types_options;
	// TODO Prendre _theGoodSortingData.types_options et filtrer selon default
	$scope.active_filters = [{code:"tri",value:"tri_normal",descr:"tri normal"},{code:"niveau",value:"niveau_enfant",descr:"enfant"}];
	
	//FORM MODEL : DEFAULTS
	$scope.formParam = {
		type: $scope.types_options[0],
		code:'ff',
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
			// Le  temps d'affichage de la réponse dépend du nombre de mots
			var nbSpace = data.advice.split(' ').length - 1;
			if (nbSpace<=10) {  timeNexQuestion = 4000;  }
			else if (nbSpace<=20) {  timeNexQuestion = 6000;  }
			else if (nbSpace<=30) {  timeNexQuestion = 8000;  }
			else { timeNexQuestion = 10000;  }
		}
		$scope.result_end.push({answerClass:$scope.result, descr:data.descr, descr_en:data.descr_en, advice_en:data.advice_en, advice:data.advice, resume_en:data.resume_en, resume:data.resume, image:data.image});

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
		$scope.numstars = parseInt($scope.gameplay.goodAnswers * $scope.max_stars / $scope.questions.length, 10);
		//Affichage STARS SCORE
		/*var ratio = $scope.gameplay.goodAnswers / $scope.questions.length;
		var numstars = 0;
		$scope.num_questions
		if (ratio >= 0.3 && ratio < 0.5) {
			numstars = 1;
		} else if (ratio >= 0.5 && ratio < 0.7) {
			numstars = 2;
		} else if (ratio >= 0.7 && ratio < 0.8) {
			numstars = 3;
		} else if (ratio >= 0.8) {
			numstars = 4;
		}
		$scope.numstars = numstars; */
		
	}

	var resetReponsesState = function () {
		$scope.result = "";
		$scope.advice = "";
		$scope.reponses.forEach(function (item) {
			item.answerClass = '';
		});
	}

	// Choix du type
	$scope.showAnswer = function (item) {
		// On affiche le libelle, son complément, et l'explication.
		if (typeof item.resume !== 'undefined') { var mytitle = item.descr+' '+item.resume+''; }
		else { var mytitle = item.descr; }
		var text = '<center><img ng-src="resources/images/thegoodsorting/'+item.image+'" height="100px"/></center><div>'+item.advice+'</div>';
		// var text = '<div>'+item.advice+'</div>';
		$ionicPopup.show({
			template: text,
			cssClass: 'popup-fiches',
			title: mytitle,
			scope: $scope,
			buttons: [{
					text: 'OK',
					type: 'button-positive',
					onTap: function (e) {
						return true;
					}
				}
			]
		});

	};
});