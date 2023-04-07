import inquirer from "inquirer";
import {getRecord} from "./getRecord";

const allowedRecordTypes = ["salesorder", "transaction", "purchaseorder", "employee", "savedsearch"];

/**
 * Prompts the user to select a record type and enter a record ID, and then fetches the record from Netsuite.
 * @returns {Promise<void>}
 */
const main = async () => {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "recordType",
      message: "Select a record type:",
      choices: allowedRecordTypes,
    },
    {
      type: "input",
      name: "recordId",
      message: "Enter the record ID:",
      validate: (input: string) => {
        return input.trim() !== "" || "Record ID cannot be empty";
      },
    },
  ]);

  try {
    const recordData = await getRecord(answers.recordType, answers.recordId);
    console.log(recordData);
  } catch (error) {
    console.error(error);
  }
};

main();
