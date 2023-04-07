import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import {netsuite, realm} from "./config";

/**
 * Create an instance of the OAuth object with the provided consumer key and secret.
 * The `hash_function` property is set to use HMAC-SHA256 algorithm for signature hashing.
 */
const oauth = new OAuth({
  consumer: {
    key: netsuite.consumerKey,
    secret: netsuite.consumerSecret,
  },
  signature_method: "HMAC-SHA256",
  hash_function(base_string, key) {
    return CryptoJS.HmacSHA256(base_string, key).toString(CryptoJS.enc.Base64);
  },
});

/**
 * Represents an HTTP header, which is an object that maps header field names to their values.
 */
export interface Header {
  [key: string]: string;
}

/**
 * Generates an OAuth 1.0a header for a given URL and HTTP method, as well as any additional data (if any).
 * @param {string} url - The URL to be used in the request.
 * @param {"GET" | "POST" | "PUT" | "DELETE"} method - The HTTP method to be used in the request.
 * @returns {Header} An object representing the generated header.
 */
export const createOAuthHeader = (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE"
): Header => {
  const requestData = {
    url,
    method,
    data: {},
  };

  const token = {
    key: netsuite.token,
    secret: netsuite.tokenSecret,
  };

  const oauthHeaders = oauth.toHeader(oauth.authorize(requestData, token));
  const headers: Header = {
    ...oauthHeaders,
    Authorization: `${oauthHeaders.Authorization}, realm="${realm}"`,
    "Content-Type": "application/json",
  };

  return headers;
};
