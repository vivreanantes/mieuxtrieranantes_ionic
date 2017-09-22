var _theGoodSortingData = {
	questions: [{
			name: "ampoule_basse_conso",
			descr: "Ampoule basse consommation",
			advice: "On peut les ramener aux bornes des magasin bricolage et supermarché. Les déchèteries les acceptent aussi.",
			image: "ampoule_basse_conso.png",
			reponses: ["retour", "decheterie"],
			exclude_filters: []
		}, {
			name: "appareil_photo",
			descr: "Appareil photo",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "appareil_photo.png",
			reponses: ["decheterie", "retour"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "arrosoir",
			descr: "Arrosoir",
			advice: "Seuls les  bouteilles et flacons sont récupérés (sauf si vous êtes en extension de tri). Les déchèteries les accepteront aussi.",
			image: "arrosoir.png",
			reponses: ["poubelle", "decheterie"],
			exclude_filters: ["tri extension", "niveau enfant", "niveau expert"]
		}, {
			name: "arrosoir_2",
			descr: "Arrosoir",
			advice: "Tout le plastique se recycle en extension de tri.",
			image: "arrosoir.png",
			reponses: ["jaune", "decheterie"],
			exclude_filters: ["tri normal", "niveau enfant", "niveau expert"]
		}, {
			name: "ballon",
			descr: "Ballon",
			advice: "C'était poubelle ou déchèterie : seuls les  bouteilles et flacons sont récupérés (sauf si vous êtes en extension de tri).",
			image: "ballon.png",
			reponses: ["poubelle", "decheterie"],
			exclude_filters: ["tri extension", "niveau enfant", "niveau expert"]
		}, {
			name: "ballon_2",
			descr: "Ballon",
			advice: "C'était recyclage ou déchèterie : tout le plastique se recycle en extension de tri. Les déchèteries les accepteront aussi.",
			image: "ballon.png",
			reponses: ["jaune", "decheterie"],
			exclude_filters: ["tri normal", "niveau enfant", "niveau expert"]
		}, {
			name: "barquette_alu",
			descr: "Barquette aluminium",
			advice: "C'était recyclage : l'aluminium se recycle, sauf s'il ne représente pas assez de matériaux (papier alu, capsules...)",
			image: "barquette_alu.png",
			reponses: ["jaune"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "batterie",
			descr: "Batterie de voiture",
			advice: "C'était déchèterie : ils sont considérés comme des produits toxiques.",
			image: "batterie.png",
			reponses: ["decheterie", "niveau enfant"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "bombe_aerosol",
			descr: "Bombe aérosol",
			advice: "C'était recyclage ou déchèterie : l'acier se recycle, le bouchon également.",
			image: "bombe_aerosol.png",
			reponses: ["jaune", "decheterie"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "boite_a_oeufs",
			descr_comp: "(propre)",
			descr: "Boite à œufs",
			advice: "Le carton propre est recyclable. On peut aussi le mettre au compostage.",
			image: "boite_a_oeufs.png",
			reponses: ["composteur", "jaune"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "boule_petanque.png",
			descr: "Boule de pétanque",
			advice: "C'était recyclage ou déchèterie : l'acier se recycle.",
			image: "boule_petanque.png",
			reponses: ["jaune", "decheterie"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "bouteille_huile",
			descr: "Bouteille d'huile",
			advice: "C'était recyclage : les bouteilles et flacons plastiques se recyclent (sauf s'ils contenaient des produits toxiques).",
			image: "bouteille_huile.png",
			reponses: ["jaune"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "bouchon_liege",
			descr: "Bouchon de liège",
			advice: "Les bouchons de liège sont recyclables mais ne sont pas recyclés. Ils sont récupérés par des associations ('Action Cancer 44'...)",
			image: "bouchon_liege.png",
			reponses: ["poubelle", "reemploi"],
			exclude_filters: ["niveau enfant"]
		}, {
			name: "brosse_a_dent",
			descr: "Brosse à dent",
			advice: "C'était poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			image: "brosse_a_dent.png",
			reponses: ["poubelle"],
			exclude_filters: ["tri extension", "niveau enfant", "niveau expert"]
		}, {
			name: "brosse_a_dent_2",
			descr: "Brosse à dent",
			advice: "C'était recyclage : tout le plastique se recycle en extension de tri.",
			image: "brosse_a_dent.png",
			reponses: ["jaune"],
			exclude_filters: ["tri normal", "niveau enfant", "niveau expert"]
		}, {
			name: "cannette",
			descr: "Cannette de soda",
			advice: "C'était recyclage : l'aluminium se recycle (sauf s'il est trop petit).",
			image: "cannette.png",
			reponses: ["jaune"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "cahier",
			descr: "Cahier",
			advice: "C'était recyclage : le papier propre se recycle.",
			image: "cahier.png",
			reponses: ["jaune"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "chaussures_propres",
			descr: "Chaussures bon état",
			advice: "Elles peuvent être mis dans les conteneurs vêtement.",
			image: "chaussures_propres.png",
			reponses: ["reeemploi"],
			exclude_filters: []
		}, {
			name: "chaussures_usees",
			descr: "Chaussures usées",
			advice: "Direction poubelle : elles ne peuvent pas être mis dans les conteneurs vêtement.",
			image: "chaussures_usees.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau enfant"]
		}, {
			name: "cle_usb",
			descr: "Clé USB",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "cle_usb.png",
			reponses: ["decheterie", "retour"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "couvercle_bocal",
			descr_comp: "( diamètre 3 cms  )",
			descr: "Couvercle bocal",
			advice: "C'était poubelle : ce matériau pourrait être recyclé, mais il est trop petit (pas assez de matières).",
			image: "couvercle_bocal.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau enfant"]
		}, {
			name: "ciseaux_enfants",
			descr: "Ciseaux enfant",
			advice: "Direction poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (et en extension de tri, il faut uniquement des objets en plastique)",
			image: "ciseaux_enfants.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau enfant", "niveau expert"]
		}, {
			name: "dentifrice",
			descr: "Dentifrice",
			advice: "Direction poubelle",
			image: "dentifrice.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "epeluchure_legumes",
			descr: "Épluchure de légumes",
			advice: "Direction composteur. Si vous en avez pas :( , ce sera poubelle.",
			image: "epeluchure_legumes.png",
			reponses: ["poubelle", "composteur"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "fer_a_repasser",
			descr: "Fer à repasser",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "fer_a_repasser.png",
			reponses: ["decheterie", "retour"],
			exclude_filters: []
		}, {
			name: "flacon_shampoing",
			descr: "Flacon de shampoing",
			advice: "C'était recyclage : les bouteilles et flacons plastiques se recyclent (sauf s'ils contenaient des produits toxiques).",
			image: "flacon_shampoing.png",
			reponses: ["jaune"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "lampe",
			descr: "Lampe",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "lampe.png",
			reponses: ["decheterie", "retour"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "medicaments",
			descr: "Médicaments",
			advice: "Cétait retour au magasin : les pharmacies ont l'obligation de récupérer les anciens médicaments (ils seront incinérés). Vous pouvez mettre au recyclage notice et emballage.",
			image: "medicaments.png",
			reponses: ["retour"],
			exclude_filters: []
		}, {
			name: "megot",
			descr: "Mégot",
			advice: "Poubelle, tout simplement !",
			image: "megot.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "mouchoir_papier",
			descr: "Mouchoir en papier",
			advice: "Direction poubelle ou composteur : le papier souillé ne se recycle pas.",
			image: "mouchoir_papier.png",
			reponses: ["composteur", "poubelle"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "nounours",
			descr: "Nounours",
			advice: "Direction poubelle ou conteneurs vêtements. S'il est en bon état, vous pouvez le donner à une association, ou à votre enfant :) .",
			image: "nounours.png",
			reponses: ["poubelle", "reemploi"],
			exclude_filters: ["niveau enfant", "niveau expert"]
		}, {
			name: "ordinateur_portable",
			descr: "Ordinateur portable",
			descr_comp: "( non réparable )",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "ordinateur_portable.jpg",
			reponses: ["retour", "decheterie"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "paille",
			descr: "Paille",
			advice: "C'était poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			image: "paille.png",
			reponses: ["poubelle"],
			exclude_filters: ["tri extension", "niveau enfant", "niveau expert"]
		}, {
			name: "paille_2",
			descr: "Paille",
			advice: "C'était recyclage : tout le plastique se recycle en extension de tri",
			image: "paille.png",
			reponses: ["jaune"],
			exclude_filters: ["tri normal", "niveau enfant", "niveau expert"]
		}, {
			name: "palette_bois",
			descr: "Palette en bois",
			advice: "C'était déchèterie.",
			image: "palette_bois.png",
			reponses: ["decheterie"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "peau_banane",
			descr: "Peau de banane",
			advice: "Direction composteur. Si vous en avez pas :( , ce sera poubelle.",
			image: "peau_banane.png",
			reponses: ["composteur"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "pneu",
			descr: "Pneu",
			advice: "Direction déchèterie.",
			image: "pneu.png",
			reponses: ["decheterie"],
			exclude_filters: ["niveau enfant"]
		}, {
			name: "pot_peinture",
			descr: "Pot de peinture",
			descr_comp: "( peinture murale )",
			advice: "Direction déchèterie : ils sont considérés comme des produits toxiques.",
			image: "pot_peinture.png",
			reponses: ["decheterie"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "rasoir_jetable",
			descr: "Rasoir jetable",
			advice: "Direction poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (et en extension de tri, il faut uniquement des objets en plastique)",
			image: "rasoir_jetable.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau enfant", "niveau expert"]
		}, {
			name: "rouge_a_levre",
			descr: "Rouge à lèvre",
			advice: "Direction poubelle.",
			image: "rouge_a_levre.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau enfant", "niveau expert"]
		}, {
			name: "verre_a_boire",
			descr: "Verre à boire",
			advice: "Direction poubelle : seul le 'verre d'emballage' (bouteille, bocaux) peut être recyclé (on peut l'intégrer au calcin utilisé dans les fours verriers)",
			image: "verre_a_boire.png",
			reponses: ["poubelle"],
			exclude_filters: ["niveau expert"]
		}, {
			name: "voiture_jouet_pile",
			descr: "Voiture enfant avec LED",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "voiture_jouet_pile.png",
			reponses: ["decheterie", "retour"],
			exclude_filters: ["niveau enfant"]
		}, {
			name: "yaourt",
			descr: "Yaourt",
			advice: "C'était recyclage : il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			image: "yaourt.png",
			reponses: ["poubelle"],
			exclude_filters: ["tri extension", "niveau enfant"]
		}, {
			name: "yaourt_2",
			descr: "Yaourt",
			advice: "C'était recyclage : en extension de tri, tout le plastique se recycle.",
			image: "yaourt.png",
			reponses: ["jaune"],
			exclude_filters: ["tri normal", "niveau enfant"]
		}
	],
	reponses: [{
			id: "composteur",
			descr: 'Composteur',
			image: "composteur.png"
		}, {
			id: "decheterie",
			descr: 'Déchèterie',
			image: "decheterie.png"
		}, {
			id: "jaune",
			descr: 'Recyclage',
			descr_comp: 'Bac sac jaune, conteneurs',
			image: "recyclage.png"
		}, {
			id: "reemploi",
			descr: 'Réemploi',
			descr_comp: 'Associations, Conteneur vêtement, Collecteur bouchons',
			image: "reemploi.png"
		}, {
			id: "poubelle",
			descr: 'Poubelle',
			image: "bac_sac_bleu.png"
		}, {
			id: "retour",
			descr: 'Retour magasin',
			descr_comp: 'Pharmacie, Magasin bricolage, Supermarché',
			image: "retour.png"
		}
	],
	types_questions: [{
			"default": "tri normal",
			"other": ["tri extension"],
			"descr": "Si vous habitez la ville de Nantes et que vous avec un bac, choisissez 'tri extension' sinon 'tri normal'."
		}, {
			"default": "niveau enfant",
			"other": ["niveau normal", "niveau expert"],
			"descr": "Choisissez le niveau de difficulté."
		}
	]
};
