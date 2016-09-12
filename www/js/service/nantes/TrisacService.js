function ServiceTrisac($filter) {

	// GLOBAL DATA 
	// _structuresDatas;

	this.serviceData = $filter('filter')(_structuresDatas,
			//CUSTOM INLINE FILTER
			function(value, index, fullarray) {

		if (value.modesCollecte == 'modco_distrisac')
			return true;
		else
			return false;
	});

	//FONCTIONS

	this.getAll = function() {

		return this.serviceData;

	};

};

angular.module('starter.services').service('ServiceTrisac', ServiceTrisac);
