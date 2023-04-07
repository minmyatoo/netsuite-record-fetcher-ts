/**
 * Configuration for connecting to NetSuite via OAuth1.
 *
 * @typedef {Object} NetsuiteConfig
 * @property {string} account - The NetSuite account ID to connect to.
 * @property {string} consumerKey - The OAuth1 consumer key for your application.
 * @property {string} consumerSecret - The OAuth1 consumer secret for your application.
 * @property {string} token - The OAuth1 token for your NetSuite user.
 * @property {string} tokenSecret - The OAuth1 token secret for your NetSuite user.
 * @property {string} restletUrl - The URL of the NetSuite RESTlet to use.
 */

/**
 * Configuration for connecting to NetSuite via SAML.
 *
 * @typedef {Object} RealmConfig
 * @property {string} realm - The NetSuite realm ID to connect to.
 */

/**
 * Configuration for connecting to NetSuite.
 *
 * @typedef {Object} NetSuiteConfig
 * @property {NetsuiteConfig} netsuite - Configuration for connecting via OAuth1.
 * @property {RealmConfig} realm - Configuration for connecting via SAML.
 */

/**
 * Configuration for connecting to NetSuite.
 *
 * @type {NetSuiteConfig}
 */
export const netsuite = {
  account: "1234567-sb1",
  consumerKey: "YOUR_CONSUMER_KEY",
  consumerSecret: "YOUR_CONSUMER_SECRET",
  token: "YOUR_TOKEN",
  tokenSecret: "YOUR_TOKEN_SECRET",
  restletUrl: "https://1234567-sb1.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=1234&deploy=1",
};
/**
 * Configuration for connecting to NetSuite via SAML.
 * @type {RealmConfig}
 */
export const realm = "1234567_SB1";
