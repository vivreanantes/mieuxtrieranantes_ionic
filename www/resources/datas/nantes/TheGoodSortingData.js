var _theGoodSortingData = {
	questions: [{
			name: "ampoule_basse_conso",
			descr: "Ampoule basse consommation",
			descr_en: "aaa",
			advice: "On peut les ramener aux bornes des magasin bricolage et supermarché. Les déchèteries les acceptent aussi.",
			advice_en: "bbbb",
			image: "ampoule_basse_conso.png",
			reponses: ["retour", "decheterie"],
			exclude_filters: []
		}, {
			name: "appareil_photo",
			descr: "Appareil photo",
			descr_en: "aaa",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			advice_en: "bbbb",
			image: "appareil_photo.png",
			reponses: ["decheterie", "retour"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "arrosoir",
			descr: "Arrosoir",
			descr_en: "aaa",
			advice: "Seuls les  bouteilles et flacons sont récupérés (sauf si vous êtes en extension de tri). Les déchèteries les accepteront aussi.",
			advice_en: "bbbb",
			image: "arrosoir.png",
			reponses: ["poubelle", "decheterie"],
			exclude_filters: ["tri_extension", "niveau_enfant", "niveau_expert"]
		}, {
			name: "arrosoir_2",
			descr: "Arrosoir",
			descr_en: "aaa",
			advice: "Tout le plastique se recycle en extension de tri.",
			advice_en: "bbbb",
			image: "arrosoir.png",
			reponses: ["jaune", "decheterie"],
			exclude_filters: ["tri_normal", "niveau_enfant", "niveau_expert"]
		}, {
			name: "ballon",
			descr: "Ballon",
			descr_en: "aaa",
			advice: "C'était poubelle ou déchèterie : seuls les  bouteilles et flacons sont récupérés (sauf si vous êtes en extension de tri).",
			advice_en: "bbbb",
			image: "ballon.png",
			reponses: ["poubelle", "decheterie"],
			exclude_filters: ["tri_extension", "niveau_enfant", "niveau_expert"]
		}, {
			name: "ballon_2",
			descr: "Ballon",
			descr_en: "aaa",
			advice: "C'était recyclage ou déchèterie : tout le plastique se recycle en extension de tri. Les déchèteries les accepteront aussi.",
			advice_en: "bbbb",
			image: "ballon.png",
			reponses: ["jaune", "decheterie"],
			exclude_filters: ["tri_normal", "niveau_enfant", "niveau_expert"]
		}, {
			name: "barquette_alu",
			descr: "Barquette aluminium",
			descr_en: "aaa",
			advice: "C'était recyclage : l'aluminium se recycle, sauf s'il ne représente pas assez de matériaux (papier alu, capsules...)",
			advice_en: "bbbb",
			image: "barquette_alu.png",
			reponses: ["jaune"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "batterie",
			descr: "Batterie de voiture",
			descr_en: "aaa",
			advice: "C'était déchèterie : ils sont considérés comme des produits toxiques.",
			advice_en: "bbbb",
			image: "batterie.png",
			reponses: ["decheterie", "niveau_enfant"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "bombe_aerosol",
			descr: "Bombe aérosol",
			descr_en: "aaa",
			advice: "C'était recyclage ou déchèterie : l'acier se recycle, le bouchon également.",
			advice_en: "bbbb",
			image: "bombe_aerosol.png",
			reponses: ["jaune", "decheterie"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "boite_a_oeufs",
			resume: "(propre)",
			resume_en: "(cleaned)",
			descr: "Boite à œufs",
			descr_en: "aaa",
			advice: "Le carton propre est recyclable. On peut aussi le mettre au compostage.",
			advice_en: "bbbb",
			image: "boite_a_oeufs.png",
			reponses: ["composteur", "jaune"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "boule_petanque.png",
			descr: "Boule de pétanque (fendue)",
			descr_en: "aaa",
			advice: "C'était recyclage ou déchèterie : l'acier se recycle.",
			advice_en: "bbbb",
			image: "boule_petanque.png",
			reponses: ["jaune", "decheterie"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "bouteille_huile",
			descr: "Bouteille d'huile",
			descr_en: "aaa",
			advice: "C'était recyclage : les bouteilles et flacons plastiques se recyclent (sauf s'ils contenaient des produits toxiques).",
			advice_en: "bbbb",
			image: "bouteille_huile.png",
			reponses: ["jaune"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "bouchon_liege",
			descr: "Bouchon de liège",
			descr_en: "aaa",
			advice: "Les bouchons de liège sont recyclables mais ne sont pas recyclés. Ils sont récupérés par des associations ('Action Cancer 44'...)",
			advice_en: "bbbb",
			image: "bouchon_liege.png",
			reponses: ["poubelle", "reemploi"],
			exclude_filters: ["niveau_enfant"]
		}, {
			name: "brosse_a_dent",
			descr: "Brosse à dent",
			descr_en: "aaa",
			advice: "C'était poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			advice_en: "bbbb",
			image: "brosse_a_dent.png",
			reponses: ["poubelle"],
			exclude_filters: ["tri_extension", "niveau_enfant", "niveau_expert"]
		}, {
			name: "brosse_a_dent_2",
			descr: "Brosse à dent",
			descr_en: "aaa",
			advice: "C'était recyclage : tout le plastique se recycle en extension de tri.",
			advice_en: "bbbb",
			image: "brosse_a_dent.png",
			reponses: ["jaune"],
			exclude_filters: ["tri_normal", "niveau_enfant", "niveau_expert"]
		}, {
			name: "cannette",
			descr: "Cannette de soda",
			descr_en: "aaa",
			advice: "C'était recyclage : l'aluminium se recycle (sauf s'il est trop petit).",
			advice_en: "bbbb",
			image: "cannette.png",
			reponses: ["jaune"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "cahier",
			descr: "Cahier",
			descr_en: "aaa",
			advice: "C'était recyclage : le papier propre se recycle.",
			advice_en: "bbbb",
			image: "cahier.png",
			reponses: ["jaune"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "chaussures_propres",
			descr: "Chaussures bon état",
			descr_en: "aaa",
			advice: "Elles peuvent être mis dans les conteneurs vêtement.",
			advice_en: "bbbb",
			image: "chaussures_propres.png",
			reponses: ["reeemploi"],
			exclude_filters: []
		}, {
			name: "chaussures_usees",
			descr: "Chaussures usées",
			descr_en: "aaa",
			advice: "Direction poubelle : elles ne peuvent pas être mis dans les conteneurs vêtement.",
			advice_en: "bbbb",
			image: "chaussures_usees.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau_enfant"]
		}, {
			name: "cle_usb",
			descr: "Clé USB",
			descr_en: "aaa",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			advice_en: "bbbb",
			image: "cle_usb.png",
			reponses: ["decheterie", "retour"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "couvercle_bocal",
			resume: "( diamètre 3 cms  )",
			resume_en: "( diameter 3 cms  )",
			descr: "Couvercle bocal",
			descr_en: "aaa",
			advice: "C'était poubelle : ce matériau pourrait être recyclé, mais il est trop petit (pas assez de matières).",
			advice_en: "bbbb",
			image: "couvercle_bocal.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau_enfant"]
		}, {
			name: "ciseaux_enfants",
			descr: "Ciseaux enfant",
			descr_en: "aaa",
			advice: "Direction poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (et en extension de tri, il faut uniquement des objets en plastique)",
			advice_en: "bbbb",
			image: "ciseaux_enfants.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau_enfant", "niveau_expert"]
		}, {
			name: "dentifrice",
			descr: "Dentifrice",
			descr_en: "aaa",
			advice: "Direction poubelle",
			advice_en: "bbbb",
			image: "dentifrice.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "epeluchure_legumes",
			descr: "Épluchure de légumes",
			descr_en: "aaa",
			advice: "Direction composteur. Si vous en avez pas :( , ce sera poubelle. Les poules aussi aiment bien.",
			advice_en: "bbbb",
			image: "epeluchure_legumes.png",
			reponses: ["poubelle", "composteur"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "fer_a_repasser",
			descr: "Fer à repasser",
			descr_en: "aaa",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			advice_en: "bbbb",
			image: "fer_a_repasser.png",
			reponses: ["decheterie", "retour"],
			exclude_filters: []
		}, {
			name: "flacon_shampoing",
			descr: "Flacon de shampoing",
			descr_en: "aaa",
			advice: "C'était recyclage : les bouteilles et flacons plastiques se recyclent (sauf s'ils contenaient des produits toxiques).",
			advice_en: "bbbb",
			image: "flacon_shampoing.png",
			reponses: ["jaune"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "lampe",
			descr: "Lampe",
			descr_en: "aaa",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			advice_en: "bbbb",
			image: "lampe.png",
			reponses: ["decheterie", "retour"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "medicaments",
			descr: "Médicaments",
			descr_en: "aaa",
			advice: "Cétait retour au magasin : les pharmacies ont l'obligation de récupérer les anciens médicaments (ils seront incinérés). Vous pouvez mettre au recyclage notice et emballage.",
			advice_en: "bbbb",
			image: "medicaments.png",
			reponses: ["retour"],
			exclude_filters: []
		}, {
			name: "megot",
			descr: "Mégot",
			descr_en: "aaa",
			advice: "Poubelle, tout simplement !",
			advice_en: "bbbb",
			image: "megot.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "mouchoir_papier",
			descr: "Mouchoir en papier",
			descr_en: "aaa",
			advice: "Direction poubelle ou composteur : le papier souillé ne se recycle pas.",
			advice_en: "bbbb",
			image: "mouchoir_papier.png",
			reponses: ["composteur", "poubelle"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "nounours",
			descr: "Nounours",
			descr_en: "aaa",
			advice: "Direction poubelle ou conteneurs vêtements. S'il est en bon état, vous pouvez le donner à une association, ou à votre enfant :) .",
			advice_en: "bbbb",
			image: "nounours.png",
			reponses: ["poubelle", "reemploi"],
			exclude_filters: ["niveau_enfant", "niveau_expert"]
		}, {
			name: "ordinateur_portable",
			descr: "Ordinateur portable",
			resume: "( non réparable )",
			descr_en: "aaa",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			advice_en: "bbbb",
			image: "ordinateur_portable.jpg",
			reponses: ["retour", "decheterie"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "paille",
			descr: "Paille",
			descr_en: "aaa",
			advice: "C'était poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			advice_en: "bbbb",
			image: "paille.png",
			reponses: ["poubelle"],
			exclude_filters: ["tri_extension", "niveau_enfant", "niveau_expert"]
		}, {
			name: "paille_2",
			descr: "Paille",
			descr_en: "aaa",
			advice: "C'était recyclage : tout le plastique se recycle en extension de tri",
			advice_en: "bbbb",
			image: "paille.png",
			reponses: ["jaune"],
			exclude_filters: ["tri_normal", "niveau_enfant", "niveau_expert"]
		}, {
			name: "palette_bois",
			descr: "Palette en bois",
			descr_en: "aaa",
			advice: "C'était déchèterie.",
			advice_en: "bbbb",
			image: "palette_bois.png",
			reponses: ["reemploi", "decheterie"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "peau_banane",
			descr: "Peau de banane",
			descr_en: "aaa",
			advice: "Direction composteur. Si vous en avez pas :( , ce sera poubelle.",
			advice_en: "bbbb",
			image: "peau_banane.png",
			reponses: ["composteur"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "pneu",
			descr: "Pneu",
			descr_en: "aaa",
			advice: "Direction déchèterie.",
			advice_en: "bbbb",
			image: "pneu.png",
			reponses: ["decheterie"],
			exclude_filters: ["niveau_enfant"]
		}, {
			name: "pot_peinture",
			descr: "Pot de peinture",
			resume: "( peinture murale )",
			descr_en: "aaa",
			advice: "Direction déchèterie : ils sont considérés comme des produits toxiques.",
			advice_en: "bbbb",
			image: "pot_peinture.png",
			reponses: ["decheterie"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "rasoir_jetable",
			descr: "Rasoir jetable",
			descr_en: "aaa",
			advice: "Direction poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (et en extension de tri, il faut uniquement des objets en plastique)",
			advice_en: "bbbb",
			image: "rasoir_jetable.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau_enfant", "niveau_expert"]
		}, {
			name: "rouge_a_levre",
			descr: "Rouge à lèvre",
			descr_en: "aaa",
			advice: "Direction poubelle.",
			advice_en: "bbbb",
			image: "rouge_a_levre.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau_enfant", "niveau_expert"]
		}, {
			name: "verre_a_boire",
			descr: "Verre à boire",
			descr_en: "aaa",
			advice: "Direction poubelle : seul le 'verre d'emballage' (bouteille, bocaux) peut être recyclé (on peut l'intégrer au calcin utilisé dans les fours verriers)",
			advice_en: "bbbb",
			image: "verre_a_boire.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau_expert"]
		}, {
			name: "voiture_jouet_pile",
			descr: "Voiture enfant avec LED",
			descr_en: "aaa",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			advice_en: "bbbb",
			image: "voiture_jouet_pile.png",
			reponses: ["decheterie", "retour"],
			exclude_filters: ["niveau_enfant"]
		}, {
			name: "yaourt",
			descr: "Yaourt",
			descr_en: "aaa",
			advice: "C'était recyclage : il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			advice_en: "bbbb",
			image: "yaourt.png",
			reponses: ["poubelle"],
			exclude_filters: ["tri_extension", "niveau_enfant"]
		}, {
			name: "yaourt_2",
			descr: "Yaourt",
			descr_en: "aaa",
			advice: "C'était recyclage : en extension de tri, tout le plastique se recycle.",
			advice_en: "bbbb",
			image: "yaourt.png",
			reponses: ["jaune"],
			exclude_filters: ["tri_normal", "niveau_enfant"]
		}
	],
	reponses: [{
			id: "composteur",
			descr: 'Composteur',
			advice_en: "bbbb",
			image: "composteur.png"
		}, {
			id: "decheterie",
			descr: 'Déchèterie',
			advice_en: "bbbb",
			image: "decheterie.png"
		}, {
			id: "jaune",
			descr: 'Recyclage',
			resume: 'bac/sac jaune, conten.',
			resume_en: "yellow bag, conten.",
			advice_en: "bbbb",
			image: "recyclage.png"
		}, {
			id: "reemploi",
			descr: 'Réemploi',
			resume: 'assos, conten. vêtement...',
			resume_en: "assos, clothes cont.",
			advice_en: "bbbb",
			image: "reemploi.png"
		}, {
			id: "poubelle",
			descr: 'Poubelle',
			advice_en: "bbbb",
			image: "bac_sac_bleu.png"
		}, {
			id: "retour",
			descr: 'Retour magasin',
			resume: 'pharmacie, brico...',
			resume_en: "pharmacy, supermarket...",
			advice_en: "bbbb",
			image: "retour.png"
		}
	],
	types_options: [{
			"code":"tri",
			"default": "tri_normal",
			"options": [{code:"tri_normal",descr:"tri normal"},{code:"tri_extension",descr:"tri extension"}],
			"descr": "Si vous habitez la ville de Nantes et que vous avec un bac, choisissez 'tri extension' sinon 'tri normal'.",
			"descr_en": "If you live in the city of Nantes and you have a tray, choose 'extension sorting' in the other case 'normal sorting'."
			
		}, {
			"code":"niveau",
			"default": "niveau_enfant",
			"options": [{code:"niveau_enfant",descr:"niveau enfant"},{code:"niveau_normal",descr:"niveau normal"},{code:"niveau_expert",descr:"niveau expert"}],
			"descr": "Choisissez le niveau de difficulté.",
			"descr_en": "Choose the level."
		}
	]
};
