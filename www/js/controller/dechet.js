/* DECHETS */

angular.module('starter.controllers')
.controller('DechetCatCtrl', 
            function($scope) {
    
  // TEMP CRN
	// var tmp = getParam("geo.boundsMinLong");
	// alert(tmp);
	
    //GLOBAL DATA SOURCE
    $scope.categories=_usualCategoriesDatas;
    $scope.itemPerRow=3;
    
})
.controller('DechetCatSubCtrl', 
            function($scope, $stateParams, $filter) {

            //GLOBAL DATA SOURCE
            var selected_categorie_usuelle = $stateParams.code;
            $scope.dechets = $filter('filter')(_garbagesDatas, {
                            cat_usuel : selected_categorie_usuelle
                    }); 

})
.controller(
            'DechetDetailCtrl',
            function($scope, $stateParams, $filter) {

                    var dechet_code = $stateParams.code;
                    //On récupère le déchet qui correspondant au code 
                    dechets = $filter('filter')(_garbagesDatas, {
                            code : dechet_code
                    });

                    $scope.toggleObject = {
                            item : -1
                    };
                    $scope.toggleObject2 = {
                            item2 : -1
                    };

                    //Le filter renvoie necessairement un Array donc on extrait le premier élément trouvé
                    var dechet = dechets[0];

                    //Array modes collectes (split de la chaine)
                    var modesCollectes = dechet.modco.split(",");

                    //RE-FILTER sur les modes de collecte
                    var modesCollectesFilter = $filter('filter')(_collectModsDatas,
                    //CUSTOM INLINE FILTER
                    function(value, index, fullarray) {
                            //Modes de collecte déchet           
                            myindex = modesCollectes.indexOf(value.code);
                            if (myindex >= 0)
                                    return true;
                            else
                                    return false;
                    });

                    // CRN
                    // Tableau des conseils (découpage de la chaine)
                    if (dechet.cons != null) {
                            var conseils = dechet.cons.split(",");

                            // RE-FILTER sur les conseils
                            var conseilsFilter = $filter('filter')(_advicesDatas,
                            // CUSTOM INLINE FILTER
                            function(value, index, fullarray) {
                                    // Conseils déchet           
                                    myindex = conseils.indexOf(value.code);
                                    if (myindex >= 0) {
                                            return true;
                                    } else {
                                            return false;
                                    }
                            });
                    }
                    if (dechet.recyc === "PAS_POUBELLE") {
                            dechet.recyc_color = "orange";
                            dechet.recyc = "Ne pas mettre à la poubelle";
                            dechet.recyc = _translate("label_NON")
                                            + _translate("label_pas_poubelle");
                    } else if (dechet.recyc === "NON") {
                            dechet.recyc_color = "red";
                            dechet.recyc = _translate("label_NON");
                    } else {
                            dechet.recyc_color = "green";
                            dechet.recyc = _translate("label_OUI");
                    }

                    //SCOPE
                    $scope.dechet = dechet;
                    $scope.modesCollecte = modesCollectesFilter;
                    $scope.conseils = conseilsFilter;

});

