angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

	// TEMP CRN
	$scope.myFunctionName = function() {
		//return true or false here
		if (isPageActive('accueil_nantes')) {
			return true;
		}
	};
})

.controller('ChatsCtrl', function($scope, Chats) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends : true
	};
}).controller('DechetCatCtrl', function($scope) {

	// TEMP CRN
	// var tmp = getParam("geo.boundsMinLong");
	// alert(tmp);

	//GLOBAL DATA SOURCE
	$scope.categories = _usualCategoriesDatas;

}).controller('DechetCatSubCtrl', function($scope, $stateParams) {

	//GLOBAL DATA SOURCE
	$scope.selected_categorie_usuelle = $stateParams.code;

	$scope.dechets = _garbagesDatas;

}).controller(
		'DechetDetailCtrl',
		function($scope, $stateParams, $filter) {

			var dechet_code = $stateParams.code;
			//On récupère le déchet qui correspondant au code 
			dechets = $filter('filter')(_garbagesDatas, {
				code : dechet_code
			});

			$scope.toggleObject = {
				item : -1
			};
			$scope.toggleObject2 = {
				item2 : -1
			};

			//Le filter renvoie necessairement un Array donc on extrait le premier élément trouvé
			var dechet = dechets[0];

			//Array modes collectes (split de la chaine)
			var modesCollectes = dechet.modco.split(",");

			//RE-FILTER sur les modes de collecte
			var modesCollectesFilter = $filter('filter')(_collectModsDatas,
			//CUSTOM INLINE FILTER
			function(value, index, fullarray) {
				//Modes de collecte déchet           
				myindex = modesCollectes.indexOf(value.code);
				if (myindex >= 0)
					return true;
				else
					return false;
			});

			// CRN
			// Tableau des conseils (découpage de la chaine)
			if (dechet.cons != null) {
				var conseils = dechet.cons.split(",");

				// RE-FILTER sur les conseils
				var conseilsFilter = $filter('filter')(_advicesDatas,
				// CUSTOM INLINE FILTER
				function(value, index, fullarray) {
					// Conseils déchet           
					myindex = conseils.indexOf(value.code);
					if (myindex >= 0) {
						return true;
					} else {
						return false;
					}
				});
			}
			if (dechet.recyc === "PAS_POUBELLE") {
				dechet.recyc_color = "orange";
				dechet.recyc = "Ne pas mettre à la poubelle";
				dechet.recyc = _translate("label_NON")
						+ _translate("label_pas_poubelle");
			} else if (dechet.recyc === "NON") {
				dechet.recyc_color = "red";
				dechet.recyc = _translate("label_NON");
			} else {
				dechet.recyc_color = "green";
				dechet.recyc = _translate("label_OUI");
			}

			//SCOPE
			$scope.dechet = dechet;
			$scope.modesCollecte = modesCollectesFilter;
			$scope.conseils = conseilsFilter;

		})

.controller('FichesCtrl', function($scope, $stateParams) {

	//GLOBAL DATA SOURCE
	$scope.fiches = _infosDatas;

}).controller('FichesDetailCtrl', function($scope, $stateParams, $filter) {

	var fiche_code = $stateParams.code;
	//On récupère la fiche qui correspondant au code 
	fiches = $filter('filter')(_infosDatas, {
		code : fiche_code
	});

	//Le filter renvoie necessairement un Array donc on extrait le premier élément trouvé
	var fiche = fiches[0];

	//SCOPE
	$scope.fiche = fiche;

})

.controller('DocsCtrl', function($scope, $stateParams) {

	//GLOBAL DATA SOURCE
	$scope.docs = _docsDatas;

}).controller(
		'StructuresCtrl',
		function($scope, ServiceStructures) {

			//SELECT Type de structures
			$scope.typeCollecte = ServiceStructures.getTypeCollecte();
			$scope.formSelected = {

				type : $scope.typeCollecte[0],
				searchKey : ''
			};
			$scope.results = [];

			$scope.onChangeForm = function() {

				$scope.results = ServiceStructures
						.search($scope.formSelected.type,
								$scope.formSelected.searchKey);

			};
		})

.controller('QuizCtrl', function($scope, $stateParams) {

	var indexElement = 1;
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
});

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
	/*Ext.Msg.show({
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
	 */
};