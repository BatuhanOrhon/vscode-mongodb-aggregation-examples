use('linkedin-learning');

const arr = db.getCollection('vendors').aggregate([
  // Find all of the sales that occurred in 2014.
  { $lookup: {
    from: "products",
    localField: "items",
    foreignField: "_id",
    as: "items"
  }},
]);

  // Print the results
  const result = arr.toArray();
  printjson(result);

