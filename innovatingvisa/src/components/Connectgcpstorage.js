const { Storage } = require("@google-cloud/storage");

// Creates a client
const storage = new Storage();
// Creates a client from a Google service account key.
// const storage = new Storage({keyFilename: "key.json"});

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const bucketName = 'bucket-name';

export default async function createBucket() {
  // Creates the new bucket
  await storage.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created.`);
}
