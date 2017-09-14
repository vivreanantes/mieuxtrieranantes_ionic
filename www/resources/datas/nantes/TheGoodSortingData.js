var _theGoodSortingData = {
	questions: [{
			name: "ampoule_basse_conso",
			descr: "Ampoule basse consommation",
			advice: "On peut les ramener aux bornes des magasin bricolage et supermarché. Les déchèteries les acceptent aussi.",
			image: "ampoule_basse_conso.png",
			reponses: ["retour", "decheterie"]
		}, {
			name: "appareil_photo",
			descr: "Appareil photo",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "appareil_photo.png",
			reponses: ["decheterie", "retour"]
		}, {
			name: "arrosoir",
			descr: "Arrosoir",
			advice: "Seuls les  bouteilles et flacons sont récupérés (sauf si vous êtes en extension de tri). Les déchèteries les accepteront aussi.",
			image: "arrosoir.png",
			reponses: ["poubelle", "decheterie"],
			reponses_extension: ["jaune", "decheterie"]
		}, {
			name: "ballon",
			descr: "Ballon",
			advice: "Seuls les  bouteilles et flacons sont récupérés (sauf si vous êtes en extension de tri). Les déchèteries les accepteront aussi.",
			image: "ballon.png",
			reponses: ["poubelle", "decheterie"],
			reponses_extension: ["jaune", "decheterie"]
		}, {
			name: "batterie",
			descr: "Batterie de voiture",
			advice: "Ils sont considérés comme des produits toxiques : a amener en déchèterie",
			image: "batterie.png",
			reponses: ["decheterie"]
		}, {
			name: "boite_a_oeufs",
			descr_comp: "(propre)",
			descr: "Boite à œufs",
			advice: "Le carton propre est recyclable. On peut aussi le mettre au compostage.",
			image: "boite_a_oeufs.png",
			reponses: ["composteur", "jaune"]
		}, {
			name: "boule_petanque.png",
			descr: "Boule de pétanque",
			advice: "L'acier se recycle : conteneur emballage (métal) ou déchèterie.",
			image: "boule_petanque.png",
			reponses: ["jaune", "decheterie"]
		}, {
			name: "bouteille_huile",
			descr: "Bouteille d'huile",
			advice: "Les bouteilles et flacons plastiques se recyclent (sauf s'ils contenaient des produits toxiques).",
			image: "bouteille_huile.png",
			reponses: ["jaune"]
		}, {
			name: "brosse_a_dent",
			descr: "Brosse à dent",
			advice: "Il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			image: "brosse_a_dent.png",
			reponses: ["poubelle"],
			reponses_extension: ["jaune"]
		}, {
			name: "cannette",
			descr: "Cannette de soda",
			advice: "L'aluminium se recycle (sauf s'il est trop petit).",
			image: "cannette.png",
			reponses: ["jaune"]
		}, {
			name: "ciseaux_enfants",
			descr: "Ciseaux enfant",
			advice: "Direction poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (et en extension de tri, il faut uniquement des objets en plastique)",
			image: "ciseaux_enfants.png",
			reponses: ["poubelle"]
		}, {
			name: "dentifrice",
			descr: "Dentifrice",
			advice: "Il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			image: "dentifrice.png",
			reponses: ["poubelle"],
			reponses_extension: ["jaune"]
		}, {
			name: "epeluchure_legumes",
			descr: "Épluchure de légumes",
			advice: "Direction composteur. Si vous en avez pas :( , ce sera poubelle.",
			image: "epeluchure_legumes.png",
			reponses: ["poubelle", "composteur"]
		}, {
			name: "fer_a_repasser",
			descr: "Fer à repasser",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "fer_a_repasser.png",
			reponses: ["decheterie", "retour"]
		}, {
			name: "flacon_shampoing",
			descr: "Flacon de shampoing",
			advice: "Les bouteilles et flacons plastiques se recyclent (sauf s'ils contenaient des produits toxiques).",
			image: "flacon_shampoing.png",
			reponses: ["jaune"],
			reponses_extension: ["jaune"]
		}, {
			name: "journal",
			descr: "Journal",
			advice: "Le papier se recycle. On peut aussi le mettre au composteur.",
			image: "journal.png",
			reponses: ["composteur", "jaune"]
		}, {
			name: "lampe",
			descr: "Lampe",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "lampe.png",
			reponses: ["decheterie", "retour"]
		}, {
			name: "medicaments",
			descr: "Médicaments",
			advice: "Les pharmacies ont l'obligation de récupérer les anciens médicaments. Ils seront incinérés. Vous pouvez mettre au recyclage notice et emballage.",
			image: "medicaments.png",
			reponses: ["retour"]
		}, {
			name: "megot",
			descr: "Mégot",
			advice: "Poubelle, tout simplement !",
			image: "megot.png",
			reponses: ["poubelle"]
		}, {
			name: "mouchoir_papier",
			descr: "Mouchoir en papier",
			advice: "Le papier souillé ne se recycle pas.",
			image: "mouchoir_papier.png",
			reponses: ["poubelle"]
		}, {
			name: "nounours",
			descr: "Nounours",
			advice: "Direction poubelle ou conteneurs vêtements. S'il est en bon état, vous pouvez le donner à une association",
			image: "nounours.png",
			reponses: ["poubelle", "reemploi"]
		}, {
			name: "ordinateur_portable",
			descr: "Ordinateur portable",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "ordinateur_portable.jpg",
			reponses: ["retour", "decheterie"]
		}, {
			name: "paille",
			descr: "Paille",
			advice: "Il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			image: "paille.png",
			reponses: ["poubelle"],
			reponses_extension: ["jaune"]
		}, {
			name: "palette_bois",
			descr: "Palette en bois",
			advice: "C'était déchèterie.",
			image: "palette_bois.png",
			reponses: ["decheterie"]
		}, {
			name: "peau_banane",
			descr: "Peau de banane",
			advice: "Direction composteur. Si vous en avez pas :( , ce sera poubelle.",
			image: "peau_banane.png",
			reponses: ["composteur"]
		}, {
			name: "pneu",
			descr: "Pneu",
			advice: "Direction déchèterie.",
			image: "pneu.png",
			reponses: ["decheterie"]
		}, {
			name: "pot_peinture",
			descr: "Pot de peinture",
			descr_comp: "( peinture murale )",
			advice: "Ils sont considérés comme des produits toxiques.",
			image: "pot_peinture.png",
			reponses: ["decheterie"]
		}, {
			name: "rasoir_jetable",
			descr: "Rasoir jetable",
			advice: "Direction poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (et en extension de tri, il faut uniquement des objets en plastique)",
			image: "rasoir_jetable.png",
			reponses: ["poubelle"]
		}, {
			name: "rouge_a_levre",
			descr: "Rouge à lèvre",
			advice: "Direction poubelle",
			image: "rouge_a_levre.png",
			reponses: ["poubelle"]
		}, {
			name: "yaourt",
			descr: "Yaourt",
			advice: "Il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			image: "yaourt.png",
			reponses: ["poubelle"],
			reponses_extension: ["jaune"]
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
			descr_comp: 'Bac-sac  jaune, conteneurs',
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
			"default": "tri_normal",
			"other": ["tri_extension"],
			"descr": "si vous habitez la ville de Nantes et que vous avec un bac, choisissez 'tri_extension' sinon 'tri_normal'"
		}, {
			"default": "niveau_enfant",
			"other": ["niveau_normal", "niveau_expert"],
			"descr": "niveau_enfant ou niveau_expert"
		}
	]
};
