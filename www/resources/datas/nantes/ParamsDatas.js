var _paramsDatas = {
	'geo.boundsMinLong' : "-2.26",
	'geo.boundsMinLat' : "47.84",
	'geo.boundsMaxLong' : "-1.13",
	'geo.boundsMaxLat' : "47.11",
	'geo.defaultLat' : "47.197",
	'geo.defaultLong' : "-1.543",
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
		"code": "smco_reemp|modco_decheterie|modco_ecopoint|modco_encombrants_resume|ventevracstruct",
		"nom": "Tous les lieux"
	}, {
		"id": "2",
		"code": "smco_reemp",
		"nom": "Réemploi"
	}, {
		"id": "3",
		"code": "modco_decheterie|modco_ecopoint",
		"nom": "Déchèteries / Ecopoints",
		"nom_en": "Déchèteries / Ecopoints"
	}, {
		"id": "4",
		"code": "modco_encombrants_resume",
		"nom": "Encombrants",
		"nom_en": "Containers"
	}, {
		"id": "5",
		"code": "ventevracstruct",
		"nom": "Vente vrac",
		"nom_en": "No packaging shops"
	}
];
var _paramFilterTypeFiches = [{
		"id": "1",
		"code": "solutions_entreprises_nantes|initiative_locale|zero_dechet_nantes|consigne_locale|general_tri",
		"nom": "Tout"
	}, {
		"id": "2",
		"code": "solutions_entreprises_nantes",
		"nom": "Solutions pour les entreprises"
	}, {
		"id": "3",
		"code": "initiative_locale",
		"nom": "Initiatives locales réduc. déchets"
	}, {
		"id": "4",
		"code": "zero_dechet_nantes",
		"nom": "Mode de vie zéro déchets"
	}, {
		"id": "5",
		"code": "consigne_locale|general_tri",
		"nom": "Collecte des déchets"
	}
];

var _paramFilterTypeMapDatas = [{
		"id": "1",
		"code": "smco_reemp",
		"nom": "Réemploi (77)",
		"nom_en": "Re-use (77)",
		"image": "resources/icons/marker-icon-blue.png"
	}, {
		"id": "2",
		"code": "modco_contmpb,modco_contverre,modco_contembjournmag,modco_contomr,modco_dechetssecs",
		"nom": "Conteneurs (1580)",
		"nom_en": "Containers (1580)",
		"image": "resources/icons/marker-icon-brown.png"
	}, {
		"id": "3",
		"code": "modco_ecopoint,modco_decheterie",
		"nom": "Déchèteries / Ecopoints (16)",
		"nom_en": "Déchèteries / Ecopoints (16)",
		"image": "resources/icons/marker-icon-green.png"
	}, {
		"id": "4",
		"code": "modco_compostage",
		"nom": "Composteurs (156)",
		"nom_en": "Composting (156)",
		"image": "resources/icons/marker-icon-yellow.png"
	}, {
		"id": "5",
		"code": "smco_conteneurlerelais",
		"nom": "Conteneurs vêtements (94)",
		"nom_en": "Containers clothes (94)",
		"image": "resources/icons/marker-icon-pink.png"
	}, {
		"id": "6",
		"code": "ventevracstruct,ventevracpoints",
		"nom": "Vente vrac (120)",
		"nom_en": "No packaging shops (120)",
		"image": "resources/icons/marker-icon-red.png"
	}, {
		"id": "7",
		"code": "trisacs",
		"nom": "Trisac (116)",
		"nom_en": "Trisac (116)",
		"image": "resources/icons/marker-icon-purple.png"
	}, {
		"id": "8",
		"code": "modco_bouchons",
		"nom": "Collecteurs bouchons (38)",
		"nom_en": "Collector corks (38)",
		"image": "resources/icons/marker-icon-grey.png"
	}
];

var paramAllPlaces = 'smco_reemp|modco_decheterie|modco_ecopoint|modco_encombrants_resume|ventevracstruct';

var paramIconsMap = {
			default_icon: {},
			reemploi: {
				iconUrl: "resources/icons/marker-icon-blue.png",
				iconAnchor: [12, 41], // changed marker icon position icon is 25*41 so 12*41
			},
			conteneurs: {
				iconUrl: "resources/icons/marker-icon-brown.png",
				iconAnchor: [12, 41], // changed marker icon position icon is 25*41 so 12*41
			},
			decheterie: {
				iconUrl: "resources/icons/marker-icon-green.png",
				iconAnchor: [12, 41],// changed marker icon position icon is 25*41 so 12*41
			},
			composteurs: {
				iconUrl: "resources/icons/marker-icon-yellow.png",
				iconAnchor: [12, 41], // changed marker icon position icon is 25*41 so 12*41
			},
			conteneurlerelais: {
				iconUrl: "resources/icons/marker-icon-pink.png",
				iconAnchor: [12, 41], // changed marker icon position icon is 25*41 so 12*41
			},
			ventevrac: {
				iconUrl: "resources/icons/marker-icon-red.png",
				iconAnchor: [12, 41], // changed marker icon position icon is 25*41 so 12*41
			},
			trisac: {
				iconUrl: "resources/icons/marker-icon-purple.png",
				iconAnchor: [12, 41], // changed marker icon position icon is 25*41 so 12*41
			},
			collectors: {
				iconUrl: "resources/icons/marker-icon-grey.png",
				iconAnchor: [12, 41], // changed marker icon position icon is 25*41 so 12*41
			}
		};