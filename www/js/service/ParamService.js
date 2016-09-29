angular.module('starter.controllers').factory('ParamService',
		function($filter,$localStorage) {
			// Initialise la config
			$localStorage = $localStorage.$default({
						things : []
					});

			var _getValue = function(key) {
				return $localStorage[key];
			};

			var _setValue = function(key, value) {
				$localStorage[key] = value;
			};

			/**
			 * Renvoie la valeur d'un paramètre (les paramètres sont regroupés
			 * dans _paramsDatas)
			 */
			var _getParam = function(stKey) {
				var datas = _paramsDatas;
				if (datas[stKey] == null) {
					result = stKey;
				} else {
					result = datas[stKey];
				}
				return result;
			};

			return {
				getParam : _getParam,
				setValue : _setValue,
				getValue : _getValue
			};
		});