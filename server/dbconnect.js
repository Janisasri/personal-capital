var nano = require('nano');
const url = "https://apikey-v2-15a2mog1stn0kv0gjnidlq2eoth4psp58f8ov9zs42i6:aabcfd48d07fe38f4760f6cd11b83b4a@b4af4ef2-55e1-4a9b-9b02-8168e5964652-bluemix.cloudantnosqldb.appdomain.cloud";
const nanodb = nano(process.env.COUCHDB_URL || url);// connect with couchdb
const testdb = nanodb.use('personal-capital'); // connect to database
module.exports = { testdb, nano };