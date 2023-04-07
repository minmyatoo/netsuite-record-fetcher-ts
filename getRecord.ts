import axios, {AxiosRequestConfig} from "axios";
import {createOAuthHeader} from "./oauth1Utils";
import {netsuite} from "./config";

/**
 * Fetches a record from Netsuite based on the provided record type and ID.
 * @param {string} recordType - The type of record to fetch.
 * @param {string} recordId - The ID of the record to fetch.
 * @returns {Promise<any>} A promise that resolves with the reformatted fetched record data, or rejects with an error.
 */
export const getRecord = async (recordType: string, recordId: string): Promise<any> => {
  const url = `${netsuite.restletUrl}&type=${recordType}&id=${recordId}`;
  const headers = createOAuthHeader(url, "GET");

  try {
    const response = await axios.get(url, {headers: headers as AxiosRequestConfig["headers"]});
    // Reformat the record data as needed.
    return {
      response:response.data
    };
  } catch (error) {
    throw new Error(`Error fetching record: ${error}`);
  }
};
