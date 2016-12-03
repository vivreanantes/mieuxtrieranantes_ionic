(function ( window, angular, undefined ) {
/*jshint globalstrict:true*/
'use strict';


	/* -------------------------------------
	/* FONCTIONS UTILES
	/* ------------------------------------- */

	var separatorEt = "+";
    var separatorDeZonePlageHoraire = "_";
    var separatorDePlageHoraire = ",";
    var separatorJusquA = "-";

	var _SAUF_FERIE = "sauf_ferie";
	var _FERIE_SAINT_SYLVESTRE = "sauf_saint_sylvestre";
	var _FERIE_PAQUES = "sauf_paques";
	var _FERIE_FETE_TRAVAIL = "sauf_fete_travail";
	var _FERIE_8_MAI = "sauf_8_mai";
	var _FERIE_ASCENSION = "sauf_ascenscion";
	var _FERIE_PENTECOTE = "sauf_pentecote";
	var _FERIE_FETE_NATIONALE = "sauf_fete_nationale";
	var _FERIE_ASSOMPTION = "sauf_assomption";
	var _FERIE_LA_TOUSSAINT = "sauf_la_toussaint";
	var _FERIE_ARMISTICE = "sauf_armistice";
	var _FERIE_NOEL = "sauf_noel";

    /* FUNCTION */
    function _verifieOuvertAujourdhuiDemain(stPlagesHoraire) {

	var bOuvertAujourdhui = false;
	var bOuvertDemain = false;

		if (stPlagesHoraire != null && stPlagesHoraire != "") {
			var today = _utilGetDateTodayWithoutSeconds();
			var todayTwoDays = __utilGetDayOfWeekTwoCharacters(today);
			var tomorrow = __utilGetDateTomorrowWithoutSeconds();
			var tomorrowTwoDays = __utilGetDayOfWeekTwoCharacters(tomorrow);

			// Découpe la chaîne de caractère "plagesHoraires" pour fabriquer le
			// tableau des plages horaires
			var arPlagesHoraires = stPlagesHoraire.split(",");

			var stTodayFerieSpecialDay = __getTodaySpecialDay();
			var stTomorrowSpecialDay = __getTomorrowSpecialDay();

			// Récupère le contenu de la zône des jours fériés
			var specialDayZone = "";
			for (var i = 0; i < arPlagesHoraires.length; i++) {
				var plageHoraire = arPlagesHoraires[i];
				// Cas des "sauf_"
				if (plageHoraire.substring(0, 5) == "sauf_") {
					specialDayZone = plageHoraire;
				}
				// Cas des plages
				else if (plageHoraire.length > 0) {
					var arHeures = plageHoraire.split(separatorDeZonePlageHoraire);
					var jourDeLaSemaine = arHeures[1];
					var jours = arHeures[0];

					var currentYearAAAA = new Date();
					currentYearAAAA = currentYearAAAA.getFullYear();
					// En javascript on met "0" pour le premier mois (donc on fait
					// "-1")
					var dateDebut = new Date(currentYearAAAA, jours.substring(3, 4) - 1, jours.substring(0, 2));
					// En javascript on met "0" pour le premier mois (donc on fait
					// "-1")
					var dateFin = new Date(currentYearAAAA, jours.substring(7, 10) - 1, jours.substring(5, 7));

					var arDays = jourDeLaSemaine.split(separatorEt);
					if (today >= dateDebut
							&& today <= dateFin
							&& _utilArrayContainObject(arDays,
									todayTwoDays)) {
						bOuvertAujourdhui = true;
					}

					if (tomorrow >= dateDebut
							&& tomorrow <= dateFin
							&& _utilArrayContainObject(arDays,
									tomorrowTwoDays)) {
						bOuvertDemain = true;
					}
				}
			}

			var arDays = jourDeLaSemaine.split(separatorEt);

			// 3 - Vérif les jours fériés
			if (_verifSpecialDay(stTodayFerieSpecialDay, specialDayZone)) {
				bOuvertAujourdhui = false;
			}
			if (_verifSpecialDay(stTomorrowSpecialDay, specialDayZone)) {
				bOuvertDemain = false;
			}
		}

		return {
			"bOuvertAujourdhui" : bOuvertAujourdhui,
			"bOuvertDemain" : bOuvertDemain
		}

	}

	function _traduitEnsemblePlageHoraire(stPlagesHoraire, $translate) {

		var result = '';

		if (stPlagesHoraire != null) {
			// Sépare la chaîne de caractère "plagesHoraires" pour fabriquer le
			// tableau des plages horaires
			var arPlagesHoraires = stPlagesHoraire.split(separatorDePlageHoraire);
			for (var i = 0; i < arPlagesHoraires.length; i++) {
				var plageHoraire = arPlagesHoraires[i];

				if (plageHoraire != "") {
					result = result + "- "
							+ __traduitPlageHoraire(plageHoraire, $translate);
				}
			}
		}
		return result;
	}



	function __traduitPlageHoraire(plageHoraire, $translate) {

		var result = '';
		var stLabelDe = $translate.instant("de");
		// var stLabelDe = $translate.instant("de");
		var stLabelH = $translate.instant("h");
		var stLabelA = $translate.instant("a");
		var stLabelAu = $translate.instant("au");
		var stLabelEt = $translate.instant("et");
		

		// Cas des "sauf_"
		if (plageHoraire.substring(0, 5) == "sauf_") {
			result = $translate.instant("sauf_ferie");
		}
		// Cas de "feries_suivant"
		else if (plageHoraire.substring(0, 14) == "feries_suivant") {
			result = $translate.instant("uniqferiessuivant") + " :";
		}
		// Cas des plages
		else {
			var arHeures = plageHoraire.split(separatorDeZonePlageHoraire);

			// 2. Zone date début / date de fin
			if (arHeures[0].length > 0) {
				var jours = arHeures[0];

				// Si on est sur la plage année complère
				if (jours === "0101-3112") {

				}
				// Si on est de type "de .. à "
				else if (jours.indexOf(separatorJusquA, 0) != -1) {
					result = result + /*stLabelDu + " " + */jours.substring(0, 2) + " "
							+ __getMonthString(jours.substring(2, 4))
							+ " " + stLabelAu + " " + jours.substring(5, 7) + " "
							+ __getMonthString(jours.substring(7, 9)) + " - ";
				}
				// Cas des jours précis
				else {
					result = result + /*stLabelLe + " "*/ + jours.substring(0, 2) + " "
							+ __getMonthString(jours.substring(2, 4))
							+ " " + "20" + jours.substring(4, 6)+ " - ";
				}
			}
			// result = result + " - ";

			// 3. Zone "jours de la semaine" (si elle existe)
			if (arHeures[1] != null && arHeures[1].length > 0) {
				var jourDeLaSemaine = arHeures[1];
				if (jourDeLaSemaine === "lu+ma+me+je+ve+sa+di") {
					result = result + "tous les jours"
				} else if (jourDeLaSemaine === "ma+me+je+ve+sa") {
					result = result + "mardi au samedi"
				} else if (jourDeLaSemaine === "lu+ma+me+je+ve") {
					result = result + "lundi au vendredi"
				} else if (jourDeLaSemaine === "lu+ma+me+je+ve+sa") {
					result = result + "lundi au samedi"
				} else if (jourDeLaSemaine.length == 5) {
					// Renvoie par exemple "du lundi au samedi"
					/* stLabelDu + " " */
					result = result + __getDayString(jourDeLaSemaine.substring(0, 2), 0, $translate)
							+ " " + stLabelAu + " "
							+ __getDayString(jourDeLaSemaine.substring(3, 5), 0, $translate)
							+ " ";
				} else {
					// Renvoie par exemple "lundi, mercredi, samedi"
					var arDays = jourDeLaSemaine.split(separatorEt);
					for (var i = 0; i < arDays.length; i++) {
						var day = arDays[i];
						result = result + __getDayString(day, 1, $translate);
						if (i != (arDays.length - 1)) {
							result = result + ", ";
						}
					}
				}
			}

			// 4. Zone "Heures" (si elle existe)
			if (arHeures[2] != null && arHeures[2].length > 0) {
				var heures = arHeures[2];
				if (heures === "00h00-23h59") {
					result = $translate.instant("toutletemps")
				} else {
					// On peut avoir plusieurs creneaux horaires. exemple :
					// 12h00-14h00+14h30-19h00
					var arHeures = heures.split(separatorEt);
					for (var i = 0; i < arHeures.length; i++) {
						if (i == 0) {
							result = result + " - ";
						}
						result = result + arHeures[i];
						if (i != (arHeures.length - 1)) {
							result = result + ", ";
						}
					}
				}
			}
		}
		return result;
	}


	/**
	 * Renvoie la traduction du jour de la semaine fourni (sur 2 caractères)
	 * 
	 * @param {}
	 *            strDay exemple "lu"
	 * @param {}
	 *            firstLetterInUpper "0" pour Mettre la première lettre en majuscule
	 * @return {} exemple "Lundi"
	 */
	function __getDayString(strDay, firstLetterInUpper, $translate) {
		var result = strDay;
		if (strDay == "lu") {
			result = "lundi"
		} else if (strDay == "ma") {
			result = "mardi"
		} else if (strDay == "me") {
			result = "mercredi"
		} else if (strDay == "je") {
			result = "jeudi"
		} else if (strDay == "ve") {
			result = "vendredi"
		} else if (strDay == "sa") {
			result = "samedi"
		} else if (strDay == "di") {
			result = "dimanche"
		}
		result = $translate.instant(result);
		if (firstLetterInUpper == 0) {
			(result);
		}
		return result;
	}
	/**
	 * Convertit un mois dans sa chaine de caractère. Ex "01" devient "janvier".
	 */
	function __getMonthString(stMonth, stLocale) {
		var result = "";
		if (stMonth == "01") {
			result = "janvier";
		} else if (stMonth == "02") {
			result = "fevrier";
		} else if (stMonth == "03") {
			result = "mars";
		} else if (stMonth == "04") {
			result = "avril";
		} else if (stMonth == "05") {
			result = "mai";
		} else if (stMonth == "06") {
			result = "juin";
		} else if (stMonth == "07") {
			result = "juillet";
		} else if (stMonth == "08") {
			result = "aout";
		} else if (stMonth == "09") {
			result = "septembre";
		} else if (stMonth == "10") {
			result = "octobre";
		} else if (stMonth == "11") {
			result = "novembre";
		} else if (stMonth == "12") {
			result = "decembre";
		}
		result = translate(result, stLocale);
		return result;
	}
	//TODO
	function translate(str) {

		return str;

	}

    /* FUNCTION */
	function __utilGetDateTomorrowWithoutSeconds() {
		var today = _utilGetDateTodayWithoutSeconds();
		return _addDays(today, 1);
	}

	/**
 	* Retourne sous forme d'une chaîne de caractère le jour de la semaine d'une
 	* date
	*/
	function __utilGetDayOfWeekTwoCharacters(date) {

		var weekday = new Array(7);
		weekday[0] = "di";
		weekday[1] = "lu";
		weekday[2] = "ma";
		weekday[3] = "me";
		weekday[4] = "je";
		weekday[5] = "ve";
		weekday[6] = "sa";

		return weekday[date.getDay()];
	}

	/**
	 * Renvoie une chaine correspondant au nom du jour ferie de aujourd'hui (si
	 * aujourd'hui est un jour férie). Exemple : renvoie "sauf_saint_sylvestre"
	 */
	function __getTodaySpecialDay() {
		var today = _utilGetDateTodayWithoutSeconds();
		return _getSpecialDay(today);
	}

	/**
	 * Renvoie une chaine correspondant au nom du jour ferie de demain (si demain
	 * est un jour férie). Exemple : renvoie "sauf_saint_sylvestre"
	 */
	function __getTomorrowSpecialDay() {
		var tomorrow = __utilGetDateTomorrowWithoutSeconds();
		return _getSpecialDay(tomorrow);
	}

	/**
	 * Vérifie si un jour est parmi les jours fériés.
	 */
	function _verifSpecialDay(stSpecialDay, specialDayZone) {
		var result = false;

		// Si le jour recherché est un jour férié
		if (stSpecialDay != "" && specialDayZone != "") {
			// Je transforme la zone des jours fériés, puis je recherche mon
			// jour
			var arSpecialDays = specialDayZone.split(separatorEt);
			if (specialDayZone == "sauf_ferie") {
				result = true;
			} else if (_utilArrayContainObject(arSpecialDays, stSpecialDay)) {
				result = true;
			}
		}
		return result;
	}

	function _utilGetDateTodayWithoutSeconds() {
		var today = new Date();
		today.setHours(0);
		today.setMinutes(0, 0, 0);
		return today;
	}

		/**
	 * Ajoute un nombre de jours.
	 */
	function _addDays(d, j) {
		return new Date(d.getTime() + (1000 * 60 * 60 * 24 * j));
	}

/**
	 * Renvoie une chaine correspondant au nom du jour ferie de la date fournie.
	 * Exemple : la date "01/01/2014" renvoie "sauf_saint_sylvestre"
	 */
	function _getSpecialDay(date) {

		var jourDateJJ = date.getDate();
		// on ajoute le "0" pour avoir "01"
		if (jourDateJJ < 10) {
			jourDateJJ = "0" + jourDateJJ;
		} else {
			jourDateJJ = "" + jourDateJJ;
		}
		// on ajoute le "0" pour avoir "01"
		var moisDateMM = date.getMonth() + 1;
		if (moisDateMM < 10) {
			moisDateMM = "0" + moisDateMM;
		} else {
			moisDateMM = "" + moisDateMM;
		}
		var yearDateYY = (date.getFullYear() + "").substring(2, 4);
		var dayString = "" + jourDateJJ + moisDateMM + yearDateYY;

		var arSaintSylvestre = ["010113", "010114", "010115", "010116", "010117", "010118"];
		var arPaques = ["010413", "210414", "060415", "280316", "160417", "010418"];
		var arFeteTravail = ["010513", "010514", "010515", "010516", "010517", "010518"];
		var ar8mai = ["080513", "080514", "080515", "080516", "080517", "080518"];
		var arAscension = ["090513", "290514", "140515", "050516", "250517", "100518"];
		var arPentecote = ["200513", "090614", "250515", "160516", "050617", "210518"];
		var arFeteNationale = ["140713", "140714", "140715", "140716", "140717", "140718"];
		var arAssomption = ["150813", "150814", "150815", "150816", "150817", "150818"];
		var arLaToussaint = ["011113", "011114", "011115", "011116", "011117", "011118"];
		var arArmistice = ["111113", "111114", "111115", "111116", "111117", "111118"];
		var arNoel = ["251213", "251214", "251215", "251216", "251217", "251218"];

		if (_utilArrayContainObject(arSaintSylvestre, dayString)) {
			return _FERIE_SAINT_SYLVESTRE;
		} else if (_utilArrayContainObject(arPaques, dayString)) {
			return _FERIE_PAQUES;
		} else if (_utilArrayContainObject(arFeteTravail, dayString)) {
			return _FERIE_FETE_TRAVAIL;
		} else if (_utilArrayContainObject(ar8mai, dayString)) {
			return _FERIE_8_MAI;
		} else if (_utilArrayContainObject(arAscension, dayString)) {
			return _FERIE_ASCENSION;
		} else if (_utilArrayContainObject(arPentecote, dayString)) {
			return _FERIE_PENTECOTE;
		} else if (_utilArrayContainObject(arFeteNationale, dayString)) {
			return _FERIE_FETE_NATIONALE;
		} else if (_utilArrayContainObject(arAssomption, dayString)) {
			return _FERIE_ASSOMPTION;
		} else if (_utilArrayContainObject(arLaToussaint, dayString)) {
			return _FERIE_LA_TOUSSAINT;
		} else if (_utilArrayContainObject(arArmistice, dayString)) {
			return _FERIE_ARMISTICE;
		} else if (_utilArrayContainObject(arNoel, dayString)) {
			return _FERIE_NOEL;
		} else {
			return "";
		}
	}

	/**
	 * Vérifie si un tableau arSrc contient un objet obj
	 */
	function _utilArrayContainObject(a, obj) {
		for (var i = 0; i < a.length; i++) {
			if (a[i] === obj) {
				return true;
			}
		}
		return false;
	}

/* -------------------- */
/* MODULE */
/* -------------------- */
angular.module('mtn.date',[])

   	/* -------------------- */
 	/* DIRECTIVE DEFINITION */
	/* -------------------- */
  	.directive('mtnPlageHoraire', function($translate) {
   

    return {

        restrict: 'EA',

        replace: true,

        transclude: true,

        scope: {horaire: '@horaire', fulldisplay: '@fulldisplay'},

        template: function(tElem, tAttrs){

        	return "<div class='item-text-wrap'>{{labelOuverture|translate}}<div class='row' ng-show='labelHoraires!=null'><br/>{{'horaires'|translate}} {{labelHoraires|translate}}</div></div>";
        	// return '<div>{{labelOuverture}}</div>';
        },

        link: function(scope, element, attrs){

        	var res = _verifieOuvertAujourdhuiDemain(scope.horaire);
        	var labelOuverture = '';
        	if (res.bOuvertAujourdhui && res.bOuvertDemain) {
        		labelOuverture = "ouvert_aujourdui_et_demain";
        	}
        	else if (!res.bOuvertAujourdhui && res.bOuvertDemain) {
        		labelOuverture = "ouvert_demain";
        	}
        	else if (res.bOuvertAujourdhui && !res.bOuvertDemain) {
        		labelOuverture = "ouvert_aujourdui";
        	}
			if (typeof scope.fulldisplay !== 'undefined') {
     	  		var labelHoraires = _traduitEnsemblePlageHoraire(scope.horaire, $translate);
			}			
			scope.labelOuverture = labelOuverture;
			scope.labelHoraires = labelHoraires;
			
        }

    };

  });


})( window, window.angular );

