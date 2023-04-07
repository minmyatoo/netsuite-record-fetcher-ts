import {getRecord} from '../getRecord';

describe('getRecord', () => {
  it('returns a record object when passed a valid record type and ID', async () => {
    const recordType = 'employee';
    const recordId = '-5';
    const record = await getRecord(recordType, recordId);
    expect(record).toBeDefined();
    expect(record.response).toBeDefined();
  });

  it('throws an error when passed an invalid record type or ID', async () => {
    const recordType = 'invalidType';
    const recordId = 'invalidId';

    await expect(getRecord(recordType, recordId)).rejects.toThrow();
  });
});
