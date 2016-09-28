angular.module('starter.controllers').factory('ParamService',
		function($filter) {

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
			}

			return {
				getParam : _getParam
			};
		});