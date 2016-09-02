

app.directive("mtnPlageHoraire", function() {

    var separatorEt = "+";
    var separatorDeZonePlageHoraire = "_";
    var separatorDePlageHoraire = ",";
    var separatorJusquA = "-";
    var htmlSautDeLigne = "<br/>";

	_SAUF_FERIE = "sauf_ferie";
	_FERIE_SAINT_SYLVESTRE = "sauf_saint_sylvestre";
	_FERIE_PAQUES = "sauf_paques";
	_FERIE_FETE_TRAVAIL = "sauf_fete_travail";
	_FERIE_8_MAI = "sauf_8_mai";
	_FERIE_ASCENSION = "sauf_ascenscion";
	_FERIE_PENTECOTE = "sauf_pentecote";
	_FERIE_FETE_NATIONALE = "sauf_fete_nationale";
	_FERIE_ASSOMPTION = "sauf_assomption";
	_FERIE_LA_TOUSSAINT = "sauf_la_toussaint";
	_FERIE_ARMISTICE = "sauf_armistice";
	_FERIE_NOEL = "sauf_noel";

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

		var arSaintSylvestre = new Array("010113", "010114", "010115", "010116", "010117", "010118");
		var arPaques = new Array("010413", "210414", "060415", "280316", "160417", "010418");
		var arFeteTravail = new Array("010513", "010514", "010515", "010516", "010517", "010518");
		var ar8mai = new Array("080513", "080514", "080515", "080516", "080517", "080518");
		var arAscension = new Array("090513", "290514", "140515", "050516", "250517", "100518");
		var arPentecote = new Array("200513", "090614", "250515", "160516", "050617", "210518");
		var arFeteNationale = new Array("140713", "140714", "140715", "140716", "140717", "140718");
		var arAssomption = new Array("150813", "150814", "150815", "150816", "150817", "150818");
		var arLaToussaint = new Array("011113", "011114", "011115", "011116", "011117", "011118");
		var arArmistice = new Array("111113", "111114", "111115", "111116", "111117", "111118");
		var arNoel = new Array("251213", "251214", "251215", "251216", "251217", "251218");

		if (this._utilArrayContainObject(arSaintSylvestre, dayString)) {
			return _FERIE_SAINT_SYLVESTRE;
		} else if (this._utilArrayContainObject(arPaques, dayString)) {
			return _FERIE_PAQUES;
		} else if (this._utilArrayContainObject(arFeteTravail, dayString)) {
			return _FERIE_FETE_TRAVAIL;
		} else if (this._utilArrayContainObject(ar8mai, dayString)) {
			return _FERIE_8_MAI;
		} else if (this._utilArrayContainObject(arAscension, dayString)) {
			return _FERIE_ASCENSION;
		} else if (this._utilArrayContainObject(arPentecote, dayString)) {
			return _FERIE_PENTECOTE;
		} else if (this._utilArrayContainObject(arFeteNationale, dayString)) {
			return _FERIE_FETE_NATIONALE;
		} else if (this._utilArrayContainObject(arAssomption, dayString)) {
			return _FERIE_ASSOMPTION;
		} else if (this._utilArrayContainObject(arLaToussaint, dayString)) {
			return _FERIE_LA_TOUSSAINT;
		} else if (this._utilArrayContainObject(arArmistice, dayString)) {
			return _FERIE_ARMISTICE;
		} else if (this._utilArrayContainObject(arNoel, dayString)) {
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
	/* DIRECTIVE DEFINITION */
	/* -------------------- */

    return {

        restrict: 'EA',

        replace: true,

        transclude: true,

        scope: {horaire: '@horaire', fulldisplay: '@fulldisplay'},

        template: function(tElem, tAttrs){

        	return '<div>{{labelOuverture}}</div>';
        },

        link: function(scope, element, attrs){

        	var res = _verifieOuvertAujourdhuiDemain(scope.horaire);
        	var label = '';
        	if (res.bOuvertAujourdhui && res.bOuvertDemain) {
        		label = "Ouvert aujourd'hui et demain";
        	}
        	else if (!res.bOuvertAujourdhui && res.bOuvertDemain) {
        		label = "Ouvert demain";
        	}
        	else if (res.bOuvertAujourdhui && !res.bOuvertDemain) {
        		label = "Ouvert aujourd'hui";
        	}
     	
     	  	if (typeof scope.fulldisplay !== 'undefined') {
    			
     	  		label += scope.horaire;

			}

			scope.labelOuverture = label;

        }

    };

});