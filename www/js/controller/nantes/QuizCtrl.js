/* QUIZZ */

angular.module('starter.controllers')
.controller('QuizCtrl', function($scope, $stateParams, $filter) {

	//GLOBAL DATA SOURCE
	$scope.quizs = _quizsDatas;
	
	var item_code = 'quiz_janvier';
	//On récupère l'élément correspondant au code 
	items = $filter('filter')(_quizsDatas, {
		code : item_code
	});
	
	var quiz = items[0];

	//SCOPE
	$scope.quiz = quiz;
	
	$scope.descr_visible = "true";
	$scope.resultats_visible = "false";
	$scope.toggleObject = new Array(20); // 20 questions
    for (var i = 0; i < 20; i++) {
        $scope.toggleObject[i] = -1;
    }
	// On commence par la première question
	$scope.toggleObject[0] = 1;
	
	$scope.onSearchSubmit = function (index) {
		// index vaut 0,1,2,3,4
		var temp = index;
		$scope.toggleObject[index] = -1;
		if ($scope.quiz.questions[index+1] != undefined) {
		  // Il existe une question suivante
		  $scope.toggleObject[index+1] = 1;
		} else {
          $scope.resultats_visible = "true";
		}
	}
	/*var indexElement = 1;
	$scope.quiz = {}
	$scope.quiz.nom = getRecordValue(_quizsDatas[indexElement], "nom");
	$scope.quiz.descr = getRecordValue(_quizsDatas[indexElement], "descr");
	$scope.quiz.ok = getRecordValue(_quizsDatas[indexElement], "ok");
	$scope.quiz.q1 = getRecordValue(_quizsDatas[indexElement], "q1");
	$scope.quiz.q1i1 = getRecordValue(_quizsDatas[indexElement], "q1i1");
	$scope.quiz.q1r1 = getRecordValue(_quizsDatas[indexElement], "q1r1");
	$scope.quiz.q1r2 = getRecordValue(_quizsDatas[indexElement], "q1r2");
	$scope.quiz.q1r3 = getRecordValue(_quizsDatas[indexElement], "q1r3");
	$scope.quiz.q1e1 = getRecordValue(_quizsDatas[indexElement], "q1e1");
	$scope.quiz.q2 = getRecordValue(_quizsDatas[indexElement], "q2");
	$scope.quiz.q2i1 = getRecordValue(_quizsDatas[indexElement], "q2i1");
	$scope.quiz.q2r1 = getRecordValue(_quizsDatas[indexElement], "q2r1");
	$scope.quiz.q2r2 = getRecordValue(_quizsDatas[indexElement], "q2r2");
	$scope.quiz.q2r3 = getRecordValue(_quizsDatas[indexElement], "q2r3");
	$scope.quiz.q2e1 = getRecordValue(_quizsDatas[indexElement], "q2e1");
	$scope.quiz.q3 = getRecordValue(_quizsDatas[indexElement], "q3");
	$scope.quiz.q3i1 = getRecordValue(_quizsDatas[indexElement], "q3i1");
	$scope.quiz.q3r1 = getRecordValue(_quizsDatas[indexElement], "q3r1");
	$scope.quiz.q3r2 = getRecordValue(_quizsDatas[indexElement], "q3r2");
	$scope.quiz.q3r3 = getRecordValue(_quizsDatas[indexElement], "q3r3");
	$scope.quiz.q3e1 = getRecordValue(_quizsDatas[indexElement], "q3e1");
	$scope.quiz.q4 = getRecordValue(_quizsDatas[indexElement], "q4");
	$scope.quiz.q4i1 = getRecordValue(_quizsDatas[indexElement], "q4i1");
	$scope.quiz.q4r1 = getRecordValue(_quizsDatas[indexElement], "q4r1");
	$scope.quiz.q4r2 = getRecordValue(_quizsDatas[indexElement], "q4r2");
	$scope.quiz.q4r3 = getRecordValue(_quizsDatas[indexElement], "q4r3");
	$scope.quiz.q4e1 = getRecordValue(_quizsDatas[indexElement], "q4e1");
	$scope.quiz.q5 = getRecordValue(_quizsDatas[indexElement], "q5");
	$scope.quiz.q5i1 = getRecordValue(_quizsDatas[indexElement], "q5i1");
	$scope.quiz.q5r1 = getRecordValue(_quizsDatas[indexElement], "q5r1");
	$scope.quiz.q5r2 = getRecordValue(_quizsDatas[indexElement], "q5r2");
	$scope.quiz.q5r3 = getRecordValue(_quizsDatas[indexElement], "q5r3");
	$scope.quiz.q5e1 = getRecordValue(_quizsDatas[indexElement], "q5e1");

	cacherMontrerReponses(true);
	*/
});

/*
function cacherMontrerReponses(montrer) {
	var display = 'block';
	if (montrer == true) {
		display = 'none';
	}
	if (document.getElementById("q1e1") != null) {
		document.getElementById("q1e1").style.display = display;
		document.getElementById("q2e1").style.display = display;
		document.getElementById("q3e1").style.display = display;
		document.getElementById("q4e1").style.display = display;
		document.getElementById("q5e1").style.display = display;
		document.getElementById("qres1").style.display = 'none';
		document.getElementById("qres2").style.display = 'none';
		document.getElementById("qres3").style.display = 'none';
		document.getElementById("qres4").style.display = 'none';
		document.getElementById("qres5").style.display = 'none';
	}
};

function calculer() {
	// efface les compteurs
	var taille = document.forms['quizviewform'].elements.length;
	// for (var i = 0; i < nums.length; i++)
	// nums[i] = 0;
	var a = document.forms['quizviewform'].elements[0].value.split(',');
	var nbOk = 0;
	var nbKo = 0;
	// le premier element est les reponses
	for ( var i = 1; i < taille; i++) {
		var q = document.forms['quizviewform'].elements[i];
		var indexReponseOk = a.indexOf(q["name"]);
		// CORRECT : vrai coché
		if ((indexReponseOk > -1 && q["checked"] == true)) {
			nbOk++;
		}
		// PAS CORRECT : faux , pas coché
		else if (indexReponseOk == -1 && q["checked"] == false) {

		}
		// C'est une mauvaise reponse
		if (indexReponseOk == -1) {
			document.getElementById(q["name"]).style.textDecoration = "line-through";

		}
	}
	// todo prendre parmis le formulaire QuizView a la place de QuizForm
	var nbQ = _quizsDatas[0]["nbq"]
	// var nbTotalReponses = nbQ * 3;
	var nbKo = nbQ - nbOk;
	var message = _translate("label_quelques_erreurs");
	if (nbKo == 0) {
		label_quelques_erreurs
		message = _translate("label_aucune_erreur");
	} else if (nbOk == 0) {
		message = _translate("label_tout_faux");
	} else if (nbKo < nbOk) {
		message = _translate("label_plus_bonnes");
	}
	document.getElementById("resultat").innerHTML = message + nbOk + " / "
			+ nbQ;
	if (nbOk == 0 || nbOk == 1 || nbOk == 2 || nbOk == 3 || nbOk == 4) {
		document.getElementById("qres5").style.display = 'none';
	} else {
		document.getElementById("qres5").style.display = 'block';
	}
	if (nbOk == 0 || nbOk == 1 || nbOk == 2 || nbOk == 3 || nbOk == 5) {
		document.getElementById("qres4").style.display = 'none';
	} else {
		document.getElementById("qres4").style.display = 'block';
	}
	if (nbOk == 0 || nbOk == 1 || nbOk == 2 || nbOk == 4 || nbOk == 5) {
		document.getElementById("qres3").style.display = 'none';
	} else {
		document.getElementById("qres3").style.display = 'block';
	}
	if (nbOk == 0 || nbOk == 1 || nbOk == 3 || nbOk == 4 || nbOk == 5) {
		document.getElementById("qres2").style.display = 'none';
	} else {
		document.getElementById("qres2").style.display = 'block';
	}
	if (nbOk == 2 || nbOk == 3 || nbOk == 4 || nbOk == 5) {
		document.getElementById("qres1").style.display = 'none';
	} else {
		document.getElementById("qres1").style.display = 'block';
	}
	var titre = _translate("label_results");
	alert(message);
	Ext.Msg.show({
				title : titre,
				message : message + "<br/><img src='resources/images/quiz/"
						+ nbOk + ".png' height='80px' />",
				height : 280,
				width : 200,
				minWidth : 200,
				scrollable : true,
				buttons : Ext.Msg.OK,
				icon : Ext.Msg.INFO
			});
	 
};
*/