use('linkedin-learning');

db.dropCollection('tests');
const arr = db.getCollection('vendors').aggregate([
  // Find all of the sales that occurred in 2014.
  { $lookup: {
    from: "products",
    localField: "items",
    foreignField: "_id",
    as: "items"
  }},
  { $out: "tests" }

]);

  // Print the results
  const result = arr.toArray();
  printjson(result);

