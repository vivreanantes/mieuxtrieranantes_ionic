var _theGoodSortingData = {
	"questions": [{
			"name": "ampoule_basse_conso",
			"descr": "Ampoule basse consommation",
			"descr_en": "Low-energy bulb",
			"advice": "On peut les ramener aux bornes des magasin bricolage et supermarché. Les déchèteries les acceptent aussi.",
			"advice_en": "They can be brought back to the terminals of the DIY store and supermarket. The deceptions accept them too.",
			"image": "ampoule_basse_conso.png",
			"reponses": ["retour", "decheterie"],
			"exclude_filters": []
		}, {
			"name": "appareil_photo",
			"descr": "Appareil photo",
			"descr_en": "Camera",
			"resume": "( HS )",
			"resume_en": "( out of use )",
			"advice": "Les appareils avec électricité doivent être ramenés en déchèteries. Les petits appareils électriques (25 cm max) peuvent être ramener aux magasins (de plus de 400m²) qui vendent des appareils électriquesans obligation d'achat.",
			"advice_en": "Appliances with electricity must be brought back to waste disposal. Small electrical appliances (25 cm max) can be brought back to stores (over 400 m²) that sell electrical appliances with no obligation to purchase.",
			"image": "appareil_photo.png",
			"reponses": ["decheterie", "retour"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "arrosoir",
			"descr": "Arrosoir",
			"descr_en": "Watering can (broken)",
			"resume": "( cassé )",
			"resume_en": "( broken )",
			"advice": "Seuls les  bouteilles et flacons sont récupérés (sauf si vous êtes en extension de tri). Les déchèteries les accepteront aussi.",
			"advice_en": "Only bottles and flasks are recovered (unless you are in sorting extension). The deceivers will also accept them",
			"image": "arrosoir.png",
			"reponses": ["poubelle", "decheterie"],
			"exclude_filters": ["tri_extension", "niveau_enfant", "niveau_expert"]
		}, {
			"name": "arrosoir_2",
			"descr": "Arrosoir",
			"descr_en": "Watering can (broken)",
			"resume": "( cassé )",
			"resume_en": "( broken )",
			"advice": "Tout le plastique se recycle en extension de tri.",
			"advice_en": "All plastic is recycled in sorting extension.",
			"image": "arrosoir.png",
			"reponses": ["jaune", "decheterie"],
			"exclude_filters": ["tri_normal", "niveau_enfant", "niveau_expert"]
		}, {
			"name": "ballon",
			"descr": "Ballon",
			"descr_en": "Ball",
			"resume": "( crevé )",
			"resume_en": "( burst )",
			"advice": "C'était poubelle ou déchèterie : seuls les  bouteilles et flacons sont récupérés (sauf si vous êtes en extension de tri).",
			"advice_en": "Only plastic bottles are collected within standard sorting",
			"image": "ballon.png",
			"reponses": ["poubelle", "decheterie"],
			"exclude_filters": ["tri_extension", "niveau_enfant", "niveau_expert"]
		}, {
			"name": "ballon_2",
			"descr": "Ballon",
			"descr_en": "Ball",
			"resume": "( crevé )",
			"resume_en": "( burst )",
			"advice": "C'était recyclage ou déchèterie : tout le plastique se recycle en extension de tri. Les déchèteries les accepteront aussi.",
			"advice_en": "It was recycling or waste disposal: all the plastic is recycled in sorting extension. The deceptions will accept them too.",
			"image": "ballon.png",
			"reponses": ["jaune", "decheterie"],
			"exclude_filters": ["tri_normal", "niveau_enfant", "niveau_expert"]
		}, {
			"name": "barquette_alu",
			"descr": "Barquette aluminium",
			"descr_en": "Aluminium container",
			"advice": "C'était recyclage : l'aluminium se recycle, sauf s'il ne représente pas assez de matériaux (papier alu, capsules...)",
			"advice_en": "It was recycling : aluminium is recycled, unless it does not represent enough material (alum.foil, capsules...)",
			"image": "barquette_alu.png",
			"reponses": ["jaune"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "batterie",
			"descr": "Batterie de voiture",
			"descr_en": "Car’s battery",
			"advice": "C'était déchèterie : ils sont considérés comme des produits toxiques.",
			"advice_en": "It was recycling center : a car’s battery is a hazardous and toxic product",
			"image": "batterie.png",
			"reponses": ["decheterie", "niveau_enfant"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "bombe_aerosol",
			"descr": "Bombe aérosol",
			"descr_en": "Aerosol",
			"advice": "C'était recyclage ou déchèterie : l'acier se recycle, le bouchon également.",
			"advice_en": "Recycling centre, Sorting : steel is recycled, top too",
			"image": "bombe_aerosol.png",
			"reponses": ["jaune", "decheterie"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "boite_a_oeufs",
			"descr": "Boite à œufs",
			"descr_en": "Eggs box",
			"resume": "(propre)",
			"resume_en": "(cleaned)",
			"advice": "Le carton propre est recyclable. On peut aussi le mettre au compostage.",
			"advice_en": "Clean cardboard is recyclable. It can also be composted.",
			"image": "boite_a_oeufs.png",
			"reponses": ["composteur", "jaune"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "boule_petanque.png",
			"descr": "Boule de pétanque",
			"descr_en": "Pétanque ball",
			"resume": "( fendue )",
			"resume_en": "( split )",
			"advice": "C'était recyclage ou déchèterie : l'acier se recycle.",
			"advice_en": "Recycling center or Sorting : steel is recycled",
			"image": "boule_petanque.png",
			"reponses": ["jaune", "decheterie"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "bouteille_huile",
			"descr": "Bouteille d'huile",
			"descr_en": "Oil bottle",
			"advice": "C'était recyclage : les bouteilles et flacons plastiques se recyclent (sauf s'ils contenaient des produits toxiques).",
			"advice_en": "It was Sorting : plastic bottles are recycled, unless they contain toxic products.",
			"image": "bouteille_huile.png",
			"reponses": ["jaune"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "bouchon_liege",
			"descr": "Bouchon de liège",
			"descr_en": "Cork",
			"advice": "Les bouchons de liège sont recyclables mais ne sont pas recyclés. Ils sont récupérés par des associations ('Action Cancer 44'...)",
			"advice_en": "It was reuse or bin : corks could be recycled but they are not they can be collected by charities such as Action Cancer 4",
			"image": "bouchon_liege.png",
			"reponses": ["poubelle", "reemploi"],
			"exclude_filters": ["niveau_enfant"]
		}, {
			"name": "brosse_a_dent",
			"descr": "Brosse à dent",
			"descr_en": "Toothbrush",
			"advice": "C'était poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			"advice_en": "It was bin : only plastic bottles are collected within standard sorting",
			"image": "brosse_a_dent.png",
			"reponses": ["poubelle"],
			"exclude_filters": ["tri_extension", "niveau_enfant", "niveau_expert"]
		}, {
			"name": "brosse_a_dent_2",
			"descr": "Brosse à dent",
			"descr_en": "Toothbrush",
			"advice": "C'était recyclage : tout le plastique se recycle en extension de tri.",
			"advice_en": "C'était recyclage : tout le plastique se recycle en extension de tri.",
			"image": "brosse_a_dent.png",
			"reponses": ["jaune"],
			"exclude_filters": ["tri_normal", "niveau_enfant", "niveau_expert"]
		}, {
			"name": "canette",
			"descr": "Canette de soda",
			"descr_en": "Soda can",
			"advice": "C'était recyclage : l'aluminium se recycle, sauf s'il ne représente pas assez de matériau (papier alu, capsules...).",
			"advice_en": "It was sorting : aluminium is recycled, unless it does not represent enough material (alum.foil, capsules...)",
			"image": "cannette.png",
			"reponses": ["jaune"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "cahier",
			"descr": "Cahier",
			"descr_en": "Exercise book",
			"advice": "C'était recyclage : le papier non souillé se recycle.",
			"advice_en": "It was : sorting : paper is recycled unless it is soiled.",
			"image": "cahier.png",
			"reponses": ["jaune"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "chaussures_propres",
			"descr": "Chaussures bon état",
			"descr_en": "Good condition shoes",
			"advice": "Elles peuvent être mis dans les conteneurs vêtement.",
			"advice_en": "It was reuse : good condition shoes can be brought to clothes containers",
			"image": "chaussures_propres.png",
			"reponses": ["reemploi"],
			"exclude_filters": []
		}, {
			"name": "chaussures_usees",
			"descr": "Chaussures usées",
			"descr_en": "Worn out shoes",
			"advice": "Direction poubelle : elles ne peuvent pas être mis dans les conteneurs vêtement.",
			"advice_en": "It was bin : worn out shoes cannot be brought to clothes containers",
			"image": "chaussures_usees.png",
			"reponses": ["poubelle"],
			"exclude_filters": ["niveau_enfant"]
		}, {
			"name": "cle_usb",
			"descr": "Clé USB",
			"descr_en": "USB key",
			"resume": "( cassée )",
			"resume_en": "( out of use )",
			"advice": "Les appareils avec électricité doivent être ramenés en déchèteries. Les petits appareils électriques (25 cm max) peuvent être ramener aux magasins (de plus de 400m²) qui vendent des appareils électrique sans obligation d'achat.",
			"advice_en": "Appliances with electricity must be brought back to waste disposal. Small electrical appliances (up to 25 cm) can be brought back to shops (over 400m²) that sell electrical appliances without obligation to purchase.",
			"image": "cle_usb.png",
			"reponses": ["decheterie", "retour"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "couvercle_bocal",
			"descr": "Couvercle bocal",
			"descr_en": "Jar lid",
			"resume": "( diamètre 3 cms  )",
			"resume_en": "( diameter 3 cms  )",
			"advice": "C'était poubelle : ce matériau pourrait être recyclé, mais il est trop petit (pas assez de matières).",
			"advice_en": "It was bin : this material could be recycled but it is too small (less than 6cm)",
			"image": "couvercle_bocal.png",
			"reponses": ["poubelle"],
			"exclude_filters": ["niveau_enfant"]
		}, {
			"name": "ciseaux_enfants",
			"descr": "Ciseaux enfant",
			"descr_en": "Children’s scissors",
			"advice": "Direction poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (et en extension de tri, il faut uniquement des objets en plastique)",
			"advice_en": "It was bin : only plastic bottles are collected within standard sorting (and in sorting expansion, products in plastics only are collected)",
			"image": "ciseaux_enfants.png",
			"reponses": ["poubelle"],
			"exclude_filters": ["niveau_enfant", "niveau_expert"]
		}, {
			"name": "dentifrice",
			"descr": "Dentifrice",
			"descr_en": "Tube of toothpaste",
			"advice": "Direction poubelle",
			"advice_en": "It was bin.",
			"image": "dentifrice.png",
			"reponses": ["poubelle"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "epeluchure_legumes",
			"descr": "Épluchure de légumes",
			"descr_en": "Vegetable peeling",
			"advice": "Direction composteur. Si vous en avez pas :( , ce sera poubelle. Les poules aussi aiment bien.",
			"advice_en": "Composter direction. If you do not have one :( it will be trash.The hens also like it.",
			"image": "epeluchure_legumes.png",
			"reponses": ["poubelle", "composteur"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "fer_a_repasser",
			"descr": "Fer à repasser",
			"descr_en": "Iron",
			"resume": "( HS )",
			"resume_en": "( out of use )",
			"advice": "Les appareils avec électricité doivent être ramenés en déchèteries. Les petits appareils électriques (25 cm max) peuvent être ramener aux magasins (de plus de 400m²) qui vendent des appareils électrique, sans obligation d'achat.",
			"advice_en": "It was Recycling centre or Back to store : appliances with electricity must be brought back to waste disposal. Small electrical appliances (up to 25 cm) can be brought back to stores (over 400m²) that sell electrical appliances, without obligation to purchase.",
			"image": "fer_a_repasser.png",
			"reponses": ["decheterie", "retour"],
			"exclude_filters": []
		}, {
			"name": "flacon_shampoing",
			"descr": "Flacon de shampoing",
			"descr_en": "Shampoo bottle",
			"advice": "C'était recyclage : les bouteilles et flacons plastiques se recyclent (sauf s'ils contenaient des produits toxiques).",
			"advice_en": "Recycling : plastic bottles and flasks are recycled (unless they contain toxic products",
			"image": "flacon_shampoing.png",
			"reponses": ["jaune"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "lampe",
			"descr": "Lampe",
			"descr_en": "Lamp",
			"advice": "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			"advice_en": "It was Recycling centre : fix lighting devices (i.e. other than torches) will be collected in stores as from August 15th, 2018",
			"image": "lampe.png",
			"reponses": ["decheterie", "retour"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "medicaments",
			"descr": "Médicaments",
			"descr_en": "Medicine",
			"advice": "Cétait retour au magasin : les pharmacies ont l'obligation de récupérer les anciens médicaments (ils seront incinérés). Vous pouvez mettre au recyclage notice et emballage.",
			"advice_en": "Back to store : cardboard wrapping and paper leaflet go to sorting yellow bag/bin",
			"image": "medicaments.png",
			"reponses": ["retour"],
			"exclude_filters": []
		}, {
			"name": "megot",
			"descr": "Mégot",
			"descr_en": "Cigarette butt",
			"advice": "Poubelle, tout simplement !",
			"advice_en": "Trash, simply !",
			"image": "megot.png",
			"reponses": ["poubelle"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "mouchoir_papier",
			"descr": "Mouchoir en papier",
			"descr_en": "Tissue",
			"resume": "( utilisé )",
			"resume_en": "( used )",
			"advice": "Direction poubelle ou composteur : le papier souillé ne se recycle pas.",
			"advice_en": "It was bin : soiled paper is not recycled",
			"image": "mouchoir_papier.png",
			"reponses": ["composteur", "poubelle"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "nounours",
			"descr": "Nounours",
			"descr_en": "Teddy bear",
			"advice": "Direction poubelle ou conteneurs vêtements. S'il est en bon état, vous pouvez le donner à une association, ou à votre enfant :) .",
			"advice_en": "Reuse or bin : To be thrown up to bin or clothes containers. If it is in good condition, you can give it to a charity or to your kid :)",
			"image": "nounours.png",
			"reponses": ["poubelle", "reemploi"],
			"exclude_filters": ["niveau_enfant", "niveau_expert"]
		}, {
			"name": "ordinateur_portable",
			"descr": "Ordinateur portable",
			"descr_en": "Laptop",
			"resume": "( non réparable )",
			"resume_en": "( irreparable )",
			"advice": "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			"advice_en": "Appliances with electricity must be brought back to waste disposal. We can give them back to the store if we buy a new equivalent device.",
			"image": "ordinateur_portable.png",
			"reponses": ["retour", "decheterie"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "paille",
			"descr": "Paille",
			"descr_en": "Plastics straw",
			"advice": "C'était poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			"advice_en": "It was Bin : nly plastic bottles are collected within standard sorting",
			"image": "paille.png",
			"reponses": ["poubelle"],
			"exclude_filters": ["tri_extension", "niveau_enfant", "niveau_expert"]
		}, {
			"name": "paille_2",
			"descr": "Paille",
			"descr_en": "Plastics straw",
			"advice": "C'était recyclage : tout le plastique se recycle en extension de tri",
			"advice_en": "It was recycling: all the plastic is recycled in sorting extension",
			"image": "paille.png",
			"reponses": ["jaune"],
			"exclude_filters": ["tri_normal", "niveau_enfant", "niveau_expert"]
		}, {
			"name": "palette_bois",
			"descr": "Palette en bois",
			"descr_en": "Wooden pallet",
			"advice": "C'était déchèterie.",
			"advice_en": "It was Recycling centre.",
			"image": "palette_bois.png",
			"reponses": ["reemploi", "decheterie"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "peau_banane",
			"descr": "Peau de banane",
			"descr_en": "Banana skin",
			"advice": "Direction composteur. Si vous en avez pas :( , ce sera poubelle.",
			"advice_en": "Composter : if you do not have one :(, it will be bin.",
			"image": "peau_banane.png",
			"reponses": ["composteur"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "pneu",
			"descr": "Pneu",
			"descr_en": "Tyre",
			"advice": "Direction déchèterie.",
			"advice_en": "It was Recycling centre or Back to store",
			"image": "pneu.png",
			"reponses": ["decheterie", "retour"],
			"exclude_filters": ["niveau_enfant"]
		}, {
			"name": "pot_peinture",
			"descr": "Pot de peinture",
			"descr_en": "Tin of mural painting",
			"resume": "( peinture murale )",
			"advice": "Direction déchèterie : ils sont considérés comme des produits toxiques.",
			"advice_en": "Recycling centre : painting is a hazardous and toxic product",
			"image": "pot_peinture.png",
			"reponses": ["decheterie"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "rasoir_jetable",
			"descr": "Rasoir jetable",
			"descr_en": "Disposable razor",
			"advice": "Direction poubelle : il n'y a que les bouteilles et flacons plastiques qui se recyclent (et en extension de tri, il faut uniquement des objets en plastique)",
			"advice_en": "Bin : only plastic bottles are collected within standard sorting (and in sorting expansion, products in plastics only are collected)",
			"image": "rasoir_jetable.png",
			"reponses": ["poubelle"],
			"exclude_filters": ["niveau_enfant", "niveau_expert"]
		}, {
			"name": "rouge_a_levre",
			"descr": "Rouge à lèvre",
			"descr_en": "Lipstick",
			"advice": "Direction poubelle.",
			"advice_en": "Bin",
			"image": "rouge_a_levre.png",
			"reponses": ["poubelle"],
			"exclude_filters": ["niveau_enfant", "niveau_expert"]
		}, {
			"name": "verre_a_boire",
			"descr": "Verre à boire",
			"descr_en": "Drinking glass",
			"resume_en": "( broken )",
			"advice": "Direction poubelle : seul le 'verre d'emballage' (bouteille, bocaux) peut être recyclé (on peut l'intégrer au calcin utilisé dans les fours verriers)",
			"advice_en": "Bin : wrapping glass only (bottles, jars) can be recycled",
			"image": "verre_a_boire.png",
			"reponses": ["poubelle"],
			"exclude_filters": ["niveau_expert"]
		}, {
			"name": "voiture_jouet_pile",
			"descr": "Voiture enfant avec LED",
			"descr_en": "Toy car with LED",
			"advice": "Les appareils avec électricité doivent être ramenés en déchèteries. On peut les redonner au magasin si on achète un appareil neuf équivalent.",
			"advice_en": "Recycling centre or Back to store : appliances with electricity must be brought back to waste disposal. We can give them back to the store if we buy a new equivalent device.",
			"image": "voiture_jouet_pile.png",
			"reponses": ["decheterie", "retour"],
			"exclude_filters": ["niveau_enfant"]
		}, {
			"name": "yaourt",
			"descr": "Yaourt",
			"descr_en": "Yogurt pot",
			"advice": "C'était recyclage : il n'y a que les bouteilles et flacons plastiques qui se recyclent (sauf si on est en extension de tri)",
			"advice_en": "Bin : only plastic bottles are collected within standard sorting",
			"image": "yaourt.png",
			"reponses": ["poubelle"],
			"exclude_filters": ["tri_extension", "niveau_enfant"]
		}, {
			"name": "yaourt_2",
			"descr": "Yaourt",
			"descr_en": "Yogurt pot",
			"advice": "C'était recyclage : en extension de tri, tout le plastique se recycle.",
			"advice_en": "It was recycling: in sorting extension, all the plastic is recycled.",
			"image": "yaourt.png",
			"reponses": ["jaune"],
			"exclude_filters": ["tri_normal", "niveau_enfant"]
		}
	],
	"reponses": [{
			"id": "composteur",
			"descr": "Composteur",
			"descr_en": "Composter",
			"image": "composteur.png",
			"exclude_filters": []
		}, {
			"id": "decheterie",
			"descr": "Déchèterie",
			"descr_en": "Recycling centre",
			"image": "decheterie.png",
			"exclude_filters": ["niveau_petits"]
		}, {
			"id": "jaune",
			"descr": "Recyclage",
			"descr_en": "Sorting",
			"resume": "bac/sac jaune, conten.",
			"resume_en": "yellow bag, conten.",
			"image": "recyclage.png",
			"exclude_filters": []
		}, {
			"id": "reemploi",
			"descr": "Réemploi",
			"descr_en": "Reuse",
			"resume": "assos, conten. vêtement...",
			"resume_en": "assos, clothes cont.",
			"image": "reemploi.png",
			"exclude_filters": ["niveau_petits"]
		}, {
			"id": "poubelle",
			"descr": "Poubelle",
			"descr_en": "Bin",
			"image": "bac_sac_bleu.png",
			"exclude_filters": []
		}, {
			"id": "retour",
			"descr": "Retour magasin",
			"descr_en": "Back to store",
			"resume": "pharmacie, brico...",
			"resume_en": "pharmacy, supermarket...",
			"image": "retour.png",
			"exclude_filters": ["niveau_petits"]
		}
	],
	"types_options": [{
			"code": "tri",
			"default": "tri_normal",
			"options": [{
					"code": "tri_normal",
					"descr": "tri normal",
					"descr_en": "normal sorting"
					
				}, {
					"code": "tri_extension",
					"descr": "tri extension",
					"descr_en": "extension sorting"
					
				}
			],
			"descr": "Si vous habitez la ville de Nantes et que vous avec un bac, choisissez 'tri extension' sinon 'tri normal'.",
			"descr_en": "If you live in the city of Nantes and you have a tray, choose 'extension sorting' in the other case 'normal sorting'."

		}, {
			"code": "niveau",
			"default": "niveau_enfant",
			"options": [{
					"code": "niveau_enfant",
					"descr": "enfant",
					"descr_en": "children"
				}, {
					"code": "niveau_normal",
					"descr": "niveau normal",
					"descr_en": "normal"
				}, {
					"code": "niveau_expert",
					"descr": "niveau expert",
					"descr_en": "expert"
				}
			],
			"descr": "Choisissez le niveau de difficulté.",
			"descr_en": "Choose the level."
		}
	]
};
