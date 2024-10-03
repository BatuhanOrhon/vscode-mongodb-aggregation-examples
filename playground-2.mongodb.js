use('linkedin-learning');

const arr = db.getCollection('orders').aggregate([
    // Find all of the sales that occurred in 2014.
    { $match: { "customer.address.state" : "CA" }},
    { $sort : {total : -1} },
    { $limit : 10 }
  ]);
  
  // Print the results
  const result = arr.toArray();
  printjson(result);

