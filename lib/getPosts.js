const Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
});

var base = Airtable.base(process.env.AIRTABLE_BASE_ID);
const table = base(process.env.AIRTABLE_TABLE_NAME);

const getMinifiedRecords = records => {
  return records.map(record => minifyRecord(record));
};

const minifyRecord = record => {
  return {
    id: record.id,
    route: record.fields.route,
    fields: record.fields,
  };
};

export default async function getPosts() {
  const records = await table.select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);
  return minifiedRecords;
}