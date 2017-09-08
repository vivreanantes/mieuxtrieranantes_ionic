/* DOCUMENTATION */

angular.module('starter.controllers')
.controller('TheGoodSortingCtrl',
	function ($scope, $stateParams,  $timeout /*, $ionicSideMenuDelegate*/) {

	//$ionicSideMenuDelegate.canDragContent(false);

	/* DATA MODEL */
	angular.extend($scope, {
		gameplay : {
			currentQuestionIndex : 0,
			currentQuestion : null,
			goodAnswers : 0,
			// = false après la réponse à la première question
			firstInit : true,
			// = true après réponse à toutes les questions
			gameEnd : false,
			//Délai avant affichage de la prochaine question suite à une réponse
			nextQuestionDelay : 800,
		},		
		questions : [
			{name:'nounours',descr:"nounours",image:"nounours.png",reponses:["poubelle"]},
			{name:'arrosoir',descr:"arrosoir",image:"arrosoir.png",reponses:["poubelle","decheterie"]},
			{name:'pneu',descr:"pneu",image:"pneu2.png",reponses:["decheterie"]},
			{name:'peau_banane',descr:"peau de banane",image:"banane.png",reponses:["composteur"]}
		],
		reponses : [
			{id:"decheterie",descr:'Déchèterie',image:"decheterie.jpg"},
			{id:"composteur",descr:'Composteur',image:"composteur.jpg"},
			{id:"jaune",descr:'Poubelle jaune / sac jaune, conteneur emaballage, métal, verre, papier-carton',image:"bac_sac_jaune.jpg"},
			{id:"retour",descr:'Retour au point de vente',image:"composteur.jpg"},
			{id:"réemploi",descr:'Réemploi, conteneur vêtement, collecteur bouchons',image:"reemploi.png"},
			{id:"poubelle",descr:'Poubelle',image:"bac_sac_bleu.jpg"}
		]
    });


    $scope.onDragComplete = function(data, evt) {
	  console.log("drag success, data:", data);
    }
    
    $scope.onDropComplete = function(data, evt, reponse_id) {

	  console.log("drop success, data:", data);

	  var index = data.reponses.indexOf(reponse_id);
	  var reponseObject = findReponseById($scope.reponses, reponse_id);

      if (index > -1) {
		reponseObject.answerClass = 'good';
		$scope.gameplay.goodAnswers = $scope.gameplay.goodAnswers + 1;
      } else {
		reponseObject.answerClass = 'bad';
      }

	  $scope.gameplay.firstInit = false;
	  //TEMPORARY HIDE Drag object avant prochaine question
	  $scope.temporaryHide = true;
	  $timeout(nextQuestion, 800);

    }

	var findReponseById = function (reponses, id) {

		return reponses.find(function (item) {

			if (item.id == id) return true;

		});

	};

	/* INIT JEU */
	var init = function() {
		//Question courante
		$scope.gameplay.currentQuestion = $scope.questions[0]; 
	};

	init();

	/* QUESTION SUIVANTE */ 
	var nextQuestion = function() {			

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

			$scope.gameplay.gameEnd = true;

			//Affichage STARS SCORE
			var ratio = $scope.gameplay.goodAnswers / $scope.questions.length;
			var numstars = 0;
			if (ratio >= 0.3 && ratio < 0.5) {
				numstars = 1;
			}
			else if (ratio >= 0.5 && ratio < 0.7) {
				numstars = 2;
			}
			else if (ratio >= 0.7 && ratio < 0.8) {
				numstars = 3;
			}
			else if (ratio >= 0.8) {
				numstars = 4;
			}

			$scope.numstars = numstars;

	}

	var resetReponsesState = function() {

		$scope.reponses.forEach(function(item) {
			
			item.answerClass = '';

		});

	}

});
