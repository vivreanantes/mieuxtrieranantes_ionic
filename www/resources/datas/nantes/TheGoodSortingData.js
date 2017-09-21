var _theGoodSortingData = {
	questions: [{
			name: "ampoule_basse_conso",
			descr: "Ampoule basse consommation",
			advice: "On peut les ramener aux bornes des magasin bricolage et supermarché. Les déchèteries les acceptent aussi.",
			image: "ampoule_basse_conso.png",
			reponses: ["retour", "decheterie"],
			filters: ["niveau_expert"]
		}, {
			name: "appareil_photo",
			descr: "Appareil photo",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "appareil_photo.png",
			reponses: ["decheterie", "retour"],
			filters: ["niveau_expert"]
		}, {
			name: "arrosoir",
			descr: "Arrosoir",
			advice: "Seuls les  bouteilles et flacons sont récupérés (sauf si vous êtes en extension de tri). Les déchèteries les accepteront aussi.",
			image: "arrosoir.png",
			reponses: ["poubelle", "decheterie"],
			filters: ["tri_extension", "niveau_enfant", "niveau_expert"]
		}, {
			name: "arrosoir_2",
			descr: "Arrosoir",
			advice: "Tout le plastique se recycle en extension de tri.",
			image: "arrosoir.png",
			reponses: ["jaune", "decheterie"],
			filters: ["tri_normal", "niveau_enfant", "niveau_expert"]
		}, {
			name: "ballon",
			descr: "Ballon",
			advice: "Seuls les  bouteilles et flacons sont récupérés (sauf si vous êtes en extension de tri). Les déchèteries les accepteront aussi.",
			image: "ballon.png",
			reponses: ["poubelle", "decheterie"],
			filters: ["tri_extension", "niveau_enfant", "niveau_expert"]
		}, {
			name: "ballon_2",
			descr: "Ballon",
			advice: "Tout le plastique se recycle en extension de tri. Les déchèteries les accepteront aussi.",
			image: "ballon.png",
			reponses: ["jaune", "decheterie"],
			filters: ["tri_normal", "niveau_enfant", "niveau_expert"]
		}, {
			name: "barquette_alu",
			descr: "Barquette aluminium",
			advice: "L'aluminium se recycle. Sauf s'il ne représente pas assez de matériaux (papier alu, capsules...)",
			image: "barquette_alu",
			reponses: ["jaune"],
			filters: ["niveau_expert"]
		}, {
			name: "batterie",
			descr: "Batterie de voiture",
			advice: "Ils sont considérés comme des produits toxiques : a amener en déchèterie",
			image: "batterie.png",
			reponses: ["decheterie", "niveau_enfant"],
			filters: ["niveau_expert"]
		}, {
			name: "bombe_aerosol",
			descr: "Bombe aérosol",
			advice: "L'acier se recycle. Le bouchon également.",
			image: "bombe_aerosol.png",
			reponses: ["jaune", "decheterie"],
			filters: ["niveau_expert"]
		}, {
			name: "boite_a_oeufs",
			descr_comp: "(propre)",
			descr: "Boite à œufs",
			advice: "Le carton propre est recyclable. On peut aussi le mettre au compostage.",
			image: "boite_a_oeufs.png",
			reponses: ["composteur", "jaune"],
			filters: ["niveau_expert"]
		}, {
			name: "boule_petanque.png",
			descr: "Boule de pétanque",
			advice: "L'acier se recycle : conteneur emballage (métal) ou déchèterie.",
			image: "boule_petanque.png",
			reponses: ["jaune", "decheterie"],
			filters: ["niveau_expert"]
		}, {
			name: "bouteille_huile",
			descr: "Bouteille d'huile",
			advice: "Les bouteilles et flacons plastiques se recyclent (sauf s'ils contenaient des produits toxiques).",
			image: "bouteille_huile.png",
			reponses: ["jaune"],
			filters: ["niveau_expert"]
		}, {
			name: "bouchon_liege",
			descr: "Bouchon de liège",
			advice: "Les bouchons de liège sont recyclables mais ne sont pas recyclés. Ils sont récupérés par des associations ('Action Cancer 44'...)",
			image: "bouchon_liege.png",
			reponses: ["poubelle", "reemploi"],
			filters: ["niveau_enfant", "niveau_expert"]
		}, {
			name: "brosse_a_dent",
			descr: "Brosse à dent",
			advice: "Il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			image: "brosse_a_dent.png",
			reponses: ["poubelle"],
			filters: ["tri_extension", "niveau_enfant", "niveau_expert"]
		}, {
			name: "brosse_a_dent_2",
			descr: "Brosse à dent",
			advice: "Tout le plastique se recycle en extension de tri.",
			image: "brosse_a_dent.png",
			reponses: ["jaune"],
			filters: ["tri_normal", "niveau_enfant", "niveau_expert"]
		}, {
			name: "cannette",
			descr: "Cannette de soda",
			advice: "L'aluminium se recycle (sauf s'il est trop petit).",
			image: "cannette.png",
			reponses: ["jaune"],
			filters: ["niveau_expert"]
		}, {
			name: "cahier",
			descr: "Cahier",
			advice: "Le papier se recycle.",
			image: "cahier.png",
			reponses: ["jaune"],
			filters: ["niveau_expert"]
		}, {
			name: "chaussures_propres",
			descr: "Chaussures bon état",
			advice: "Elles peuvent être mis dans les conteneurs vêtement.",
			image: "chaussures_propres.png",
			reponses: ["reeemploi"],
			filters: []
		}, {
			name: "chaussures_usees",
			descr: "Chaussures usées",
			advice: "Direction poubelle. Elles ne peuvent pas être mis dans les conteneurs vêtement",
			image: "chaussures_usees.png",
			reponses: ["poubelle"],
			filters: ["niveau_enfant"]
		}, {
			name: "cle_usb",
			descr: "Clé USB",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "cle_usb.png",
			reponses: ["decheterie", "retour"],
			filters: ["niveau_expert"]
		}, {
			name: "couvercle_bocal",
			descr_comp: "( diamètre 3 cms  )",
			descr: "Couvercle bocal",
			advice: "Ce matériau pourrait être récyclé, mais étant trop petit (pas assez de matières) il doit être mis avec les ordures ménagères.",
			image: "couvercle_bocal.png",
			reponses: ["poubelle"],
			filters: ["niveau_enfant"]
		}, {
			name: "ciseaux_enfants",
			descr: "Ciseaux enfant",
			advice: "Direction poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (et en extension de tri, il faut uniquement des objets en plastique)",
			image: "ciseaux_enfants.png",
			reponses: ["poubelle"],
			filters: ["niveau_enfant", "niveau_expert"]
		}, {
			name: "dentifrice",
			descr: "Dentifrice",
			advice: "Direction poubelle",
			image: "dentifrice.png",
			reponses: ["poubelle"],
			filters: ["niveau_expert"]
		}, {
			name: "epeluchure_legumes",
			descr: "Épluchure de légumes",
			advice: "Direction composteur. Si vous en avez pas :( , ce sera poubelle.",
			image: "epeluchure_legumes.png",
			reponses: ["poubelle", "composteur"],
			filters: ["niveau_expert"]
		}, {
			name: "fer_a_repasser",
			descr: "Fer à repasser",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "fer_a_repasser.png",
			reponses: ["decheterie", "retour"],
			filters: ["niveau_expert"]
		}, {
			name: "flacon_shampoing",
			descr: "Flacon de shampoing",
			advice: "Les bouteilles et flacons plastiques se recyclent (sauf s'ils contenaient des produits toxiques).",
			image: "flacon_shampoing.png",
			reponses: ["jaune"],
			filters: ["niveau_expert"]
		}, {
			name: "lampe",
			descr: "Lampe",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "lampe.png",
			reponses: ["decheterie", "retour"],
			filters: ["niveau_expert"]
		}, {
			name: "medicaments",
			descr: "Médicaments",
			advice: "Les pharmacies ont l'obligation de récupérer les anciens médicaments. Ils seront incinérés. Vous pouvez mettre au recyclage notice et emballage.",
			image: "medicaments.png",
			reponses: ["retour"],
			filters: ["niveau_expert"]
		}, {
			name: "megot",
			descr: "Mégot",
			advice: "Poubelle, tout simplement !",
			image: "megot.png",
			reponses: ["poubelle"],
			filters: ["niveau_expert"]
		}, {
			name: "mouchoir_papier",
			descr: "Mouchoir en papier",
			advice: "Le papier souillé ne se recycle pas.",
			image: "mouchoir_papier.png",
			reponses: ["poubelle"],
			filters: ["niveau_expert"]
		}, {
			name: "nounours",
			descr: "Nounours",
			advice: "Direction poubelle ou conteneurs vêtements. S'il est en bon état, vous pouvez le donner à une association",
			image: "nounours.png",
			reponses: ["poubelle", "reemploi"],
			filters: ["niveau_enfant", "niveau_expert"]
		}, {
			name: "ordinateur_portable",
			descr: "Ordinateur portable",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "ordinateur_portable.jpg",
			reponses: ["retour", "decheterie"],
			filters: ["niveau_expert"]
		}, {
			name: "paille",
			descr: "Paille",
			advice: "Il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			image: "paille.png",
			reponses: ["poubelle"],
			filters: ["tri_extension", "niveau_enfant", "niveau_expert"]
		}, {
			name: "paille_2",
			descr: "Paille",
			advice: "Tout le plastique se recycle en extension de tri",
			image: "paille.png",
			reponses: ["jaune"],
			filters: ["niveau_enfant", "niveau_enfant", "niveau_expert"]
		}, {
			name: "palette_bois",
			descr: "Palette en bois",
			advice: "C'était déchèterie.",
			image: "palette_bois.png",
			reponses: ["decheterie"],
			filters: ["niveau_expert"]
		}, {
			name: "peau_banane",
			descr: "Peau de banane",
			advice: "Direction composteur. Si vous en avez pas :( , ce sera poubelle.",
			image: "peau_banane.png",
			reponses: ["composteur"],
			filters: ["niveau_expert"]
		}, {
			name: "pneu",
			descr: "Pneu",
			advice: "Direction déchèterie.",
			image: "pneu.png",
			reponses: ["decheterie"],
			filters: ["niveau_enfant", "niveau_expert"]
		}, {
			name: "pot_peinture",
			descr: "Pot de peinture",
			descr_comp: "( peinture murale )",
			advice: "Ils sont considérés comme des produits toxiques.",
			image: "pot_peinture.png",
			reponses: ["decheterie"],
			filters: ["niveau_expert"]
		}, {
			name: "rasoir_jetable",
			descr: "Rasoir jetable",
			advice: "Direction poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (et en extension de tri, il faut uniquement des objets en plastique)",
			image: "rasoir_jetable.png",
			reponses: ["poubelle"],
			filters: ["niveau_enfant", "niveau_expert"]
		}, {
			name: "rouge_a_levre",
			descr: "Rouge à lèvre",
			advice: "Direction poubelle",
			image: "rouge_a_levre.png",
			reponses: ["poubelle"],
			filters: ["niveau_enfant", "niveau_expert"]
		}, {
			name: "verre_a_boire",
			descr: "Verre à boire",
			advice: "Direction poubelle : seul le 'verre d'emballage' (bouteille, bocaux) peut être recyclé (on peut l'intégrer au calcin utilisé dans les fours verriers)",
			image: "verre_a_boire.png",
			reponses: ["poubelle"],
			filters: ["niveau_expert"]
		}, {
			name: "voiture_jouet_pile",
			descr: "Voiture enfant avec LED",
			advice: "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			image: "voiture_jouet_pile.png",
			reponses: ["decheterie", "retour"],
			filters: ["niveau_enfant", "niveau_expert"]
		}, {
			name: "yaourt",
			descr: "Yaourt",
			advice: "En extension de tri, tout le plastique se recycle.",
			image: "yaourt.png",
			reponses: ["poubelle"],
			filters: ["tri_extension", "niveau_enfant", "niveau_expert"]
		}, {
			name: "yaourt_2",
			descr: "Yaourt",
			advice: "Il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			image: "yaourt.png",
			reponses: ["jaune"],
			filters: ["tri_normal", "niveau_enfant", "niveau_expert"]
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
