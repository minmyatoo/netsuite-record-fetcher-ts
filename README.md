# Netsuite Record Fetcher

This is a command-line tool that allows you to fetch records from Netsuite using RESTlets. You can select the type of
record to fetch and provide the record ID to retrieve.

## Usage

To use the tool, run the following command:

```shell
npm install
```

You will be prompted to select the type of record to fetch and provide the record ID. The tool will then retrieve the
record and log it to the console.

## Configuration

The tool requires the following configuration:

- `netsuite.restletUrl`: The URL of the RESTlet to use for fetching records.

You can set these configuration options in the `config.ts` file.

## Supported Record Types

The tool supports the following record types:

- salesorder
- transaction
- purchaseorder
- employee
- savedsearch

## License

This tool is licensed under the [MIT License](https://opensource.org/licenses/MIT).
