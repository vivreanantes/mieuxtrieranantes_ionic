angular.module('starter.controller', []).factory('TrisacService',
		function TrisacService($filter) {

			// GLOBAL DATA
			// _structuresDatas;

			var _serviceData = $filter('filter')(_structuresDatas,
					// CUSTOM INLINE FILTER
					function(value, index, fullarray) {

				if (value.modesCollecte == 'modco_distrisac')
					return true;
				else
					return false;
			});

			// FONCTIONS

			var _getAll = function() {

				return this.serviceData;

			}

			return {
				getAll : _getAll,
				serviceData : _serviceData
			};
		});