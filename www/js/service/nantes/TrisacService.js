angular.module('starter.controllers').factory('TrisacService',
		function ($filter) {

			// GLOBAL DATA
            var structuresData = _structuresDatas;

			var _serviceData = $filter('filter')(structuresData,
					// CUSTOM INLINE FILTER
					function(value, index, fullarray) {

				if (value.modesCollecte == 'modco_distrisac')
					return true;
				else
					return false;
			});

			// FONCTIONS

			var _getAll = function() {

				return _serviceData;

			};

			return {
				getAll : _getAll,
				serviceData : _serviceData
			};
		});