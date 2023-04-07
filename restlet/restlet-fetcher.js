/**
 * @NApiVersion 2.1
 * @NScriptType Restlet
 */

/**
 * Retrieves data from a record or saved search based on parameters passed in.
 * @param {Object} params - The parameters used to retrieve the data.
 * @param {string} params.id - The ID of the record or saved search to retrieve data from.
 * @param {string} params.type - The type of the record or saved search to retrieve data from.
 * @returns {Object} - An object containing the success status and retrieved data.
 * @throws {error.SuiteScriptError} - If required parameters are missing or if record or saved search cannot be found.
 */
define(['N/record', 'N/error', 'N/search'], (record, error, search) => {

    const doGet = params => {
        if (!params.id || !params.type) {
            throw error.create({
                name: 'MISSING_PARAMETER',
                message: 'Missing required parameter: id or type.'
            });
        }

        try {
            if (params.type === "savedsearch") {
                const searchObj = search.load({
                    id: params.id
                });
                const results = [];
                const searchResult = searchObj.run();
                const pageSize = 1000;
                let pageIndex = 0;
                let resultRange = searchResult.getRange({
                    start: pageIndex * pageSize,
                    end: (pageIndex + 1) * pageSize
                });
                while (resultRange.length > 0) {
                    results.push(...resultRange);
                    pageIndex++;
                    resultRange = searchResult.getRange({
                        start: pageIndex * pageSize,
                        end: (pageIndex + 1) * pageSize
                    });
                }
                if (results.length > 0) {
                    return {
                        success: true,
                        data: results
                    };
                } else {
                    throw error.create({
                        name: 'RECORD_NOT_FOUND',
                        message: 'Record not found or unable to load.'
                    });
                }
            } else {
                const rec = record.load({
                    type: params.type,
                    id: params.id
                });
                return {
                    success: true,
                    data: rec
                };
            }
        } catch (err) {
            throw error.create({
                name: 'RECORD_NOT_FOUND',
                message: 'Record not found or unable to load.'
            });
        }
    };
    return {
        get: doGet
    };

});
