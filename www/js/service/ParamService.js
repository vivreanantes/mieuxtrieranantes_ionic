function ParamService($filter) {

	/**
	 * Renvoie la valeur d'un paramètre (les paramètres sont regroupés dans
	 * _paramsDatas)
	 */
	this.getParam = function(stKey) {
		var datas = _paramsDatas;
		if (datas[stKey] == null) {
			result = stKey;
		} else {
			result = datas[stKey];
		}
		return result;
	};

};

angular.module('starter.services', []).service('ParamService', ParamService);
