var _paramsDatas = {
	'geo.boundsMinLong' : "-1.1574842",
	'geo.boundsMinLat' : "48.3891629",
	'geo.boundsMaxLong' : "-0.761908",
	'geo.boundsMaxLat' : "48.221313",
	'geo.defaultLat' : "48.30",
	'geo.defaultLong' : "-1.0",
	'geo.zoomInit' : "14",
	'geo.zoomMin' : "11",
	'geo.zoneDistance' : "1500",
	'geo.zoneDistanceAvantRedessiner' : "300",
	'pages.page1.nom' : "accueil_nantes",
	'pages.page2.nom' : "dechets",
	'pages.page3.nom' : "carte",
	'pages.page4.nom' : "fiches",
	'pages.page5.nom' : "lieux",
	'pages.page6.nom' : "a_domicile",
	'pages.page7.nom' : "trisacs_nantes",
	'available_language' : "fr,en",
	'defaultlanguage' : "fr"
};
var _paramFilterTypePlacesDatas = [{
		"id": "1",
		"code": "smco_reemp|modco_decheterie",
		"nom": "Tous les lieux"
	}, {
		"id": "2",
		"code": "smco_reemp",
		"nom": "Réemploi"
	}, {
		"id": "3",
		"code": "modco_decheterie|",
		"nom": "Déchèteries",
		"nom_en": "Déchèteries"
	}
];

var _paramFilterTypeMapDatas = [{
		"id": "1",
		"code": "smco_reemp",
		"nom": "Réemploi",
		"nom_en": "Re-use",
		"image": "resources/icons/marker-icon-blue.png"
	}, {
		"id": "2",
		"code": "modco_contmpb,modco_contverre,modco_contembjournmag,modco_contomr,modco_dechetssecs",
		"nom": "Conteneurs",
		"nom_en": "Containers",
		"image": "resources/icons/marker-icon-brown.png"
	}, {
		"id": "3",
		"code": "modco_decheterie",
		"nom": "Déchèteries",
		"nom_en": "Déchèteries",
		"image": "resources/icons/marker-icon-green.png"
	}, {
		"id": "4",
		"code": "modco_bouchons",
		"nom": "Collecteurs Bouchons",
		"nom_en": "Collecteurs Bouchons",
		"image": "resources/icons/marker-icon-orange.png"
	}
];

var paramAllPlaces = 'smco_reemp|modco_decheterie|modco_encombrants_resume|ventevrac';

var paramIconsMap = {
			default_icon: {},
			reemploi: {
				iconUrl: "resources/icons/marker-icon-blue.png"
			},
			conteneurs: {
				iconUrl: "resources/icons/marker-icon-brown.png"
			},
			decheterie: {
				iconUrl: "resources/icons/marker-icon-green.png"
			},
			bouchons: {
				iconUrl: "resources/icons/marker-icon-orange.png"
			}
		};
