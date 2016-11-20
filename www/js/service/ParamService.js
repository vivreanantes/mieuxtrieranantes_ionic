angular.module('starter.controllers').factory('ParamService',
		function($filter, $localStorage) {
			// Initialise la config
			$localStorage = $localStorage.$default({
						things : []
					});

			/**
			 * Renvoie la valeur d'un paramètre stocké dans le stockage local.
			 */
			var _getValueInLocalStorage = function(key) {
				return $localStorage[key];
			};

			/**
			 * Renvoie la valeur d'un paramètre stocké dans le stockage local.
			 * S'il est absent, prend celui du paramètre.
			 */
			var _getValueInLocalStorageWithDefault = function(key, defaultParam) {
				var result = _getValueInLocalStorage(key);
				if (result === null) {
					result = _getParam(defaultParam)
				}
				return result;
			};

			/**
			 * Sauve la valeur d'un paramètre stocké dans le stockage local.
			 */
			var _setValueInLocalStorage = function(key, value) {
				$localStorage[key] = value;
			};

			/**
			 * Renvoie la valeur d'un paramètre (les paramètres sont regroupés dans _paramsDatas)
			 * Si le paramètre n'existe pas, renvoie defaultValue
			 */
			var _getParam = function(stKey, defaultValue) {
				var datas = _paramsDatas;
				if (datas[stKey] == null) {
					result = defaultValue;
				} else {
					result = datas[stKey];
				}
				return result;
			};
			
			var _getNumberParam = function(stKey, defaultValue) {
				var result = parseFloat(_getParam(stKey, defaultValue));
				return result;
			};

			return {
				getParam : _getParam,
				getNumberParam : _getNumberParam,
				setValueInLocalStorage : _setValueInLocalStorage,
				getValueInLocalStorage : _getValueInLocalStorage,
				getValueInLocalStorageWithDefault : _getValueInLocalStorageWithDefault
			};
		});