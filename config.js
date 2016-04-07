"use strict";
class Config {
}
Config.DbConnection = "mongodb://localhost:27017/userDatabase";
Config.basePath = "data";
Config.apiversion = "v1";
Config.ElasticSearchConnection = "http://localhost:9200";
Config.ApplyElasticSearch = false;
exports.Config = Config;
class Security {
}
Security.isAutheticationEnabled = "disabled"; //allowed values: "disabled","enabledWithoutAuthorization","enabledWithAuthorization"
Security.authenticationType = "passwordBased"; //allowed values: "passwordBased","TokenBased"
exports.Security = Security;
class facebookAuth {
}
facebookAuth.clientID = '11'; // your App ID
facebookAuth.clientSecret = 'aa'; // your App Secret
facebookAuth.callbackURL = 'http://localhost:23548/auth/facebook/callback';
exports.facebookAuth = facebookAuth;

//# sourceMappingURL=config.js.map
