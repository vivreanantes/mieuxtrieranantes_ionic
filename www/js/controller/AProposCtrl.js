/* DOCUMENTATION */

angular.module('starter.controllers')
.controller('AProposCtrl', function($scope, $stateParams) {

	//- RM-PA-VERSAPPLI_01 : On modifie la version de l'application en modifiant certains fichiers de configuration.
	$scope.version = "2.14 - MAJ Structures";
	$scope.new_in_the_version = "- Mise à jour des données selon des structures : Student'Shop, Ding-Fring, Boites Utiles, S'Pop Affaires, Nantes écologie l'air livre, Arcade, Solilab, Charlotte et Compagnie.<br/>-  Conseils recupération batteries et tri papier beurre.<br/><br/>Contenu de la version 2.13 - MAJ Open-data : - Mise à jour des données selon les actualisations des données Open-data : colonnes aériennes, jours de collecte, horaires Trisacs, compostri.<br/>- Plus d'infos sur les initiatives locales. <br/><br/>Contenu de la version 2.12 - Le quiz est amélioré (questions plus précises) et fonctionne en anglais.<br/>- Ajout article sur Sakaïdé<br/><br/>Contenu de la version 2.11 - initiatives locales :<br/>- amélioration des articles 'Découvrir' des initiatives locales sur la réduction des déchets : Bout' à bout', Solution recyclage, Oasis environnement, J'aime tes Bocaux et tes sacs aussi, Plus2Vers.<br/>- amélioration paramétrage : on affiche l'adresse configurée et le jour de collecte<br/>- amélioration du quiz : rappel des réponses à la fin.<br/>- ajout d'une page 'signaler erreur'.<br/>- 30 nouveaux lieux de vente en vrac sur la carte : magasins démarche réduction déchets par Oasis Environnement, lieux utilisation bouteilles consignées par Bout' à bout'<br/>- changements horaires ou descriptif 'Lieux' : Arbres, Oser Forêt Vivante, Green Shopper, Ressourcerie de l'ile<br/>- modifications données Open-Data Nantes : localisation des colonnes enterrées et aériennes de Nantes Métropole<br/>- déchet : principe du 1 pour 0 (reprise en magasin), ajout déchet diamant.<br/>";


});
