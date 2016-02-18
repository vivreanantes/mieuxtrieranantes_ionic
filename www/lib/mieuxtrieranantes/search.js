
/**
 * Renvoie la liste des objets correspondant Ã  une recherche globale.
 * RM_REC_GLOB_01
 */
function _getGlobalSearchResult(texteRecherche) {
	var locale = getLocale();
	var tempo = [];
	var texteNoAccents = _utilRetireAccentEtMinuscule(texteRecherche);
	// RM_RE_MOTS_CLES_01
	var textes = texteNoAccents.split(',');
	for (var j = 0; j < textes.length; j++) {
		var texte = textes[j];
		ajouteDatasSelonHash(tempo, _hashGarbagesDatas, _garbagesDatas,
				texte, locale, "garbages");
		ajouteDatasSelonHash(tempo, _hashFichesDatas, _infosDatas,
				texte, locale, "fiches");
		ajouteDatasSelonHash(tempo, _hashDocsDatas, _docsDatas, texte,
				locale, "docs");
		ajouteDatasSelonHash(tempo, _hashStructuresDatas,
				_structuresDatas, texte, locale, "structures");
		ajouteDatasSelonHash(tempo, _hashTrisacsDatas, _structuresDatas,
				texte, locale, "trisacs");
		ajouteDatasSelonHash(tempo, _hashADomicileDatas,
				_homeCollectModsDatas, texte, locale, "homecollectmods");
	}
	return tempo;
};

/**
 * Cette fonctionne modifie un tableau fourni en paramÃ¨tre, en ajoutant des
 * Ã©lÃ©ments du tableau _datas.<br/> On ajoute les Ã©lÃ©ments du tableau
 * _datas aprÃ¨s avoir rechercher dans le tableau _hash tous les Ã©lÃ©ments
 * dont les codes sont exacement la chaine texteNoAccents.<br/> On prend en
 * compte locale dans la recherche de _hash.<br/> page est le nom de la
 * page sur laquelle sera affichÃ©e la donnÃ©e, et qui est mise sur la donnÃ©e
 */
function ajouteDatasSelonHash(tableauARetourner, _hash, _datas, texteNoAccents,
		locale, page) {
	// RM_LA_LANGUE_06
	if (locale == "en" && _hash.length > 1) {
		var cles = _hash[1][texteNoAccents];
	} else {
		var cles = _hash[0][texteNoAccents];
	}
	if (cles != undefined) {
		var codesCles = cles.split(',');
		var taille = codesCles.length;
		for (var j = 0; j < taille; j++) {
			var codeCle = codesCles[j];
			for (var k = 0; k < _datas.length; k++) {
				if (typeof _datas[k] != "undefined"
						&& _datas[k]["code"] == codeCle) {
					if (page == "homecollectmods") {
						_datas[k]["type"] = "Collecte Ã  domicile";
						_datas[k]["type_en"] = "Home collect";
						_datas[k]["image"] = "icon-go-home.png";
						_datas[k]["nom"] = _datas[k]["dcv"];
						_datas[k]["nom_en"] = _datas[k]["dcv"];
						_datas[k]["jcbj_en"] = _datas[k]["jcbj"].replace(
								"Sacs (jaunes et bleus)",
								"Bags (yellow et blue)").replace("lundi",
								"monday").replace("mardi", "tuesday").replace(
								"mercredi", "wednesday").replace("jeudi",
								"thursday").replace("vendredi", "friday")
								.replace("samedi", "saturday").replace(
										"dimanche", "sunday");
					}
					// if (page == "docs") {
					// _datas[k]["nom_en"] = "<a href='http://"
					// + this.getRecordValue(_datas[k], "url") + "'
					// target=_new>"
					// + this.getRecordValue(_datas[k], "nom") + "</a>";
					// }
					_datas[k]["page"] = page;
					// Permet de prendre le franÃ§ais quand on a pas la
					// traduction
					_datas[k]["nom_en"] = this.getRecordValue(_datas[k], "nom");
					_datas[k]["type_en"] = this.getRecordValue(_datas[k],
							"type");
					// TRELLO_DISTANCE_JOURS
					if (typeof _datas[k]["latitude"] != "undefined") {
						var diste = this.calculeDistance(_datas[k]["latitude"],
								_datas[k]["longitude"], _datas[k]["latitude"],
								_datas[k]["longitude"]);
					}
					tableauARetourner.push(_datas[k]);
				}
			}
		}
	}
};

/**
 * Retire les accents d'une chaÃ®ne de caractÃ¨re et met en minuscule
 */
function _utilRetireAccentEtMinuscule(result) {
	result = result.replace(/[Ã€Ã Ã�Ã¡Ã‚Ã¢ÃƒÃ£Ã„Ã¤Ã…Ã¥Ã†Ã¦Ä€Ä�Ä‚ÄƒÄ„Ä…]/g, "a");
	result = result.replace(/[ÃˆÃ¨Ã‰Ã©ÃŠÃªÃ‹Ã«Ä’Ä“Ä”Ä•Ä–Ä—Ä˜Ä™ÄšÄ›]/g, "e");
	result = result.replace(/[Ã‡Ã§]/g, "c");
	result = result.replace(/[Ã�]/g, "d");
	result = result.replace(/[ÃŒÃ�ÃŽÃ�Ã¬Ã­Ã®Ã¯]/g, "i");
	result = result.replace(/[Ã™ÃšÃ›ÃœÃ¹ÃºÃ»Ã¼]/g, "u");
	result = result.replace(/[Ã‘Ã±]/g, "n");
	result = result.replace(/[ÃŒÃ�ÃŽÃ�Ã¬Ã­Ã®Ã¯]/g, "i");
	result = result.replace(/[Å Å¡]/g, "s");
	result = result.replace(/[Å¸Ã¿Ã½]/g, "y");
	result = result.replace(/[Å½Å¾]/g, "z");
	result = result.toLowerCase();
	// Retire les mots inutiles
	result = _utilRetireMotsInutiles(result);
	// trim : permet de retirer les blancs en dÃ©but et fin de chaÃ®ne.
	result = result.trim();
	// RM_RE_MODE_RECH_06, RM_RE_MOTS_CLES_02
	// Remplace les " " et les "+" par des virgules
	result = result.replace(/[ +]/g, ",");
	result = _utilMettreNomAuSingulier(result);
	return result;
}

function _utilRetireMotsInutiles(result) {
	result = result
			.replace(
					/allee|avenue|bas chemin|basse tenue|boulevard|chemin|cours|esplanade|hameau|haute impasse|impasse|jardin|mail|nouvelle impasse|parvis|passage|petit chemin|petite avenue|petite rue|place|pont|promenade|quai|rond-point|route|rue|ruelle|sentier|square|venelle|voie/g,
					"");
	return result;
}

/**
 * Met un nom au singulier : retire les s Ã  la fin, ou les 'x' Exemple :
 * "emmaus,as,b" renvoie "emmau,emmaus,a,as,b," RM_RE_MODE_RECH_07
 */
function _utilMettreNomAuSingulier(mots) {
	// supprime le 's' en caractÃ¨re final
	// result = result.replace(/([^]*)s,$/, '$1,');
	var result = "";
	var codesCles = mots.split(',');
	var taille = codesCles.length;
	for (var j = 0; j < taille; j++) {
		var codeCle = codesCles[j];
		var fin = codeCle.substring(codeCle.length - 1, codeCle.length);
		var debut = codeCle.substring(0, codeCle.length - 1);
		if (fin == "s") {
			result = result + debut + "," + codeCle + ",";
		} else {
			result = result + codeCle + ",";
		}
	}
	return result;
}

/**
 * Retire les accents d'une chaÃ®ne de caractÃ¨re
 */
function _utilRetireAccent(result) {
	result = result.trim();
	result = result.replace(/[Ã€Ã Ã�Ã¡Ã‚Ã¢ÃƒÃ£Ã„Ã¤Ã…Ã¥Ã†Ã¦Ä€Ä�Ä‚ÄƒÄ„Ä…]/g, "a");
	result = result.replace(/[ÃˆÃ¨Ã‰Ã©ÃŠÃªÃ‹Ã«Ä’Ä“Ä”Ä•Ä–Ä—Ä˜Ä™ÄšÄ›]/g, "e");
	result = result.replace(/[Ã‡Ã§]/g, "c");
	result = result.replace(/[Ã�]/g, "d");
	result = result.replace(/[ÃŒÃ�ÃŽÃ�Ã¬Ã­Ã®Ã¯]/g, "i");
	result = result.replace(/[Ã™ÃšÃ›ÃœÃ¹ÃºÃ»Ã¼]/g, "u");
	result = result.replace(/[Ã‘Ã±]/g, "n");
	result = result.replace(/[ÃŒÃ�ÃŽÃ�Ã¬Ã­Ã®Ã¯]/g, "i");
	result = result.replace(/[Å Å¡]/g, "s");
	result = result.replace(/[Å¸Ã¿Ã½]/g, "y");
	result = result.replace(/[Å½Å¾]/g, "z");
	return result;
}