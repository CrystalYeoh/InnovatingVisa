import Storage from "./Creategcpbucket";

const bucketName = "Keith_1";

// Imports the Google Cloud client library

export default async function CreateBucket() {
  // Creates a new bucket in the Asia region with the coldline default storage
  // class. Leave the second argument blank for default settings.
  //
  // For default values see: https://cloud.google.com/storage/docs/locations and
  // https://cloud.google.com/storage/docs/storage-classes

  const [bucket] = await Storage.createBucket(bucketName, {
    location: "ASIA",
    storageClass: "COLDLINE",
  });

  console.log(`Bucket ${bucket.name} created.`);
}
